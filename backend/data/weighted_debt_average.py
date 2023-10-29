import pandas as pd

def summary():
    return ''

def compute(debt_p10: float, debt_p25: float, debt_p75: float, debt_p90):
    if (np.isnan([debt_p10, debt_p25, debt_p75, debt_p90]).any()):
        return np.nan
    return .1*debt_p10 + .4*debt_p25 + .4*debt_p75 + .1*debt_p90

from .utilities import getBalanced
import numpy as np
def compute_on_row(row: pd.Series, df:pd.DataFrame):
    if (type(row) == type(None)):
        return np.nan
    return compute(getBalanced('cuml_debt_p10', row, df), getBalanced('cuml_debt_p25', row, df), getBalanced('cuml_debt_p75', row, df), getBalanced('cuml_debt_p90', row, df))