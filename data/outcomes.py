# Debt and Income at 10 years averaged... 0.1*P10 + 0.4*P25 + 0.4*P75 + 0.1*P90

def summary():
    return '''
    A quantification of financial outcomes considering averaged debt and incomes 10 years after graduation
    '''

def compute(weighted_income: float, weighted_debt: float):
    return (weighted_debt + weighted_income) / 2

def compute_on_row(row):
    return compute(
        row['weighted_income'], row['weighted_debt']
    )