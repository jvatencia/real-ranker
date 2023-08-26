from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from flask_jsonpify import jsonpify
# create the extension
# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqldb://root:*|_@`lUOgu?O|=D_@34.16.111.180/schools?unix_socket =/cloudsql/real-ranker-backend:real-ranker-db"
# initialize the app with the extension
'''
db = SQLAlchemy(app)

class School(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    instnm = db.Column(db.String(100), nullable=False)
    st_fips = db.Column(db.String(100), nullable=False)
    region = db.Column(db.String(100), nullable=False)
    ccbasic = db.Column(db.Integer, nullable=False)
    ccsizset = db.Column(db.Integer, nullable=False)
    adm_rate = db.Column(db.Numeric, nullable=True)
    pplus_pct_low = db.Column(db.Numeric, nullable=True)
    pplus_pct_high = db.Column(db.Numeric, nullable=True)
    plus_debt_all_md = db.Column(db.Numeric, nullable=True)
    c150_4 = db.Column(db.Numeric, nullable=True)
    c100_4 = db.Column(db.Numeric, nullable=True)
    trans_4 = db.Column(db.Numeric, nullable=True)
    # support scores
    c150_4_black = db.Column(db.Numeric, nullable=True)
    c150_4_hisp = db.Column(db.Numeric, nullable=True)
    c150_4_nhpi = db.Column(db.Numeric, nullable=True)
    c150_4_aian = db.Column(db.Numeric, nullable=True)
    c150_4_pell = db.Column(db.Numeric, nullable=True)
    ugds_black = db.Column(db.Numeric, nullable=True)
    ugds_hisp = db.Column(db.Numeric, nullable=True)
    ugds_aian = db.Column(db.Numeric, nullable=True)
    ugds_nhpi = db.Column(db.Numeric, nullable=True)
    ugds = db.Column(db.Numeric, nullable=True)
    ind_comp_orig_yr4_rt = db.Column(db.Numeric, nullable=True)
    lo_inc_comp_orig_yr4_rt = db.Column(db.Numeric, nullable=True)
    firstgen_comp_orig_yr4_rt = db.Column(db.Numeric, nullable=True)
    comp_orig_yr4_rt = db.Column(db.Numeric, nullable=True)
    wdraw_orig_yr3_rt = db.Column(db.Numeric, nullable=True)
    ind_wdraw_orig_yr3_rt = db.Column(db.Numeric, nullable=True)
    lo_inc_wdraw_orig_yr3_rt = db.Column(db.Numeric, nullable=True)
    firstgen_wdraw_orig_yr3_rt = db.Column(db.Numeric, nullable=True)
    # weighted debt average
    cuml_debt_p10 = db.Column(db.Numeric, nullable=True)
    cuml_debt_p25 = db.Column(db.Numeric, nullable=True)
    cuml_debt_p75 = db.Column(db.Numeric, nullable=True)
    cuml_debt_p90 = db.Column(db.Numeric, nullable=True)
    npt41_pub = db.Column(db.Numeric, nullable=True)
    npt42_pub = db.Column(db.Numeric, nullable=True)
    npt43_pub = db.Column(db.Numeric, nullable=True)
    npt44_pub = db.Column(db.Numeric, nullable=True)
    npt45_pub = db.Column(db.Numeric, nullable=True)
    npt41_priv = db.Column(db.Numeric, nullable=True)
    npt42_priv = db.Column(db.Numeric, nullable=True)
    npt43_priv = db.Column(db.Numeric, nullable=True)
    npt44_priv = db.Column(db.Numeric, nullable=True)
    npt45_priv = db.Column(db.Numeric, nullable=True)
    #weighted income average
    pct10_earn_wne_p10 = db.Column(db.Numeric, nullable=True)
    pct25_earn_wne_p10 = db.Column(db.Numeric, nullable=True)
    pct75_earn_wne_p10 = db.Column(db.Numeric, nullable=True)
    pct90_earn_wne_p10 = db.Column(db.Numeric, nullable=True)
CREATE TABLE schools (id INTEGER, instnm TEXT(100), st_fips INT, region INT, ccbasic INT, ccsizset INT, adm_rate FLOAT, pplus_pct_low FLOAT, pplus_pct_high FLOAT, plus_debt_all_md FLOAT, c150_4 FLOAT, c100_4 FLOAT, trans_4 FLOAT, c150_4_black FLOAT, c150_4_hisp FLOAT, c150_4_nhpi FLOAT, c150_4_aian FLOAT, c150_4_pell FLOAT, ugds_black FLOAT, ugds_hisp FLOAT, ugds_aian FLOAT, ugds_nhpi FLOAT, ugds FLOAT, ind_comp_orig_yr4_rt FLOAT, lo_inc_comp_orig_yr4_rt FLOAT, firstgen_comp_orig_yr4_rt FLOAT, comp_orig_yr4_rt FLOAT, wdraw_orig_yr3_rt FLOAT, ind_wdraw_orig_yr3_rt FLOAT, lo_inc_wdraw_orig_yr3_rt FLOAT, firstgen_wdraw_orig_yr3_rt FLOAT, cuml_debt_p10 FLOAT, cuml_debt_p25 FLOAT, cuml_debt_p75 FLOAT, cuml_debt_p90 FLOAT, npt41_pub FLOAT, npt42_pub FLOAT, npt43_pub FLOAT, npt44_pub FLOAT, npt45_pub FLOAT, npt41_priv FLOAT, npt42_priv FLOAT, npt43_priv FLOAT, npt44_priv FLOAT, npt45_priv FLOAT, pct10_earn_wne_p10 FLOAT, pct25_earn_wne_p10 FLOAT, pct75_earn_wne_p10 FLOAT, pct90_earn_wne_p10 FLOAT); 
SELECT (id , instnm , st_fips , region , ccbasic , ccsizset, adm_rate, pplus_pct_low, pplus_pct_high, plus_debt_all_md, c150_4, c100_4, trans_4, c150_4_black, c150_4_hisp, c150_4_nhpi, c150_4_aian, c150_4_pell, ugds_black , ugds_hisp, ugds_aian, ugds_nhpi, ugds, ind_comp_orig_yr4_rt , lo_inc_comp_orig_yr4_rt , firstgen_comp_orig_yr4_rt, comp_orig_yr4_rt, wdraw_orig_yr3_rt , ind_wdraw_orig_yr3_rt, lo_inc_wdraw_orig_yr3_rt, firstgen_wdraw_orig_yr3_rt, cuml_debt_p10, cuml_debt_p25 , cuml_debt_p75 , cuml_debt_p90 , npt41_pub, npt42_pub, npt43_pub, npt44_pub, npt45_pub, npt41_priv , npt42_priv, npt43_priv, npt44_priv, npt45_priv, pct10_earn_wne_p10, pct25_earn_wne_p10, pct75_earn_wne_p10, pct90_earn_wne_p10) from schools; 

    def __repr__(self):
        return f'<School {self.instnm}>'
'''
@app.route("/data")
def data():
    df = pd.read_sql('select * from school', db.engine)
    # df = pd.read_csv('./result.csv')
    df_list = df.values.tolist()
    response =  jsonpify([list(df.columns)] + df_list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response