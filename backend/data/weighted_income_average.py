def compute(income_p10: float, income_p25: float, income_p75: float, income_p90: float):
    """Income score

    Args:
        income_p10 (float): _description_
        income_p25 (float): _description_
        income_p75 (float): _description_
        income_p90 (float): _description_
    """
    return .1*income_p10 + .4*income_p25 + .4*income_p75 + .1*income_p90

def compute_on_row(row):
    return compute(
        row['pct10_earn_wne_p10'], row['pct25_earn_wne_p10'], row['pct75_earn_wne_p10'], row['pct90_earn_wne_p10']
    )