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

def compute_on_row(row):
    return compute(
        row['c150_4'], row['c100_4'], row['wdraw_orig_yr3_rt'], row['trans_4'], row['support']
    )