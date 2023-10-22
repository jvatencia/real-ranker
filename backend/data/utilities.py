
def getBalancedScore(prefix, row):
    return .4*row['%s_relative' % prefix] + .6*row['%s_absolute' % prefix]
