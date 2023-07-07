import statistics
def summary():
    return """
    Average of the differences of C150 for Racial Groups and General Population

    Average of the differences in Original Completer 4 Year of Disadvantaged Socioeconomic Pops. and General Population and the differences of Withdrawal Rates of the General Pop. and Disadvantaged Socioeconomic groups
    """

def compute(c150_black, c150_hispanic, c150_pacific_islander, c150_general):
    differences = [(pop-c150_general) for pop in [c150_black, c150_hispanic, c150_pacific_islander]]
    return statistics.mean(differences)
