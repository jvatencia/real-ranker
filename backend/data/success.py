def summary():
    """_summary_

    Returns a `str` description of this quantity
    """
    return '''
        A measurement of the success rate associated with a school. We compute by yada yada yada, which we believe informs yada yada yada.
    '''

def compute(c150: float, c100: float, withdraw: float, transfer: float, student_support: float):
    """_summary_

    Args:
        c150 (float): 6 year graduation rate
        c100 (float): 4 year graduation rate
        withdraw (float): 3 year withdrawal rate for the university.
        transfer (float): 3 year transfer rate
        student_support (float): Computed value, see `Student Support` class for more information.
    """
    return .3*c150 + .2*c100 + .18*withdraw + .12*transfer + .2*student_support
import numpy as np
from .utilities import getBalancedScore
def compute_on_row(row, extraInfo):
    if (type(extraInfo) == type(None)):
        return np.nan
    # extraInfo = extraInfo[extraInfo['school'] == row['instnm']]
    c150 = .4*extraInfo['c150_4_relative'] + .6*extraInfo['c150_4_absolute']
    c100 = .4*extraInfo['c100_4_relative'] + .6*extraInfo['c100_4_absolute']
    wdraw = .4*extraInfo['wdraw_orig_yr3_rt_relative'] + .6*extraInfo['wdraw_orig_yr3_rt_absolute']
    trans = .4*extraInfo['trans_4_relative'] + .6*extraInfo['trans_4_absolute']
    support = getBalancedScore('support', extraInfo)
    return compute(
        c150, c100, wdraw, trans, support
    )