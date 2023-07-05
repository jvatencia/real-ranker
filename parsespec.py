import pandas as pd
import numpy as np
from tqdm import tqdm


def parse(src: str):
    df = pd.read_csv(src, low_memory=False)
    df.drop_duplicates(inplace=True, subset=['INSTNM'])
    # df.reset_index(inplace=True)
    #df.columns = df.iloc[0]
    #df = df[1:]
    percentiles=[]
    columns=["CUML_DEBT_P90","CUML_DEBT_P75","CUML_DEBT_P25","CUML_DEBT_P10","DEBT"]
    schoolIdxLookup = dict([(schoolName, i) for i, schoolName in enumerate(df['INSTNM'])])
    print(len(schoolIdxLookup)) 
    print(len(df))
    hashedRelativeRanks = [[None for j in range(len(columns))] for i in range(len(schoolIdxLookup))]
    #calculate percentile
    #for i in range of length:
    l=[]
    for j in range(0,len(columns)):
        #sort initial data frame column by column in descending order, find length, and calculate percentiles
        chiefer=df.dropna(subset=[columns[j]])
        chiefer.to_csv('drop.csv',index=False)
        test = chiefer.sort_values(columns[j], ascending=True) #include column 
        test.reset_index(drop=True, inplace=True)
        nl=len(test)
        test.to_csv('testsss.csv', index=False)
        # l.append((columns[j] +' PERCENTILE'))
        for i in tqdm(range(0,nl), total=nl):
            print(test.loc[i][j])
            print(test.loc[i][columns[j]])
            cn=test.loc[i]['INSTNM'] #THIS DOES WORK, THE DATA FRAME LOOKS AT THE COLUMN EXCLUDING ALL EMPTY VALUES
            print(cn)
            comparableIdx = schoolIdxLookup[cn]
            if (hashedRelativeRanks[comparableIdx][j] != None):
                rank=abs((i-nl))/nl
                l.append([cn,columns[j],rank,hashedRelativeRanks[comparableIdx][j]])
                continue
            ccb, ccs, state, region, adm = test.loc[i][1:6]
            adm1=round(adm, 1)
            if adm-adm1<0:
                adm2=adm1-0.1
            else:
                adm2=adm1
                adm1=adm2+0.1
            result=test.loc[(test['CCBASIC']== ccb) | (test['CCSIZSET']== ccs) | (test['ST_FIPS']== state) | (test['REGION']== region) | (test['ADM_RATE'] >adm2) & (test['ADM_RATE'] < adm1)] 
            news=result.dropna(subset=[columns[j]])
            new = news.sort_values(columns[j], ascending=True) #include column 
            new.reset_index(inplace=True)
            new.to_csv('testsss3.csv', index=False)
            nz=len(new) #WE SHOULD KEEP NAMES ATTACHED TO THEIR VALUE AND DROP ENTIRE ROW FROM DATAFRAME IF THE ROW IS EMPTY
            for k, row in new.iterrows():
                if row['INSTNM']==cn:
                    indiez=k
            rank2=abs((indiez-nz))/nz
            if (rank2 > 1):
                print('AAAAH')
                print(i, j, cn, comparableIdx, indiez)
                print(1/0)
            hashedRelativeRanks[comparableIdx][j] = rank2
            for k, comparableCollege in new.iterrows():
                relativeRank=abs((k-nz))/nz
                if (relativeRank > 1):
                    print('AAAAH')
                    print(i, j, cn, comparableIdx, k, indiez, nz)
                    print(1/0)
                comparableIdx = schoolIdxLookup[comparableCollege['INSTNM']]
                hashedRelativeRanks[comparableIdx][j] = relativeRank
            # for every i, j that is in `result` dataframe, populate it with rank2
            rank=abs((i-nl))/nl
            l.append([cn,columns[j],rank,rank2])
        percentiles.append(l)
    dfD = dict()
    dfD['school'] = schoolIdxLookup.keys()
    for column in columns:
        dfD['%s_absolute' % (column)] = [np.nan for i in range(len(schoolIdxLookup))]
        dfD['%s_relative' % (column)] = [np.nan for i in range(len(schoolIdxLookup))]
    dfD = pd.DataFrame(dfD)
    print('... cleaning ...')
    for e in tqdm(l, total=len(l)):
        cn, column, absoluteRank, relativeRank = e
        rowIdx = schoolIdxLookup[cn]
        dfD.at[rowIdx,'school'] = cn
        dfD.at[rowIdx,'%s_absolute' % (column)] = absoluteRank
        dfD.at[rowIdx,'%s_relative' % (column)] = relativeRank
    # perc=pd.DataFrame(percentiles)
    # perc.to_csv('percentiles.csv', sep='\t', index=False)
    dfD.to_csv('debtapercs', index=False)

if __name__=='__main__':
    parse('debt.csv')