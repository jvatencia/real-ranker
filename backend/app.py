from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from flask_jsonpify import jsonpify
# create the extension
# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
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

    def __repr__(self):
        return f'<School {self.instnm}>'
'''
@app.route("/data")
def data():
    # df = pd.read_sql('select * from school', db.engine)
    df = pd.read_csv('result.csv')
    df_list = df.values.tolist()
    response =  jsonpify([list(df.columns)] + df_list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response