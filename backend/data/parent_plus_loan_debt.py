import statistics as stats
def summary():
    return 'Median parent plus loan debt'

def compute(pplus_pct_low, pplus_pct_high, plus_debt_all_md):
    return stats.mean([pplus_pct_high, pplus_pct_low, plus_debt_all_md])

def compute_on_row(row):
    return compute(
        row['pplus_pct_low'], row['pplus_pct_high'], row['plus_debt_all_md']
    )