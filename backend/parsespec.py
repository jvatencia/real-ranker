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

original_cols_to_keep = ['INSTNM', 'CCBASIC', 'CCSIZSET', 'ST_FIPS', 'REGION', 'ADM_RATE', 'CONTROL', 'COMP_ORIG_YR4_RT', 'ENRL_ORIG_YR2_RT', 'ENRL_ORIG_YR3_RT', 'WDRAW_ORIG_YR3_RT', 'COMP_ORIG_YR3_RT', 'C100_4', 'C150_4',   'SUPPORT WITHOUT C100 and C150', 'SUPPORT WITH C100 and C150', 'C150_4_BLACK', 'C150_4_HISP', 'C150_4_NHPI', 'C150_4_PELL', 'LO_INC_WDRAW_ORIG_YR3_RT', 'IND_WDRAW_ORIG_YR3_RT', 'FIRSTGEN_WDRAW_ORIG_YR3_RT', 'LO_INC_COMP_ORIG_YR4_RT', 'IND_COMP_ORIG_YR4_RT', 'FIRSTGEN_COMP_ORIG_YR4_RT', 'COST SCORE 1', 'COST SCORE 2', 'COST SCORE 3', 'COST SCORE 4', 'COST SCORE 5', 'NPT41', 'NPT42', 'NPT43', 'NPT44', 'NPT45', 'PCT10_EARN_WNE_P10', 'PCT25_EARN_WNE_P10', 'PCT75_EARN_WNE_P10', 'PCT90_EARN_WNE_P10', 'PLUS_DEBT_INST_COMP_MD', 'PLUS_DEBT_ALL_NOCOMP_MD', 'DEBT_MDN', 'CUML_DEBT_P90', 'CUML_DEBT_P75', 'CUML_DEBT_P25', 'CUML_DEBT_P10', 'VALUE 1', 'VALUE 2', 'VALUE 3', 'VALUE 4', 'VALUE 5', 'PELL_EVER', 'AGEGE24', 'DEPENDENT', 'FIRST_GEN']

def parse_new(src: str):
    # load source csv
    df = pd.read_csv(src, low_memory=False)
    df.columns = df.columns.str.lower()
    spartans = list(df.columns)[:300]
    # TODO: columbia, set ccbasic(15), ccsizset, and control(2) to harvards
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'ccbasic'] = 15
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'ccsizset'] = 6
    df.loc[df['instnm'] == 'Columbia University in the City of New York', 'control'] = 2

    #filter out colleges we care about
    df = df[df['ccbasic'] >= 15]
    df = df[df['ccsizset'] >= 6]
    df = df[df['control'].isin([1, 2])]
    notPresent = list()
    colsWeWant = list()
    for col in columnsWeCareAbout+original_cols_to_keep:
        col = col.lower()
        colsWeWant.append(col)
        if (col != 'instnm'):
            try:
                df[col] = df[col].apply(pd.to_numeric, errors='coerce')
            except:
                notPresent.append(col)
                colsWeWant.pop()
        if 'ugds' in col:
            ## Things to bring up:
            ### - equation for parent plus loan debt (currently taking mean)?
            print(col)
    print("not presents: \n" + str(notPresent))
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

    df['key'] = df['instnm']
    ## then get the corresponding percentiles
    prefixes = [
        'support', 'weighted_debt', 'weighted_income', 'parent_plus_loan_debt', 
        'success', 'outcomes'
    ]
    supportAdded = getRelativeAndAbsolutePercentiles(df, 'support', ascending=True)
    supportAdded['key'] = supportAdded['school']
    df = df.join(supportAdded, lsuffix='_ng', rsuffix='_ndded')
    added = getRelativeAndAbsolutePercentiles(df, 'weighted_debt', ascending=True)
    added['key'] = added['school']
    df = df.join(added, lsuffix='_og', rsuffix='_odded')
    added=getRelativeAndAbsolutePercentiles(df, 'weighted_income', ascending=False)
    added['key'] = added['school']
    df = df.join(added, lsuffix='_ag', rsuffix='_added')
    added=getRelativeAndAbsolutePercentiles(df, 'parent_plus_loan_debt', ascending=True)
    added['key'] = added['school']
    df = df.join(added, lsuffix='_bg', rsuffix='_bdded')
    added=getRelativeAndAbsolutePercentiles(df, 'success', ascending=True)
    added['key'] = added['school']
    df = df.join(added, lsuffix='_cog', rsuffix='_cdded')
    added = getRelativeAndAbsolutePercentiles(df, 'outcomes', ascending=False)
    added['key'] = added['school']
    df = df.join(added, lsuffix='_dog', rsuffix='_ddded')
    #cost requires percentiles for each npt4{1/2/3/4/5}_{pub/priv} permutation
    cost_cols = ['NPT41_PUB', 'NPT42_PUB', 'NPT43_PUB', 'NPT44_PUB', 'NPT45_PUB', 'NPT41_PRIV', 'NPT42_PRIV', 'NPT43_PRIV', 'NPT44_PRIV', 'NPT45_PRIV']
    for cost_col in cost_cols:
        added=getRelativeAndAbsolutePercentiles(df, cost_col.lower(), ascending=False)
        prefixes.append(cost_col.lower())
        added['key'] = added['school']
        df = df.join(added, lsuffix='_ig', rsuffix='_idded')
        colsToQuit = list()
        for col in df.columns:
            if ('key' in col or '_ig' in col):
                colsToQuit.append(col)
        df = df.drop(columns=colsToQuit)
    scoreCols = []
    for col in prefixes:
        scoreCols.append('%s_absolute' % col)
        scoreCols.append('%s_relative' % col)
    df[colsWeWant+['st_fips', 'region']+scoreCols+spartans].to_csv('drink.csv', index=False)
    # df.to_csv('drink2.csv', index=False)
from orderColumns import parseByLine, s2
def export():
    columnOrder = parseByLine(s2)
    drink = pd.read_csv('drink.csv', low_memory=False)
    if 'Unnamed: 0' in drink.columns:
        drink = drink.drop(columns=['Unnamed: 0'])
    mixer = pd.read_csv('mixer.csv', low_memory=False)
    mixer.columns = ['_'.join(c.lower().split()) for c in mixer.columns]
    drink = pd.merge(drink, mixer, how='left', on='instnm')
    drink['id'] = [i+1 for i in range(len(drink))]
    drink[columnOrder].to_csv('cocktail.csv', index=False)
    print('all done!')
    # print(len(columnOrder))

    # print(df.columns)
    # print(len(df.columns))

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
    return dfD

def generateAlterationStatement():
    leftoverColumns = ['cip25cert2', 'cip23cert4', 'cip42bachl', 'weighted_debt_absolute', 'satvr25', 'SOCIAL DIVERSITY SCORE', 'ccsizset.2', 'actcm75', 'pcip45', 'satwr75', 'cip46cert4', 'cip38cert1', 'npt41_pub_absolute', 'cip01assoc', 'firstgen_wdraw_orig_yr3_rt.1', 'st_fips.1', 'ec_parent_ses_college', 'cip50bachl', 'npt42_pub_relative', 'cip38assoc', 'cip52cert4', 'cip41assoc', 'pell_ever', 'cip46bachl', 'pcip19', 'cip49assoc', 'numbranch', 'cip49cert1', 'cip14cert2', 'cip45bachl', 'satwr25', 'control', 'insturl', 'cip05assoc', 'cip13cert2', 'cip22cert2', 'plus_debt_inst_comp_md', 'adm_rate.2', 'ugds_2mor', 'pct25_earn_wne_p10.1', 'pcip12', 'cip10cert4', 'agege24', 'accredagency', 'npt43_pub_absolute', 'main', 'ugds_nhpi.1', 'npt41_priv_absolute', 'cip10bachl', 'city', 'cip45cert2', 'plus_debt_all_nocomp_md', 'cuml_debt_p10.1', 'distanceonly', 'pcip22', 'debt_mdn', 'cip46cert2', 'npt41_pub_relative', 'womenonly', 'cip44assoc', 'tribal', 'par_q5', 'cip26cert1', 'cip24cert4', 'cip47cert2', 'pcip03', 'pcip43', 'cip31cert2', 'actcmmid', 'lo_inc_wdraw_orig_yr3_rt.1', 'outcomes_absolute', 'ECONOMIC INCLUSION SCORE', 'cip49cert2', 'control.1', 'cip13cert4', 'cip11cert1', 'mr_ktop1_pq1', 'cip11assoc', 'cip41cert1', 'inventor_pq5', 'acten75', 'cip26assoc', 'hcm2', 'cip03cert4', 'cip41cert2', 'cip48cert1', 'cip44cert4', 'success_relative', 'pcip42', 'count', 'cip51bachl', 'pct10_earn_wne_p10.1', 'pcip47', 'success_absolute', 'cip40bachl', 'ind_wdraw_orig_yr3_rt.1', 'cip01bachl', 'pcip41', 'SOCIAL DIVERSITY SCORE_relative', 'cip40assoc', 'ug', 'ugds_aian.1', 'c100_4.1', 'cip29assoc', 'total_patents', 'total_cites', 'cip01cert4', 'cip03bachl', 'cuml_debt_p75.1', 'pcip23', 'pcip38', 'npt43_pub_relative', 'cip23cert1', 'cip40cert4', 'cip16cert4', 'cip44cert1', 'pcip50', 'c150_4_hisp.1', 'pcip14', 'pcip39', 'pcip05', 'region.1', 'cip30bachl', 'cip14assoc', 'cip19cert2', 'cip52bachl', 'hsi', 'cip23assoc', 'cip09cert1', 'ECONOMIC INCLUSION SCORE_absolute', 'cip11cert4', 'ccbasic.1', 'actmt25', 'cip39cert1', 'cip09cert2', 'par_q2', 'ugds_nra', 'npt42_pub_absolute', 'cip19cert1', 'cip11cert2', 'par_q1', 'ugds_asian', 'cip50cert2', 'unitid', 'satmt25', 'npt45_pub_absolute', 'cip13bachl', 'enrl_orig_yr3_rt', 'par_top5pc', 'c150_4_nhpi.1', 'ec_high_parent_ses_college', 'pcip16', 'cip12assoc', 'pcip49', 'cip51cert4', 'cip26cert4', 'c150_4.1', 'cip42cert1', 'cip23cert2', 'weighted_debt_relative', 'locale', 'nanti', 'satmt75', 'count_pq5', 'inventor_pq2', 'par_q4', 'cip30cert4', 'satmtmid', 'cip29cert4', 'cip29cert1', 'sat_avg', 'preddeg', 'cip47cert1', 'school_x', 'cip19assoc', 'pcip27', 'cip30cert2', 'cip48bachl', 'cip50cert4', 'relaffil', 'cip27bachl', 'satwrmid', 'pcip01', 'cip01cert1', 'parent_plus_loan_debt_absolute', 'cip16cert2', 'cip39cert4', 'cip25cert4', 'cip48assoc', 'opeid6', 'cip49bachl', 'parent_plus_loan_debt_relative', 'satvr75', 'wdraw_orig_yr3_rt.1', 'cip10assoc', 'cip41bachl', 'weighted_income_absolute', 'acten25', 'cip54cert2', 'npt45_priv_relative', 'cip38bachl', 'cip16assoc', 'cip52assoc', 'cip27cert4', 'cip54bachl', 'cuml_debt_p90.1', 'cip39bachl', 'cip25assoc', 'ind_comp_orig_yr4_rt.1', 'cip19bachl', 'cip10cert1', 'cip03cert2', 'cip27cert2', 'satvrmid', 'cip12cert2', 'cip31cert4', 'cip22cert4', 'pct90_earn_wne_p10.1', 'pcip31', 'cip48cert2', 'support_relative', 'cip12bachl', 'ccugprof', 'dependent', 'cip31cert1', 'count_pq4', 'support_absolute', 'npt42_priv_relative', 'cip54cert1', 'cip29cert2', 'first_gen', 'ugds_white', 'cip09cert4', 'npt41_priv_relative', 'cip41cert4', 'comp_orig_yr4_rt.1', 'pct75_earn_wne_p10.1', 'k_married', 'npt45_pub_relative', 'region.2', 'inventor_pq4', 'pcip10', 'cuml_debt_p25.1', 'c150_4.2', 'ugds_hisp.1', 'actmtmid', 'cip46assoc', 'cip14bachl', 'outcomes_relative', 'cip39assoc', 'cip09bachl', 'st_fips.2', 'cip43bachl', 'cip27cert1', 'cip48cert4', 'pcip26', 'cip05cert2', 'lo_inc_comp_orig_yr4_rt.1', 'actwrmid', 'cip42cert4', 'c150_4_pell.1', 'cip12cert4', 'mr_kq5_pq1', 'zip', 'cip27assoc', 'cip26cert2', 'annhi', 'cip30cert1', 'weighted_income_relative', 'count_pq3', 'cip38cert2', 'cip29bachl', 'cip09assoc', 'cip22cert1', 'cip16bachl', 'cip25cert1', 'ccsizset.1', 'cip45assoc', 'SOCIAL DIVERSITY SCORE_absolute', 'stabbr', 'menonly', 'par_q3', 'ECONOMIC INCLUSION SCORE_relative', 'c150_4_black.1', 'npt45_priv_absolute', 'cip14cert1', 'locale2', 'cip47assoc', 'npcurl', 'pcip48', 'cip22assoc', 'cip51assoc', 'cip15assoc', 'pcip09', 'cip43cert1', 'cip01cert2', 'cip45cert4', 'pcip11', 'actmt75', 'cip04assoc', 'npt44_priv_relative', 'cip12cert1', 'cip24bachl', 'cip54assoc', 'pcip13', 'cip24assoc', 'cip45cert1', 'cip42cert2', 'highdeg', 'cip23bachl', 'cip31bachl', 'cip04cert1', 'cip47cert4', 'actcm25', 'cip46cert1', 'pcip51', 'cip47bachl', 'cip44cert2', 'pcip24', 'inventor_pq1', 'par_top10pc', 'pcip44', 'cip14cert4', 'actenmid', 'cip38cert4', 'pcip52', 'cip26bachl', 'cip54cert4', 'npt44_priv_absolute', 'cip03assoc', 'npt44_pub_relative', 'pcip54', 'superopeid', 'cip51cert1', 'pcip40', 'pbi', 'ugds_black.1', 'cip05bachl', 'cip05cert4', 'cip15cert1', 'pcip15', 'cip24cert1', 'cip52cert2', 'cip04cert2', 'cip11bachl', 'cip16cert1', 'cip19cert4', 'cip15cert2', 'cip25bachl', 'sat_avg_all', 'count_pq2', 'pcip46', 'inventor_pq3', 'pcip25', 'instnm.1', 'cip39cert2', 'inventor', 'cip40cert2', 'cip50assoc', 'npt43_priv_relative', 'sch_deg', 'cip31assoc', 'npt44_pub_absolute', 'hbcu', 'cip40cert1', 'cip44bachl', 'cip13assoc', 'cip05cert1', 'actwr25', 'npt43_priv_absolute', 'cip51cert2', 'wdraw_orig_yr3_rt.2', 'cip10cert2', 'cip13cert1', 'pcip04', 'aanapii', 'cip30assoc', 'cip04cert4', 'cip49cert4', 'par_top1pc', 'top5cit', 'cip15bachl', 'cip04bachl', 'cip50cert1', 'par_toppt1pc', 'opeid', 'firstgen_comp_orig_yr4_rt.1', 'npt42_priv_absolute', 'cip43cert4', 'adm_rate_all', 'actwr75', 'cip42assoc', 'cip43assoc', 'pcip30', 'cip03cert1', 'cip15cert4', 'enrl_orig_yr2_rt', 'count_pq1', 'pcip29', 'longitude', 'latitude', 'comp_orig_yr3_rt', 'cip43cert2', 'cip24cert2', 'cip52cert1', 'cip22bachl']
    res = 'ALTER TABLE schools ADD ('
    typeDef = {
        'city': 'TEXT(100)',
        'stabbr': 'TEXT(100)',
        'zip': 'TEXT(100)',
        'accredagency': 'TEXT(100)',
        'insturl': 'TEXT(100)',
        'npcurl': 'TEXT(100)'
    }
    for col in leftoverColumns:
        if ('.' in col):
            print(col)
            continue
        postCol = '_'.join(col.lower().split())
        if (postCol != col):
            print(postCol + ' YO')
        res += '%s %s, ' % (postCol, typeDef.get(postCol, 'FLOAT'))
    res += ')'
    print(res)

'''ALTER TABLE schools ADD (cip25cert2 FLOAT, cip23cert4 FLOAT, cip42bachl FLOAT, weighted_debt_absolute FLOAT, satvr25 FLOAT, social_diversity_score FLOAT, actcm75 FLOAT, pcip45 FLOAT, satwr75 FLOAT, cip46cert4 FLOAT, cip38cert1 FLOAT, npt41_pub_absolute FLOAT, cip01assoc FLOAT, ec_parent_ses_college FLOAT, cip50bachl FLOAT, npt42_pub_relative FLOAT, cip38assoc FLOAT, cip52cert4 FLOAT, cip41assoc FLOAT, pell_ever FLOAT, cip46bachl FLOAT, pcip19 FLOAT, cip49assoc FLOAT, numbranch FLOAT, cip49cert1 FLOAT, cip14cert2 FLOAT, cip45bachl FLOAT, satwr25 FLOAT, control FLOAT, insturl TEXT(100), cip05assoc FLOAT, cip13cert2 FLOAT, cip22cert2 FLOAT, plus_debt_inst_comp_md FLOAT, ugds_2mor FLOAT, pcip12 FLOAT, cip10cert4 FLOAT, agege24 FLOAT, accredagency TEXT(100), npt43_pub_absolute FLOAT, main FLOAT, npt41_priv_absolute FLOAT, cip10bachl FLOAT, city TEXT(100), cip45cert2 FLOAT, plus_debt_all_nocomp_md FLOAT, distanceonly FLOAT, pcip22 FLOAT, debt_mdn FLOAT, cip46cert2 FLOAT, npt41_pub_relative FLOAT, womenonly FLOAT, cip44assoc FLOAT, tribal FLOAT, par_q5 FLOAT, cip26cert1 FLOAT, cip24cert4 FLOAT, cip47cert2 FLOAT, pcip03 FLOAT, pcip43 FLOAT, cip31cert2 FLOAT, actcmmid FLOAT, outcomes_absolute FLOAT, economic_inclusion_score FLOAT, cip49cert2 FLOAT, cip13cert4 FLOAT, cip11cert1 FLOAT, mr_ktop1_pq1 FLOAT, cip11assoc FLOAT, cip41cert1 FLOAT, inventor_pq5 FLOAT, acten75 FLOAT, cip26assoc FLOAT, hcm2 FLOAT, cip03cert4 FLOAT, cip41cert2 FLOAT, cip48cert1 FLOAT, cip44cert4 FLOAT, success_relative FLOAT, pcip42 FLOAT, count FLOAT, cip51bachl FLOAT, pcip47 FLOAT, success_absolute FLOAT, cip40bachl FLOAT, cip01bachl FLOAT, pcip41 FLOAT, social_diversity_score_relative FLOAT, cip40assoc FLOAT, ug FLOAT, cip29assoc FLOAT, total_patents FLOAT, total_cites FLOAT, cip01cert4 FLOAT, cip03bachl FLOAT, pcip23 FLOAT, pcip38 FLOAT, npt43_pub_relative FLOAT, cip23cert1 FLOAT, cip40cert4 FLOAT, cip16cert4 FLOAT, cip44cert1 FLOAT, pcip50 FLOAT, pcip14 FLOAT, pcip39 FLOAT, pcip05 FLOAT, cip30bachl FLOAT, cip14assoc FLOAT, cip19cert2 FLOAT, cip52bachl FLOAT, hsi FLOAT, cip23assoc FLOAT, cip09cert1 FLOAT, economic_inclusion_score_absolute FLOAT, cip11cert4 FLOAT, actmt25 FLOAT, cip39cert1 FLOAT, cip09cert2 FLOAT, par_q2 FLOAT, ugds_nra FLOAT, npt42_pub_absolute FLOAT, cip19cert1 FLOAT, cip11cert2 FLOAT, par_q1 FLOAT, ugds_asian FLOAT, cip50cert2 FLOAT, unitid FLOAT, satmt25 FLOAT, npt45_pub_absolute FLOAT, cip13bachl FLOAT, enrl_orig_yr3_rt FLOAT, par_top5pc FLOAT, ec_high_parent_ses_college FLOAT, pcip16 FLOAT, cip12assoc FLOAT, pcip49 FLOAT, cip51cert4 FLOAT, cip26cert4 FLOAT, cip42cert1 FLOAT, cip23cert2 FLOAT, weighted_debt_relative FLOAT, locale FLOAT, nanti FLOAT, satmt75 FLOAT, count_pq5 FLOAT, inventor_pq2 FLOAT, par_q4 FLOAT, cip30cert4 FLOAT, satmtmid FLOAT, cip29cert4 FLOAT, cip29cert1 FLOAT, sat_avg FLOAT, preddeg FLOAT, cip47cert1 FLOAT, school_x FLOAT, cip19assoc FLOAT, pcip27 FLOAT, cip30cert2 FLOAT, cip48bachl FLOAT, cip50cert4 FLOAT, relaffil FLOAT, cip27bachl FLOAT, satwrmid FLOAT, pcip01 FLOAT, cip01cert1 FLOAT, parent_plus_loan_debt_absolute FLOAT, cip16cert2 FLOAT, cip39cert4 FLOAT, cip25cert4 FLOAT, cip48assoc FLOAT, opeid6 FLOAT, cip49bachl FLOAT, parent_plus_loan_debt_relative FLOAT, satvr75 FLOAT, cip10assoc FLOAT, cip41bachl FLOAT, weighted_income_absolute FLOAT, acten25 FLOAT, cip54cert2 FLOAT, npt45_priv_relative FLOAT, cip38bachl FLOAT, cip16assoc FLOAT, cip52assoc FLOAT, cip27cert4 FLOAT, cip54bachl FLOAT, cip39bachl FLOAT, cip25assoc FLOAT, cip19bachl FLOAT, cip10cert1 FLOAT, cip03cert2 FLOAT, cip27cert2 FLOAT, satvrmid FLOAT, cip12cert2 FLOAT, cip31cert4 FLOAT, cip22cert4 FLOAT, pcip31 FLOAT, cip48cert2 FLOAT, support_relative FLOAT, cip12bachl FLOAT, ccugprof FLOAT, dependent FLOAT, cip31cert1 FLOAT, count_pq4 FLOAT, support_absolute FLOAT, npt42_priv_relative FLOAT, cip54cert1 FLOAT, cip29cert2 FLOAT, first_gen FLOAT, ugds_white FLOAT, cip09cert4 FLOAT, npt41_priv_relative FLOAT, cip41cert4 FLOAT, k_married FLOAT, npt45_pub_relative FLOAT, inventor_pq4 FLOAT, pcip10 FLOAT, actmtmid FLOAT, cip46assoc FLOAT, cip14bachl FLOAT, outcomes_relative FLOAT, cip39assoc FLOAT, cip09bachl FLOAT, cip43bachl FLOAT, cip27cert1 FLOAT, cip48cert4 FLOAT, pcip26 FLOAT, cip05cert2 FLOAT, actwrmid FLOAT, cip42cert4 FLOAT, cip12cert4 FLOAT, mr_kq5_pq1 FLOAT, zip TEXT(100), cip27assoc FLOAT, cip26cert2 FLOAT, annhi FLOAT, cip30cert1 FLOAT, weighted_income_relative FLOAT, count_pq3 FLOAT, cip38cert2 FLOAT, cip29bachl FLOAT, cip09assoc FLOAT, cip22cert1 FLOAT, cip16bachl FLOAT, cip25cert1 FLOAT, cip45assoc FLOAT, social_diversity_score_absolute FLOAT, stabbr TEXT(100), menonly FLOAT, par_q3 FLOAT, economic_inclusion_score_relative FLOAT, npt45_priv_absolute FLOAT, cip14cert1 FLOAT, locale2 FLOAT, cip47assoc FLOAT, npcurl TEXT(100), pcip48 FLOAT, cip22assoc FLOAT, cip51assoc FLOAT, cip15assoc FLOAT, pcip09 FLOAT, cip43cert1 FLOAT, cip01cert2 FLOAT, cip45cert4 FLOAT, pcip11 FLOAT, actmt75 FLOAT, cip04assoc FLOAT, npt44_priv_relative FLOAT, cip12cert1 FLOAT, cip24bachl FLOAT, cip54assoc FLOAT, pcip13 FLOAT, cip24assoc FLOAT, cip45cert1 FLOAT, cip42cert2 FLOAT, highdeg FLOAT, cip23bachl FLOAT, cip31bachl FLOAT, cip04cert1 FLOAT, cip47cert4 FLOAT, actcm25 FLOAT, cip46cert1 FLOAT, pcip51 FLOAT, cip47bachl FLOAT, cip44cert2 FLOAT, pcip24 FLOAT, inventor_pq1 FLOAT, par_top10pc FLOAT, pcip44 FLOAT, cip14cert4 FLOAT, actenmid FLOAT, cip38cert4 FLOAT, pcip52 FLOAT, cip26bachl FLOAT, cip54cert4 FLOAT, npt44_priv_absolute FLOAT, cip03assoc FLOAT, npt44_pub_relative FLOAT, pcip54 FLOAT, superopeid FLOAT, cip51cert1 FLOAT, pcip40 FLOAT, pbi FLOAT, cip05bachl FLOAT, cip05cert4 FLOAT, cip15cert1 FLOAT, pcip15 FLOAT, cip24cert1 FLOAT, cip52cert2 FLOAT, cip04cert2 FLOAT, cip11bachl FLOAT, cip16cert1 FLOAT, cip19cert4 FLOAT, cip15cert2 FLOAT, cip25bachl FLOAT, sat_avg_all FLOAT, count_pq2 FLOAT, pcip46 FLOAT, inventor_pq3 FLOAT, pcip25 FLOAT, cip39cert2 FLOAT, inventor FLOAT, cip40cert2 FLOAT, cip50assoc FLOAT, npt43_priv_relative FLOAT, sch_deg FLOAT, cip31assoc FLOAT, npt44_pub_absolute FLOAT, hbcu FLOAT, cip40cert1 FLOAT, cip44bachl FLOAT, cip13assoc FLOAT, cip05cert1 FLOAT, actwr25 FLOAT, npt43_priv_absolute FLOAT, cip51cert2 FLOAT, cip10cert2 FLOAT, cip13cert1 FLOAT, pcip04 FLOAT, aanapii FLOAT, cip30assoc FLOAT, cip04cert4 FLOAT, cip49cert4 FLOAT, par_top1pc FLOAT, top5cit FLOAT, cip15bachl FLOAT, cip04bachl FLOAT, cip50cert1 FLOAT, par_toppt1pc FLOAT, opeid FLOAT, npt42_priv_absolute FLOAT, cip43cert4 FLOAT, adm_rate_all FLOAT, actwr75 FLOAT, cip42assoc FLOAT, cip43assoc FLOAT, pcip30 FLOAT, cip03cert1 FLOAT, cip15cert4 FLOAT, enrl_orig_yr2_rt FLOAT, count_pq1 FLOAT, pcip29 FLOAT, longitude FLOAT, latitude FLOAT, comp_orig_yr3_rt FLOAT, cip43cert2 FLOAT, cip24cert2 FLOAT, cip52cert1 FLOAT, cip22bachl FLOAT, )'''


if __name__=='__main__':
    parse_new('Most-Recent-Cohorts-Institution.csv')
    export()
    # generateAlterationStatement()