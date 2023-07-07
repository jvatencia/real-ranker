Debt and Income at 10 years averaged... 0.1*P10 + 0.4*P25 + 0.4*P75 + 0.1*P90

def summary():
    return '''
    A quantification of financial outcomes considering averaged debt and incomes 10 years after graduation
    '''

def compute(debt_p10: float, debt_p25: float, debt_p75: float, debt_p90: float,
            income_p10: float, income_p25: float, income_p75: float, income_p90: float):
    return ((.1*debt_p10 + .4*debt_p25 + .4*debt_p75 + .1*debt_p90) + (.1*income_p10 + .4*income_p25 + .4*income_p75 + .1*income_p90)) / 2