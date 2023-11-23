from flask import Flask, jsonify, request, make_response
import json
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from flask_jsonpify import jsonpify
from flask_cors import CORS, cross_origin
import os
import pymysql
# create the extension
# create the app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# configure the SQLite database, relative to the app instance folder
# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqldb://root:*|_@`lUOgu?O|=D_@34.16.111.180/schools?unix_socket =/cloudsql/real-ranker-backend:real-ranker-db"
db_user = os.environ.get('CLOUD_SQL_USERNAME')
db_password = os.environ.get('CLOUD_SQL_PASSWORD')
db_name = os.environ.get('CLOUD_SQL_DATABASE_NAME')
db_connection_name = os.environ.get('CLOUD_SQL_CONNECTION_NAME')
#below copied from [here](https://dev.to/nagatodev/how-to-add-login-authentication-to-a-flask-and-react-application-23i7)

from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager



app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        pass
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        pass
    return response
def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

@app.route('/token', methods=["POST", "OPTIONS"])
@cross_origin()
def create_token():
    if request.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    res = dict()
    # 
    print(email, password)
    if (True):
        conn = open_connection()
        with conn.cursor() as cursor:
            result = cursor.execute('SELECT * FROM users')
            print(result)
            cursor.execute(
                'SELECT * FROM users WHERE email = % s AND password = % s',
                    (email, password, ))
            user = cursor.fetchone()
            print(user)
            if (user):
                res['email'] = email
                res['success'] = True
            else:
                res['success'] = False
    if (email=='test' and password=='test'):
        access_token = create_access_token(identity=email)
        res["access_token"] = access_token
        response = jsonify(res)
        return response

@app.route("/logout", methods=["POST"])
@cross_origin()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


def open_connection():
    unix_socket = '/cloudsql/{}'.format(db_connection_name)
    try:
        if os.environ.get('GAE_ENV') == 'standard':
            conn = pymysql.connect(user=db_user, password=db_password,
                                unix_socket=unix_socket, db=db_name,
                                cursorclass=pymysql.cursors.DictCursor
                                )
    except pymysql.MySQLError as e:
        print(e)

    return conn
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

CREATE TABLE users (email TEXT(200), password TEXT(200));

#TODO ### TABLE ALTERATION ###
ALTER TABLE schools ADD (cip25cert2 FLOAT, cip23cert4 FLOAT, cip42bachl FLOAT, weighted_debt_absolute FLOAT, satvr25 FLOAT, social_diversity_score FLOAT, actcm75 FLOAT, pcip45 FLOAT, satwr75 FLOAT, cip46cert4 FLOAT, cip38cert1 FLOAT, npt41_pub_absolute FLOAT, cip01assoc FLOAT, ec_parent_ses_college FLOAT, cip50bachl FLOAT, npt42_pub_relative FLOAT, cip38assoc FLOAT, cip52cert4 FLOAT, cip41assoc FLOAT, pell_ever FLOAT, cip46bachl FLOAT, pcip19 FLOAT, cip49assoc FLOAT, numbranch FLOAT, cip49cert1 FLOAT, cip14cert2 FLOAT, cip45bachl FLOAT, satwr25 FLOAT, control FLOAT, insturl FLOAT, cip05assoc FLOAT, cip13cert2 FLOAT, cip22cert2 FLOAT, plus_debt_inst_comp_md FLOAT, ugds_2mor FLOAT, pcip12 FLOAT, cip10cert4 FLOAT, agege24 FLOAT, accredagency FLOAT, npt43_pub_absolute FLOAT, main FLOAT, npt41_priv_absolute FLOAT, cip10bachl FLOAT, city FLOAT, cip45cert2 FLOAT, plus_debt_all_nocomp_md FLOAT, distanceonly FLOAT, pcip22 FLOAT, debt_mdn FLOAT, cip46cert2 FLOAT, npt41_pub_relative FLOAT, womenonly FLOAT, cip44assoc FLOAT, tribal FLOAT, par_q5 FLOAT, cip26cert1 FLOAT, cip24cert4 FLOAT, cip47cert2 FLOAT, pcip03 FLOAT, pcip43 FLOAT, cip31cert2 FLOAT, actcmmid FLOAT, outcomes_absolute FLOAT, economic_inclusion_score FLOAT, cip49cert2 FLOAT, cip13cert4 FLOAT, cip11cert1 FLOAT, mr_ktop1_pq1 FLOAT, cip11assoc FLOAT, cip41cert1 FLOAT, inventor_pq5 FLOAT, acten75 FLOAT, cip26assoc FLOAT, hcm2 FLOAT, cip03cert4 FLOAT, cip41cert2 FLOAT, cip48cert1 FLOAT, cip44cert4 FLOAT, success_relative FLOAT, pcip42 FLOAT, count FLOAT, cip51bachl FLOAT, pcip47 FLOAT, success_absolute FLOAT, cip40bachl FLOAT, cip01bachl FLOAT, pcip41 FLOAT, social_diversity_score_relative FLOAT, cip40assoc FLOAT, ug FLOAT, cip29assoc FLOAT, total_patents FLOAT, total_cites FLOAT, cip01cert4 FLOAT, cip03bachl FLOAT, pcip23 FLOAT, pcip38 FLOAT, npt43_pub_relative FLOAT, cip23cert1 FLOAT, cip40cert4 FLOAT, cip16cert4 FLOAT, cip44cert1 FLOAT, pcip50 FLOAT, pcip14 FLOAT, pcip39 FLOAT, pcip05 FLOAT, cip30bachl FLOAT, cip14assoc FLOAT, cip19cert2 FLOAT, cip52bachl FLOAT, hsi FLOAT, cip23assoc FLOAT, cip09cert1 FLOAT, economic_inclusion_score_absolute FLOAT, cip11cert4 FLOAT, actmt25 FLOAT, cip39cert1 FLOAT, cip09cert2 FLOAT, par_q2 FLOAT, ugds_nra FLOAT, npt42_pub_absolute FLOAT, cip19cert1 FLOAT, cip11cert2 FLOAT, par_q1 FLOAT, ugds_asian FLOAT, cip50cert2 FLOAT, unitid FLOAT, satmt25 FLOAT, npt45_pub_absolute FLOAT, cip13bachl FLOAT, enrl_orig_yr3_rt FLOAT, par_top5pc FLOAT, ec_high_parent_ses_college FLOAT, pcip16 FLOAT, cip12assoc FLOAT, pcip49 FLOAT, cip51cert4 FLOAT, cip26cert4 FLOAT, cip42cert1 FLOAT, cip23cert2 FLOAT, weighted_debt_relative FLOAT, locale FLOAT, nanti FLOAT, satmt75 FLOAT, count_pq5 FLOAT, inventor_pq2 FLOAT, par_q4 FLOAT, cip30cert4 FLOAT, satmtmid FLOAT, cip29cert4 FLOAT, cip29cert1 FLOAT, sat_avg FLOAT, preddeg FLOAT, cip47cert1 FLOAT, school_x FLOAT, cip19assoc FLOAT, pcip27 FLOAT, cip30cert2 FLOAT, cip48bachl FLOAT, cip50cert4 FLOAT, relaffil FLOAT, cip27bachl FLOAT, satwrmid FLOAT, pcip01 FLOAT, cip01cert1 FLOAT, parent_plus_loan_debt_absolute FLOAT, cip16cert2 FLOAT, cip39cert4 FLOAT, cip25cert4 FLOAT, cip48assoc FLOAT, opeid6 FLOAT, cip49bachl FLOAT, parent_plus_loan_debt_relative FLOAT, satvr75 FLOAT, cip10assoc FLOAT, cip41bachl FLOAT, weighted_income_absolute FLOAT, acten25 FLOAT, cip54cert2 FLOAT, npt45_priv_relative FLOAT, cip38bachl FLOAT, cip16assoc FLOAT, cip52assoc FLOAT, cip27cert4 FLOAT, cip54bachl FLOAT, cip39bachl FLOAT, cip25assoc FLOAT, cip19bachl FLOAT, cip10cert1 FLOAT, cip03cert2 FLOAT, cip27cert2 FLOAT, satvrmid FLOAT, cip12cert2 FLOAT, cip31cert4 FLOAT, cip22cert4 FLOAT, pcip31 FLOAT, cip48cert2 FLOAT, support_relative FLOAT, cip12bachl FLOAT, ccugprof FLOAT, dependent FLOAT, cip31cert1 FLOAT, count_pq4 FLOAT, support_absolute FLOAT, npt42_priv_relative FLOAT, cip54cert1 FLOAT, cip29cert2 FLOAT, first_gen FLOAT, ugds_white FLOAT, cip09cert4 FLOAT, npt41_priv_relative FLOAT, cip41cert4 FLOAT, k_married FLOAT, npt45_pub_relative FLOAT, inventor_pq4 FLOAT, pcip10 FLOAT, actmtmid FLOAT, cip46assoc FLOAT, cip14bachl FLOAT, outcomes_relative FLOAT, cip39assoc FLOAT, cip09bachl FLOAT, cip43bachl FLOAT, cip27cert1 FLOAT, cip48cert4 FLOAT, pcip26 FLOAT, cip05cert2 FLOAT, actwrmid FLOAT, cip42cert4 FLOAT, cip12cert4 FLOAT, mr_kq5_pq1 FLOAT, zip FLOAT, cip27assoc FLOAT, cip26cert2 FLOAT, annhi FLOAT, cip30cert1 FLOAT, weighted_income_relative FLOAT, count_pq3 FLOAT, cip38cert2 FLOAT, cip29bachl FLOAT, cip09assoc FLOAT, cip22cert1 FLOAT, cip16bachl FLOAT, cip25cert1 FLOAT, cip45assoc FLOAT, social_diversity_score_absolute FLOAT, stabbr FLOAT, menonly FLOAT, par_q3 FLOAT, economic_inclusion_score_relative FLOAT, npt45_priv_absolute FLOAT, cip14cert1 FLOAT, locale2 FLOAT, cip47assoc FLOAT, npcurl FLOAT, pcip48 FLOAT, cip22assoc FLOAT, cip51assoc FLOAT, cip15assoc FLOAT, pcip09 FLOAT, cip43cert1 FLOAT, cip01cert2 FLOAT, cip45cert4 FLOAT, pcip11 FLOAT, actmt75 FLOAT, cip04assoc FLOAT, npt44_priv_relative FLOAT, cip12cert1 FLOAT, cip24bachl FLOAT, cip54assoc FLOAT, pcip13 FLOAT, cip24assoc FLOAT, cip45cert1 FLOAT, cip42cert2 FLOAT, highdeg FLOAT, cip23bachl FLOAT, cip31bachl FLOAT, cip04cert1 FLOAT, cip47cert4 FLOAT, actcm25 FLOAT, cip46cert1 FLOAT, pcip51 FLOAT, cip47bachl FLOAT, cip44cert2 FLOAT, pcip24 FLOAT, inventor_pq1 FLOAT, par_top10pc FLOAT, pcip44 FLOAT, cip14cert4 FLOAT, actenmid FLOAT, cip38cert4 FLOAT, pcip52 FLOAT, cip26bachl FLOAT, cip54cert4 FLOAT, npt44_priv_absolute FLOAT, cip03assoc FLOAT, npt44_pub_relative FLOAT, pcip54 FLOAT, superopeid FLOAT, cip51cert1 FLOAT, pcip40 FLOAT, pbi FLOAT, cip05bachl FLOAT, cip05cert4 FLOAT, cip15cert1 FLOAT, pcip15 FLOAT, cip24cert1 FLOAT, cip52cert2 FLOAT, cip04cert2 FLOAT, cip11bachl FLOAT, cip16cert1 FLOAT, cip19cert4 FLOAT, cip15cert2 FLOAT, cip25bachl FLOAT, sat_avg_all FLOAT, count_pq2 FLOAT, pcip46 FLOAT, inventor_pq3 FLOAT, pcip25 FLOAT, cip39cert2 FLOAT, inventor FLOAT, cip40cert2 FLOAT, cip50assoc FLOAT, npt43_priv_relative FLOAT, sch_deg FLOAT, cip31assoc FLOAT, npt44_pub_absolute FLOAT, hbcu FLOAT, cip40cert1 FLOAT, cip44bachl FLOAT, cip13assoc FLOAT, cip05cert1 FLOAT, actwr25 FLOAT, npt43_priv_absolute FLOAT, cip51cert2 FLOAT, cip10cert2 FLOAT, cip13cert1 FLOAT, pcip04 FLOAT, aanapii FLOAT, cip30assoc FLOAT, cip04cert4 FLOAT, cip49cert4 FLOAT, par_top1pc FLOAT, top5cit FLOAT, cip15bachl FLOAT, cip04bachl FLOAT, cip50cert1 FLOAT, par_toppt1pc FLOAT, opeid FLOAT, npt42_priv_absolute FLOAT, cip43cert4 FLOAT, adm_rate_all FLOAT, actwr75 FLOAT, cip42assoc FLOAT, cip43assoc FLOAT, pcip30 FLOAT, cip03cert1 FLOAT, cip15cert4 FLOAT, enrl_orig_yr2_rt FLOAT, count_pq1 FLOAT, pcip29 FLOAT, longitude FLOAT, latitude FLOAT, comp_orig_yr3_rt FLOAT, cip43cert2 FLOAT, cip24cert2 FLOAT, cip52cert1 FLOAT, cip22bachl FLOAT, )


SELECT (id , instnm , st_fips , region , ccbasic , ccsizset, adm_rate, pplus_pct_low, pplus_pct_high, plus_debt_all_md, c150_4, c100_4, trans_4, c150_4_black, c150_4_hisp, c150_4_nhpi, c150_4_aian, c150_4_pell, ugds_black , ugds_hisp, ugds_aian, ugds_nhpi, ugds, ind_comp_orig_yr4_rt , lo_inc_comp_orig_yr4_rt , firstgen_comp_orig_yr4_rt, comp_orig_yr4_rt, wdraw_orig_yr3_rt , ind_wdraw_orig_yr3_rt, lo_inc_wdraw_orig_yr3_rt, firstgen_wdraw_orig_yr3_rt, cuml_debt_p10, cuml_debt_p25 , cuml_debt_p75 , cuml_debt_p90 , npt41_pub, npt42_pub, npt43_pub, npt44_pub, npt45_pub, npt41_priv , npt42_priv, npt43_priv, npt44_priv, npt45_priv, pct10_earn_wne_p10, pct25_earn_wne_p10, pct75_earn_wne_p10, pct90_earn_wne_p10) from schools; 

    def __repr__(self):
        return f'<School {self.instnm}>'
'''
def getSchools():
    conn = open_connection()
    with conn.cursor() as cursor:
        result = cursor.execute('SELECT * FROM schools')
        print('yoy')
        #cols = [x[0] for x in cursor.description]
        schools = cursor.fetchall()
        print('yoyo')
        if result > 0:
            got_schools = schools
        else:
            got_schools = 'No Schools in DB'
    conn.close()
    return got_schools

#@cross_origin()
@app.route("/data")
def data():
    if request.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    schools = getSchools()
    response =  jsonpify(schools)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

#copied below from: https://www.geeksforgeeks.org/how-to-store-username-and-password-in-flask/
# Make a register session for registration
# session and also connect to Mysql to code for access
# login and for completing our login
# session and making some flashing massage for error
# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     message = ''
#     if request.method == 'POST' and 'name' in request.form and 'password' in request.form and 'email' in request.form:
 
#         userName = request.form['name']
#         password = request.form['password']
#         email = request.form['email']

#         cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
#         cursor.execute('SELECT TOP 1000 * FROM user WHERE email = % s',
#                        (email, ))
#         account = cursor.fetchone()
#         if account:
#             message = 'Account already exists !'
#         elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
#             message = 'Invalid email address !'
#         elif not userName or not password or not email:
#             message = 'Please fill out the form !'
#         else:
#             cursor.execute(
#                 'INSERT INTO user VALUES (NULL, % s, % s, % s)',
#               (userName, email, password, ))
#             mysql.connection.commit()
#             message = 'You have successfully registered !'
#     elif request.method == 'POST':
#         message = 'Please fill out the form !'
#     return render_template('register.html', message=message)

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     message = ''
#     res = dict()
#     if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
#         email = request.form['email']
#         password = request.form['password']
#         conn = open_connection()
#     return jsonify(res)
        
