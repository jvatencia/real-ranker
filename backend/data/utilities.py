import pandas as pd
import numpy as np
def getBalancedScore(prefix, row):
    try:
        return .4*row['%s_relative' % prefix] + .6*row['%s_absolute' % prefix]
    except:
        return
def getBalancedScoreDF(prefix, df: pd.DataFrame):
    try:
        return .4*df['%s_relative' % prefix] + .6*df['%s_absolute' % prefix]
    except:
        return
hashtable=dict()
hashtable2=dict()
def getBalanced(colPrefix: str, row: pd.Series, df: pd.DataFrame):
    hashtable[colPrefix] = hashtable.get(colPrefix, 0) + 1
    if (np.isnan(row['%s_relative' % colPrefix]) or (np.isnan(row['%s_absolute' % colPrefix]))):
        result = .4*df['%s_relative' % colPrefix].mean() + .6*df['%s_absolute' % colPrefix].mean()
        if (hashtable[colPrefix] == 1):
            print('%s mean: %f\t%s mean: %f' % (colPrefix + '_relative', df['%s_relative' % colPrefix].mean(), colPrefix + '_absolute', df['%s_absolute' % colPrefix].mean()))
        return result
    return .4*row['%s_relative' % colPrefix] + .6*row['%s_absolute' % colPrefix]

def get(col: str, row: pd.Series, df: pd.DataFrame):
    hashtable2[col] = hashtable2.get(col, 0)
    if np.isnan(row[col]):
        if (hashtable2[col] == 1):
            print('%s mean: %f' % (col, df[col].mean()))
        return df[col].mean()
    return row[col]