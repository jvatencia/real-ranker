import statistics as stats
def summary():
    return 'Median parent plus loan debt'

def compute(pplus_pct_low, pplus_pct_high, plus_debt_all_md):
    return stats.mean([pplus_pct_high, pplus_pct_low, plus_debt_all_md])
import numpy as np
from .utilities import getBalanced
def compute_on_row(row, df):
    if (type(row) == type(None)):
        return np.nan
    return compute(
        getBalanced('pplus_pct_low', row, df), getBalanced('pplus_pct_high', row, df), getBalanced('plus_debt_all_md', row, df)
    )