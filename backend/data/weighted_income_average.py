import numpy as np
from .utilities import getBalancedScore

def compute(income_p10: float, income_p25: float, income_p75: float, income_p90: float):
    if (np.isnan([income_p10, income_p25, income_p75, income_p90]).any()):
        return np.nan
    """Income score

    Args:
        income_p10 (float): _description_
        income_p25 (float): _description_
        income_p75 (float): _description_
        income_p90 (float): _description_
    """
    return .1*income_p10 + .4*income_p25 + .4*income_p75 + .1*income_p90

def compute_on_row(row):
    if (type(row) == type(None)):
        return np.nan
    return compute(
        getBalancedScore('pct10_earn_wne_p10', row), getBalancedScore('pct25_earn_wne_p10', row), getBalancedScore('pct75_earn_wne_p10', row), getBalancedScore('pct90_earn_wne_p10', row)
    )