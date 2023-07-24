import pandas as pd

def summary():
    return ''

def compute(debt_p10: float, debt_p25: float, debt_p75: float, debt_p90):
    return .1*debt_p10 + .4*debt_p25 + .4*debt_p75 + .1*debt_p90

def compute_on_row(row: pd.Series):
    # print(row)
    return compute(row['cuml_debt_p10'], row['cuml_debt_p25'], row['cuml_debt_p75'], row['cuml_debt_p90'])