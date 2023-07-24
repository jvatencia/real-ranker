# 5 Cost Scores based on each family income group
'''
    NPT41_PUB/PRIV denotes the cost of this given school given the family socio-economic status (41, 42, 43, 44, etc.)
    So we want to combine these into one column, and then we have NPT41_cost_percentile 


    family_income: 
'''
def summary():
    return 'A quantification of the likely cost of this university for this student'

def compute(npt_41: float, npt_42: float, npt_43: float, npt_44: float, npt_45: float):
    #return percentile of npt for each 41, 42, 43, 44, 45 bracket on an absolute percentile
    pass