import numpy as np
def summary():
    return """
    Average of the differences of C150 for Racial Groups and General Population

    Average of the differences in Original Completer 4 Year of Disadvantaged Socioeconomic Pops. and General Population and the differences of Withdrawal Rates of the General Pop. and Disadvantaged Socioeconomic groups
    """

def compute_race(c150_black, c150_hispanic, c150_pacific_islander, c150_aian, c150_general,
            ugds_black, ugds_hispanic, ugds_pacific_islander, ugds_aian, ugds_general):
    differences = [(pop-c150_general) for pop in [c150_black, c150_hispanic, c150_pacific_islander, c150_aian]]
    try:
        underrepresented = ugds_general*(ugds_black+ugds_hispanic+ugds_pacific_islander+ugds_aian)
        coefficients = [ugds_general*ugds_pop / underrepresented for ugds_pop in [ugds_black, ugds_hispanic, ugds_pacific_islander, ugds_aian]]
        s = 0
        for i, diff in enumerate(differences):
            coef = coefficients[i]
            s += coef*diff
        return s / len(differences)
    except:
        return np.nan

def compute_eco(c150_pell, c150, ind_comp, lo_inc_comp, firstgen_comp, comp, ind_wdraw, lo_inc_wdraw, firstgen_wdraw, wdraw):
    # ['C150_PELL',  'COMP_ORIG_YR4_RT', LO_INC_WDRAW_ORIG_YR3_RT, IND_WDRAW_ORIG_YR3_RT, FIRSTGEN_WDRAW_ORIG_YR3_RT, LO_INC_COMP_ORIG_YR4_RT, IND_COMP_ORIG_YR4_RT, FIRSTGEN_COMP_ORIG_YR4_RT]
    #for the rest: wdraw_orig_yr3_rt 
    try:
        compDiffs = [lo_inc_comp, firstgen_comp, ind_comp]
        wdrawDiffs = [ind_wdraw, lo_inc_wdraw, firstgen_wdraw]
        comp_avg = sum([minority - comp for minority in compDiffs]) / len(compDiffs)
        wdraw_avg = sum([minority - wdraw for minority in wdrawDiffs]) / len(wdrawDiffs)
        return ((c150_pell-c150) + comp_avg + wdraw_avg) / 3
    except:
        return np.nan

def compute_on_row(row):
    return .5*compute_race(row['c150_4_black'], row['c150_4_hisp'], row['c150_4_nhpi'], row['c150_4_aian'], row['c150_4'],
                   row['ugds_black'], row['ugds_hisp'], row['ugds_nhpi'], row['ugds_aian'], row['ugds']) + .5*compute_eco(
                    row['c150_4_pell'], row['c150_4'],
                    row['ind_comp_orig_yr4_rt'], row['lo_inc_comp_orig_yr4_rt'], row['firstgen_comp_orig_yr4_rt'], row['comp_orig_yr4_rt'],
                    row['ind_wdraw_orig_yr3_rt'], row['lo_inc_wdraw_orig_yr3_rt'], row['firstgen_wdraw_orig_yr3_rt'], row['wdraw_orig_yr3_rt']
                   )