import statistics as stats
def summary():
    return 'Median parent plus loan debt'

def compute(pplus_pct_low, pplus_pct_high, plus_debt_all_md):
    return stats.mean([pplus_pct_high, pplus_pct_low, plus_debt_all_md])
import numpy as np
from .utilities import getBalancedScore
def compute_on_row(row):
    if (type(row) == type(None)):
        return np.nan
    return compute(
        getBalancedScore('pplus_pct_low', row), getBalancedScore('pplus_pct_high', row), getBalancedScore('plus_debt_all_md', row)
    )