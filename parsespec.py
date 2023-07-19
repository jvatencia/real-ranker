import pandas as pd
import numpy as np
from tqdm import tqdm

# from numbers import success
# from data import cost, outcomes, success, support, value
import data.weighted_debt_average as debt
import data.weighted_income_average as income
import data.parent_plus_loan_debt as ppld
import data.success as success
import data.support as support
import data.outcomes as outcomes


# print(success.summary())
# print(success.compute(.1, .1, .1, .1, .1))

"""
    Weighted Debt Average (DONE)
        Columns: ["CUML_DEBT_P90","CUML_DEBT_P75","CUML_DEBT_P25","CUML_DEBT_P10","DEBT"]
        Want: percentile OF the weighted debt average
        Ordering: Ascending, because 100% percentile debt --> good; 0% percentile debt --> bad
    
    Weighted Income Average (DONE)
        Columns: PCT10_EARN_WNE_P10, PCT25_EARN_WNE_P10, PCT75_EARN_WNE_P10, PCT90_EARN_WNE_P10
    
    Net price
        Columns: NPT41_PUB, NPT42_PUB, NPT43_PUB, NPT44_PUB, NPT45_PUB, NPT41_PRIV, NPT42_PRIV, NPT43_PRIV, NPT44_PRIV, NPT45_PRIV

    Support (RACE - DONE;  - NOT DONE)
        Race Columns: ['C150_4_BLACK', 'C150_4_HISP', 'C150_4_NHPI', 'C150_4_AIAN', 'C150_4']
            UGDS_BLACK, UGDS_HISP, UGDS_NHPI, UGDS
            underrepresented population: UGDS* (UGDS_BLACK+UGDS_HISP+UGDS_AIAN+UGDS_NHPI)
            weighting for above difference: UGDS*UGDS_BLACK/UNDERREPRESENTED POP
        Socioeconomic columns: ['C150_PELL',  'COMP_ORIG_YR4_RT', LO_INC_WDRAW_ORIG_YR3_RT, IND_WDRAW_ORIG_YR3_RT, FIRSTGEN_WDRAW_ORIG_YR3_RT, LO_INC_COMP_ORIG_YR4_RT, IND_COMP_ORIG_YR4_RT, FIRSTGEN_COMP_ORIG_YR4_RT]
    
    Success (DONE (w/ questions))
        Columns: ['C150_4', 'C100_4', 'WDRAW_ORIG_YR3_RT', sum(all columns with '_TRANS_' inside) (for transfer)]

    Median parent plus loan debt (DONE)
        Columns: ['PPLUS_PCT_LOW', 'PPLUS_PCT_HIGH', 'PLUS_DEBT_ALL_MD']
"""

columnsWeCareAbout = [
    #identifiers
    'ccbasic',
    'ccsizset',
    'adm_rate',
    # 'st_fips', non numeric
    # 'region', non numeric
    # parent plus loan debt
    'pplus_pct_low',
    'pplus_pct_high',
    'plus_debt_all_md',
    #success score
    'c150_4',
    'c100_4',
    'wdraw_orig_yr3_rt',
    'trans_4',
    #support scores
    'c150_4_black',
    'c150_4_hisp',
    'c150_4_nhpi',
    'c150_4_aian',
    'c150_4',
    'ugds_black',
    'ugds_hisp',
    'ugds_aian',
    'ugds_nhpi',
    'ugds',
    'c150_4_pell',
    'ind_comp_orig_yr4_rt',
    'lo_inc_comp_orig_yr4_rt',
    'firstgen_comp_orig_yr4_rt',
    'comp_orig_yr4_rt',
    'ind_wdraw_orig_yr3_rt',
    'lo_inc_wdraw_orig_yr3_rt',
    'firstgen_wdraw_orig_yr3_rt',
    'wdraw_orig_yr3_rt',
    # weighted debt average
    'cuml_debt_p10',
    'cuml_debt_p25',
    'cuml_debt_p75',
    'cuml_debt_p90',
    'NPT41_PUB', 'NPT42_PUB', 'NPT43_PUB', 'NPT44_PUB', 'NPT45_PUB', 'NPT41_PRIV', 'NPT42_PRIV', 'NPT43_PRIV', 'NPT44_PRIV', 'NPT45_PRIV',
    #weighted income average
    'pct10_earn_wne_p10',
    'pct25_earn_wne_p10',
    'pct75_earn_wne_p10',
    'pct90_earn_wne_p10',

]

def parse_new(src: str):
    # load source csv
    df = pd.read_csv(src, low_memory=False)
    df.columns = df.columns.str.lower()
    # TODO: columbia, set ccbasic(15), ccsizset, and control(2) to harvards
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'ccbasic'] = 15
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'ccsizset'] = 6
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'control'] = 2

    #filter out colleges we care about
    df = df[df['ccbasic'] >= 15]
    df = df[df['ccsizset'] >= 6]
    df = df[df['control'].isin([1, 2])]
    for col in columnsWeCareAbout:
        col = col.lower()
        if (col != 'instnm'):
            df[col] = df[col].apply(pd.to_numeric, errors='coerce')
        if 'ugds' in col:
            ## Things to bring up:
            ### - equation for parent plus loan debt (currently taking mean)?
            print(col)
    df.drop_duplicates(subset=['instnm'], inplace=True)

    # for each computed statistic for which we desire a percentile:
    ## collect the computed pre-percentile value
    debt_col = list()
    support_col = list()
    income_col = list()
    ppld_col = list()
    for i, row in df.iterrows():
        support_col.append(support.compute_on_row(row))
        debt_col.append(debt.compute_on_row(row))
        income_col.append(income.compute_on_row(row))
        ppld_col.append(ppld.compute_on_row(row))
    df['weighted_debt'] = debt_col
    df['weighted_income'] = income_col
    df['support'] = support_col
    df['parent_plus_loan_debt'] = ppld_col

    #second pass, for values that require computation of priors
    success_col = list()
    outcomes_col = list()
    for i, row in df.iterrows():
        success_col.append(success.compute_on_row(row))
        outcomes_col.append(outcomes.compute_on_row(row))
    df['success'] = success_col
    df['outcomes'] = outcomes_col


    ## then get the corresponding percentiles
    getRelativeAndAbsolutePercentiles(df, 'support', ascending=True)
    getRelativeAndAbsolutePercentiles(df, 'weighted_debt', ascending=True)
    getRelativeAndAbsolutePercentiles(df, 'weighted_income', ascending=False)
    getRelativeAndAbsolutePercentiles(df, 'parent_plus_loan_debt', ascending=True)
    getRelativeAndAbsolutePercentiles(df, 'success', ascending=True)
    getRelativeAndAbsolutePercentiles(df, 'outcomes', ascending=False)
    #cost requires percentiles for each npt4{1/2/3/4/5}_{pub/priv} permutation
    cost_cols = ['NPT41_PUB', 'NPT42_PUB', 'NPT43_PUB', 'NPT44_PUB', 'NPT45_PUB', 'NPT41_PRIV', 'NPT42_PRIV', 'NPT43_PRIV', 'NPT44_PRIV', 'NPT45_PRIV']
    for cost_col in cost_cols:
        getRelativeAndAbsolutePercentiles(df, cost_col.lower(), ascending=False)



def getRelativeAndAbsolutePercentiles(df, column, ascending=False):
    df=df.dropna(subset=[column])
    df.reset_index(inplace=True)
    # create dictionary mapping from school names to their indices in the source dataframe
    schoolIdxLookup = dict([(schoolName, i) for i, schoolName in enumerate(df['instnm'])])

    percentiles=[]
    hashedRelativeRanks = [None for i in range(len(schoolIdxLookup))]
    # print(1/0)
    #sort initial data frame column by column in descending order, find length, and calculate percentiles
    test = df.sort_values(column, ascending=ascending) #include column 
    test.reset_index(drop=True, inplace=True)
    nl=len(test)

    #calculate percentiles, relative as well as absolute
    l = []
    for i in tqdm(range(0,nl), total=nl):
        cn=test.loc[i]['instnm'] #THIS DOES WORK, THE DATA FRAME LOOKS AT THE COLUMN EXCLUDING ALL EMPTY VALUES
        comparableIdx = schoolIdxLookup[cn]
        if (hashedRelativeRanks[comparableIdx] != None):
            rank=abs((i-nl))/nl
            l.append([cn,column,rank,hashedRelativeRanks[comparableIdx]])
            continue
        ccb, ccs, state, region, adm = test.loc[i, 'ccbasic'], test.loc[i, 'ccsizset'], test.loc[i, 'st_fips'], test.loc[i, 'region'], test.loc[i, 'adm_rate']
        adm1=round(adm, 1)
        if adm-adm1<0:
            adm2=adm1-0.1
        else:
            adm2=adm1
            adm1=adm2+0.1
        result=test.loc[(test['ccbasic']== ccb) | (test['ccsizset']== ccs) | (test['st_fips']== state) | (test['region']== region) | (test['adm_rate'] >adm2) & (test['adm_rate'] < adm1)] 
        news=result.dropna(subset=[column])
        new = news.sort_values(column, ascending=True) #include column 
        new.reset_index(inplace=True)
        nz=len(new) #WE SHOULD KEEP NAMES ATTACHED TO THEIR VALUE AND DROP ENTIRE ROW FROM DATAFRAME IF THE ROW IS EMPTY
        indiez = None
        for k, row in new.iterrows():
            if row['instnm']==cn:
                indiez=k
        if (indiez is None):
            continue
        rank2=abs((indiez-nz))/nz
        hashedRelativeRanks[comparableIdx] = rank2
        for k, comparableCollege in new.iterrows():
            relativeRank=abs((k-nz))/nz
            comparableIdx = schoolIdxLookup[comparableCollege['instnm']]
            hashedRelativeRanks[comparableIdx] = relativeRank
        # for every i, j that is in `result` dataframe, populate it with rank2
        rank=abs((i-nl))/nl
        l.append([cn,column,rank,rank2])
    percentiles.append(l)
    dfD = dict()
    dfD['school'] = schoolIdxLookup.keys()
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
    dfD.to_csv('./results/%s_result.csv' % column)

if __name__=='__main__':
    # parse_new('calculator.csv')
    parse_new('Most-Recent-Cohorts-Institution.csv')