
s='''(id INTEGER, instnm TEXT(100), st_fips INT, region INT, ccbasic INT, ccsizset INT, adm_rate FLOAT, pplus_pct_low FLOAT, pplus_pct_high FLOAT, plus_debt_all_md FLOAT, c150_4 FLOAT, c100_4 FLOAT, trans_4 FLOAT, c150_4_black FLOAT, c150_4_hisp FLOAT, c150_4_nhpi FLOAT, c150_4_aian FLOAT, c150_4_pell FLOAT, ugds_black FLOAT, ugds_hisp FLOAT, ugds_aian FLOAT, ugds_nhpi FLOAT, ugds FLOAT, ind_comp_orig_yr4_rt FLOAT, lo_inc_comp_orig_yr4_rt FLOAT, firstgen_comp_orig_yr4_rt FLOAT, comp_orig_yr4_rt FLOAT, wdraw_orig_yr3_rt FLOAT, ind_wdraw_orig_yr3_rt FLOAT, lo_inc_wdraw_orig_yr3_rt FLOAT, firstgen_wdraw_orig_yr3_rt FLOAT, cuml_debt_p10 FLOAT, cuml_debt_p25 FLOAT, cuml_debt_p75 FLOAT, cuml_debt_p90 FLOAT, npt41_pub FLOAT, npt42_pub FLOAT, npt43_pub FLOAT, npt44_pub FLOAT, npt45_pub FLOAT, npt41_priv FLOAT, npt42_priv FLOAT, npt43_priv FLOAT, npt44_priv FLOAT, npt45_priv FLOAT, pct10_earn_wne_p10 FLOAT, pct25_earn_wne_p10 FLOAT, pct75_earn_wne_p10 FLOAT, pct90_earn_wne_p10 FLOAT, cip25cert2 FLOAT, cip23cert4 FLOAT, cip42bachl FLOAT, weighted_debt_absolute FLOAT, satvr25 FLOAT, social_diversity_score FLOAT, actcm75 FLOAT, pcip45 FLOAT, satwr75 FLOAT, cip46cert4 FLOAT, cip38cert1 FLOAT, npt41_pub_absolute FLOAT, cip01assoc FLOAT, ec_parent_ses_college FLOAT, cip50bachl FLOAT, npt42_pub_relative FLOAT, cip38assoc FLOAT, cip52cert4 FLOAT, cip41assoc FLOAT, pell_ever FLOAT, cip46bachl FLOAT, pcip19 FLOAT, cip49assoc FLOAT, numbranch FLOAT, cip49cert1 FLOAT, cip14cert2 FLOAT, cip45bachl FLOAT, satwr25 FLOAT, control FLOAT, insturl FLOAT, cip05assoc FLOAT, cip13cert2 FLOAT, cip22cert2 FLOAT, plus_debt_inst_comp_md FLOAT, ugds_2mor FLOAT, pcip12 FLOAT, cip10cert4 FLOAT, agege24 FLOAT, accredagency FLOAT, npt43_pub_absolute FLOAT, main FLOAT, npt41_priv_absolute FLOAT, cip10bachl FLOAT, city FLOAT, cip45cert2 FLOAT, plus_debt_all_nocomp_md FLOAT, distanceonly FLOAT, pcip22 FLOAT, debt_mdn FLOAT, cip46cert2 FLOAT, npt41_pub_relative FLOAT, womenonly FLOAT, cip44assoc FLOAT, tribal FLOAT, par_q5 FLOAT, cip26cert1 FLOAT, cip24cert4 FLOAT, cip47cert2 FLOAT, pcip03 FLOAT, pcip43 FLOAT, cip31cert2 FLOAT, actcmmid FLOAT, outcomes_absolute FLOAT, economic_inclusion_score FLOAT, cip49cert2 FLOAT, cip13cert4 FLOAT, cip11cert1 FLOAT, mr_ktop1_pq1 FLOAT, cip11assoc FLOAT, cip41cert1 FLOAT, inventor_pq5 FLOAT, acten75 FLOAT, cip26assoc FLOAT, hcm2 FLOAT, cip03cert4 FLOAT, cip41cert2 FLOAT, cip48cert1 FLOAT, cip44cert4 FLOAT, success_relative FLOAT, pcip42 FLOAT, count FLOAT, cip51bachl FLOAT, pcip47 FLOAT, success_absolute FLOAT, cip40bachl FLOAT, cip01bachl FLOAT, pcip41 FLOAT, social_diversity_score_relative FLOAT, cip40assoc FLOAT, ug FLOAT, cip29assoc FLOAT, total_patents FLOAT, total_cites FLOAT, cip01cert4 FLOAT, cip03bachl FLOAT, pcip23 FLOAT, pcip38 FLOAT, npt43_pub_relative FLOAT, cip23cert1 FLOAT, cip40cert4 FLOAT, cip16cert4 FLOAT, cip44cert1 FLOAT, pcip50 FLOAT, pcip14 FLOAT, pcip39 FLOAT, pcip05 FLOAT, cip30bachl FLOAT, cip14assoc FLOAT, cip19cert2 FLOAT, cip52bachl FLOAT, hsi FLOAT, cip23assoc FLOAT, cip09cert1 FLOAT, economic_inclusion_score_absolute FLOAT, cip11cert4 FLOAT, actmt25 FLOAT, cip39cert1 FLOAT, cip09cert2 FLOAT, par_q2 FLOAT, ugds_nra FLOAT, npt42_pub_absolute FLOAT, cip19cert1 FLOAT, cip11cert2 FLOAT, par_q1 FLOAT, ugds_asian FLOAT, cip50cert2 FLOAT, unitid FLOAT, satmt25 FLOAT, npt45_pub_absolute FLOAT, cip13bachl FLOAT, enrl_orig_yr3_rt FLOAT, par_top5pc FLOAT, ec_high_parent_ses_college FLOAT, pcip16 FLOAT, cip12assoc FLOAT, pcip49 FLOAT, cip51cert4 FLOAT, cip26cert4 FLOAT, cip42cert1 FLOAT, cip23cert2 FLOAT, weighted_debt_relative FLOAT, locale FLOAT, nanti FLOAT, satmt75 FLOAT, count_pq5 FLOAT, inventor_pq2 FLOAT, par_q4 FLOAT, cip30cert4 FLOAT, satmtmid FLOAT, cip29cert4 FLOAT, cip29cert1 FLOAT, sat_avg FLOAT, preddeg FLOAT, cip47cert1 FLOAT, school_x FLOAT, cip19assoc FLOAT, pcip27 FLOAT, cip30cert2 FLOAT, cip48bachl FLOAT, cip50cert4 FLOAT, relaffil FLOAT, cip27bachl FLOAT, satwrmid FLOAT, pcip01 FLOAT, cip01cert1 FLOAT, parent_plus_loan_debt_absolute FLOAT, cip16cert2 FLOAT, cip39cert4 FLOAT, cip25cert4 FLOAT, cip48assoc FLOAT, opeid6 FLOAT, cip49bachl FLOAT, parent_plus_loan_debt_relative FLOAT, satvr75 FLOAT, cip10assoc FLOAT, cip41bachl FLOAT, weighted_income_absolute FLOAT, acten25 FLOAT, cip54cert2 FLOAT, npt45_priv_relative FLOAT, cip38bachl FLOAT, cip16assoc FLOAT, cip52assoc FLOAT, cip27cert4 FLOAT, cip54bachl FLOAT, cip39bachl FLOAT, cip25assoc FLOAT, cip19bachl FLOAT, cip10cert1 FLOAT, cip03cert2 FLOAT, cip27cert2 FLOAT, satvrmid FLOAT, cip12cert2 FLOAT, cip31cert4 FLOAT, cip22cert4 FLOAT, pcip31 FLOAT, cip48cert2 FLOAT, support_relative FLOAT, cip12bachl FLOAT, ccugprof FLOAT, dependent FLOAT, cip31cert1 FLOAT, count_pq4 FLOAT, support_absolute FLOAT, npt42_priv_relative FLOAT, cip54cert1 FLOAT, cip29cert2 FLOAT, first_gen FLOAT, ugds_white FLOAT, cip09cert4 FLOAT, npt41_priv_relative FLOAT, cip41cert4 FLOAT, k_married FLOAT, npt45_pub_relative FLOAT, inventor_pq4 FLOAT, pcip10 FLOAT, actmtmid FLOAT, cip46assoc FLOAT, cip14bachl FLOAT, outcomes_relative FLOAT, cip39assoc FLOAT, cip09bachl FLOAT, cip43bachl FLOAT, cip27cert1 FLOAT, cip48cert4 FLOAT, pcip26 FLOAT, cip05cert2 FLOAT, actwrmid FLOAT, cip42cert4 FLOAT, cip12cert4 FLOAT, mr_kq5_pq1 FLOAT, zip FLOAT, cip27assoc FLOAT, cip26cert2 FLOAT, annhi FLOAT, cip30cert1 FLOAT, weighted_income_relative FLOAT, count_pq3 FLOAT, cip38cert2 FLOAT, cip29bachl FLOAT, cip09assoc FLOAT, cip22cert1 FLOAT, cip16bachl FLOAT, cip25cert1 FLOAT, cip45assoc FLOAT, social_diversity_score_absolute FLOAT, stabbr FLOAT, menonly FLOAT, par_q3 FLOAT, economic_inclusion_score_relative FLOAT, npt45_priv_absolute FLOAT, cip14cert1 FLOAT, locale2 FLOAT, cip47assoc FLOAT, npcurl FLOAT, pcip48 FLOAT, cip22assoc FLOAT, cip51assoc FLOAT, cip15assoc FLOAT, pcip09 FLOAT, cip43cert1 FLOAT, cip01cert2 FLOAT, cip45cert4 FLOAT, pcip11 FLOAT, actmt75 FLOAT, cip04assoc FLOAT, npt44_priv_relative FLOAT, cip12cert1 FLOAT, cip24bachl FLOAT, cip54assoc FLOAT, pcip13 FLOAT, cip24assoc FLOAT, cip45cert1 FLOAT, cip42cert2 FLOAT, highdeg FLOAT, cip23bachl FLOAT, cip31bachl FLOAT, cip04cert1 FLOAT, cip47cert4 FLOAT, actcm25 FLOAT, cip46cert1 FLOAT, pcip51 FLOAT, cip47bachl FLOAT, cip44cert2 FLOAT, pcip24 FLOAT, inventor_pq1 FLOAT, par_top10pc FLOAT, pcip44 FLOAT, cip14cert4 FLOAT, actenmid FLOAT, cip38cert4 FLOAT, pcip52 FLOAT, cip26bachl FLOAT, cip54cert4 FLOAT, npt44_priv_absolute FLOAT, cip03assoc FLOAT, npt44_pub_relative FLOAT, pcip54 FLOAT, superopeid FLOAT, cip51cert1 FLOAT, pcip40 FLOAT, pbi FLOAT, cip05bachl FLOAT, cip05cert4 FLOAT, cip15cert1 FLOAT, pcip15 FLOAT, cip24cert1 FLOAT, cip52cert2 FLOAT, cip04cert2 FLOAT, cip11bachl FLOAT, cip16cert1 FLOAT, cip19cert4 FLOAT, cip15cert2 FLOAT, cip25bachl FLOAT, sat_avg_all FLOAT, count_pq2 FLOAT, pcip46 FLOAT, inventor_pq3 FLOAT, pcip25 FLOAT, cip39cert2 FLOAT, inventor FLOAT, cip40cert2 FLOAT, cip50assoc FLOAT, npt43_priv_relative FLOAT, sch_deg FLOAT, cip31assoc FLOAT, npt44_pub_absolute FLOAT, hbcu FLOAT, cip40cert1 FLOAT, cip44bachl FLOAT, cip13assoc FLOAT, cip05cert1 FLOAT, actwr25 FLOAT, npt43_priv_absolute FLOAT, cip51cert2 FLOAT, cip10cert2 FLOAT, cip13cert1 FLOAT, pcip04 FLOAT, aanapii FLOAT, cip30assoc FLOAT, cip04cert4 FLOAT, cip49cert4 FLOAT, par_top1pc FLOAT, top5cit FLOAT, cip15bachl FLOAT, cip04bachl FLOAT, cip50cert1 FLOAT, par_toppt1pc FLOAT, opeid FLOAT, npt42_priv_absolute FLOAT, cip43cert4 FLOAT, adm_rate_all FLOAT, actwr75 FLOAT, cip42assoc FLOAT, cip43assoc FLOAT, pcip30 FLOAT, cip03cert1 FLOAT, cip15cert4 FLOAT, enrl_orig_yr2_rt FLOAT, count_pq1 FLOAT, pcip29 FLOAT, longitude FLOAT, latitude FLOAT, comp_orig_yr3_rt FLOAT, cip43cert2 FLOAT, cip24cert2 FLOAT, cip52cert1 FLOAT, cip22bachl FLOAT, )
'''

s2 = '''| id                                | int   | YES  |     | NULL    |       |
| instnm                            | text  | YES  |     | NULL    |       |
| st_fips                           | int   | YES  |     | NULL    |       |
| region                            | int   | YES  |     | NULL    |       |
| ccbasic                           | int   | YES  |     | NULL    |       |
| ccsizset                          | int   | YES  |     | NULL    |       |
| adm_rate                          | float | YES  |     | NULL    |       |
| pplus_pct_low                     | float | YES  |     | NULL    |       |
| pplus_pct_high                    | float | YES  |     | NULL    |       |
| plus_debt_all_md                  | float | YES  |     | NULL    |       |
| c150_4                            | float | YES  |     | NULL    |       |
| c100_4                            | float | YES  |     | NULL    |       |
| trans_4                           | float | YES  |     | NULL    |       |
| c150_4_black                      | float | YES  |     | NULL    |       |
| c150_4_hisp                       | float | YES  |     | NULL    |       |
| c150_4_nhpi                       | float | YES  |     | NULL    |       |
| c150_4_aian                       | float | YES  |     | NULL    |       |
| c150_4_pell                       | float | YES  |     | NULL    |       |
| ugds_black                        | float | YES  |     | NULL    |       |
| ugds_hisp                         | float | YES  |     | NULL    |       |
| ugds_aian                         | float | YES  |     | NULL    |       |
| ugds_nhpi                         | float | YES  |     | NULL    |       |
| ugds                              | float | YES  |     | NULL    |       |
| ind_comp_orig_yr4_rt              | float | YES  |     | NULL    |       |
| lo_inc_comp_orig_yr4_rt           | float | YES  |     | NULL    |       |
| firstgen_comp_orig_yr4_rt         | float | YES  |     | NULL    |       |
| comp_orig_yr4_rt                  | float | YES  |     | NULL    |       |
| wdraw_orig_yr3_rt                 | float | YES  |     | NULL    |       |
| ind_wdraw_orig_yr3_rt             | float | YES  |     | NULL    |       |
| lo_inc_wdraw_orig_yr3_rt          | float | YES  |     | NULL    |       |
| firstgen_wdraw_orig_yr3_rt        | float | YES  |     | NULL    |       |
| cuml_debt_p10                     | float | YES  |     | NULL    |       |
| cuml_debt_p25                     | float | YES  |     | NULL    |       |
| cuml_debt_p75                     | float | YES  |     | NULL    |       |
| cuml_debt_p90                     | float | YES  |     | NULL    |       |
| npt41_pub                         | float | YES  |     | NULL    |       |
| npt42_pub                         | float | YES  |     | NULL    |       |
| npt43_pub                         | float | YES  |     | NULL    |       |
| npt44_pub                         | float | YES  |     | NULL    |       |
| npt45_pub                         | float | YES  |     | NULL    |       |
| npt41_priv                        | float | YES  |     | NULL    |       |
| npt42_priv                        | float | YES  |     | NULL    |       |
| npt43_priv                        | float | YES  |     | NULL    |       |
| npt44_priv                        | float | YES  |     | NULL    |       |
| npt45_priv                        | float | YES  |     | NULL    |       |
| pct10_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct25_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct75_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct90_earn_wne_p10                | float | YES  |     | NULL    |       |
| cip25cert2                        | float | YES  |     | NULL    |       |
| cip23cert4                        | float | YES  |     | NULL    |       |
| cip42bachl                        | float | YES  |     | NULL    |       |
| weighted_debt_absolute            | float | YES  |     | NULL    |       |
| satvr25                           | float | YES  |     | NULL    |       |
| social_diversity_score            | float | YES  |     | NULL    |       |
| actcm75                           | float | YES  |     | NULL    |       |
| pcip45                            | float | YES  |     | NULL    |       |
| satwr75                           | float | YES  |     | NULL    |       |
| cip46cert4                        | float | YES  |     | NULL    |       |
| cip38cert1                        | float | YES  |     | NULL    |       |
| npt41_absolute                | float | YES  |     | NULL    |       |
| cip01assoc                        | float | YES  |     | NULL    |       |
| ec_parent_ses_college             | float | YES  |     | NULL    |       |
| cip50bachl                        | float | YES  |     | NULL    |       |
| npt42_relative                | float | YES  |     | NULL    |       |
| cip38assoc                        | float | YES  |     | NULL    |       |
| cip52cert4                        | float | YES  |     | NULL    |       |
| cip41assoc                        | float | YES  |     | NULL    |       |
| pell_ever                         | float | YES  |     | NULL    |       |
| cip46bachl                        | float | YES  |     | NULL    |       |
| pcip19                            | float | YES  |     | NULL    |       |
| cip49assoc                        | float | YES  |     | NULL    |       |
| numbranch                         | float | YES  |     | NULL    |       |
| cip49cert1                        | float | YES  |     | NULL    |       |
| cip14cert2                        | float | YES  |     | NULL    |       |
| cip45bachl                        | float | YES  |     | NULL    |       |
| satwr25                           | float | YES  |     | NULL    |       |
| control                           | float | YES  |     | NULL    |       |
| insturl                           | text  | YES  |     | NULL    |       |
| cip05assoc                        | float | YES  |     | NULL    |       |
| cip13cert2                        | float | YES  |     | NULL    |       |
| cip22cert2                        | float | YES  |     | NULL    |       |
| plus_debt_inst_comp_md            | float | YES  |     | NULL    |       |
| ugds_2mor                         | float | YES  |     | NULL    |       |
| pcip12                            | float | YES  |     | NULL    |       |
| cip10cert4                        | float | YES  |     | NULL    |       |
| agege24                           | float | YES  |     | NULL    |       |
| accredagency                      | text  | YES  |     | NULL    |       |
| npt43_absolute                | float | YES  |     | NULL    |       |
| main                              | float | YES  |     | NULL    |       |
| cip10bachl                        | float | YES  |     | NULL    |       |
| city                              | text  | YES  |     | NULL    |       |
| cip45cert2                        | float | YES  |     | NULL    |       |
| plus_debt_all_nocomp_md           | float | YES  |     | NULL    |       |
| distanceonly                      | float | YES  |     | NULL    |       |
| pcip22                            | float | YES  |     | NULL    |       |
| debt_mdn                          | float | YES  |     | NULL    |       |
| cip46cert2                        | float | YES  |     | NULL    |       |
| npt41_relative                | float | YES  |     | NULL    |       |
| womenonly                         | float | YES  |     | NULL    |       |
| cip44assoc                        | float | YES  |     | NULL    |       |
| tribal                            | float | YES  |     | NULL    |       |
| par_q5                            | float | YES  |     | NULL    |       |
| cip26cert1                        | float | YES  |     | NULL    |       |
| cip24cert4                        | float | YES  |     | NULL    |       |
| cip47cert2                        | float | YES  |     | NULL    |       |
| pcip03                            | float | YES  |     | NULL    |       |
| pcip43                            | float | YES  |     | NULL    |       |
| cip31cert2                        | float | YES  |     | NULL    |       |
| actcmmid                          | float | YES  |     | NULL    |       |
| outcomes_absolute                 | float | YES  |     | NULL    |       |
| economic_inclusion_score          | float | YES  |     | NULL    |       |
| cip49cert2                        | float | YES  |     | NULL    |       |
| cip13cert4                        | float | YES  |     | NULL    |       |
| cip11cert1                        | float | YES  |     | NULL    |       |
| mr_ktop1_pq1                      | float | YES  |     | NULL    |       |
| cip11assoc                        | float | YES  |     | NULL    |       |
| cip41cert1                        | float | YES  |     | NULL    |       |
| inventor_pq5                      | float | YES  |     | NULL    |       |
| acten75                           | float | YES  |     | NULL    |       |
| cip26assoc                        | float | YES  |     | NULL    |       |
| hcm2                              | float | YES  |     | NULL    |       |
| cip03cert4                        | float | YES  |     | NULL    |       |
| cip41cert2                        | float | YES  |     | NULL    |       |
| cip48cert1                        | float | YES  |     | NULL    |       |
| cip44cert4                        | float | YES  |     | NULL    |       |
| success_relative                  | float | YES  |     | NULL    |       |
| pcip42                            | float | YES  |     | NULL    |       |
| count                             | float | YES  |     | NULL    |       |
| cip51bachl                        | float | YES  |     | NULL    |       |
| pcip47                            | float | YES  |     | NULL    |       |
| success_absolute                  | float | YES  |     | NULL    |       |
| cip40bachl                        | float | YES  |     | NULL    |       |
| cip01bachl                        | float | YES  |     | NULL    |       |
| pcip41                            | float | YES  |     | NULL    |       |
| social_diversity_score_relative   | float | YES  |     | NULL    |       |
| cip40assoc                        | float | YES  |     | NULL    |       |
| ug                                | float | YES  |     | NULL    |       |
| cip29assoc                        | float | YES  |     | NULL    |       |
| total_patents                     | float | YES  |     | NULL    |       |
| total_cites                       | float | YES  |     | NULL    |       |
| cip01cert4                        | float | YES  |     | NULL    |       |
| cip03bachl                        | float | YES  |     | NULL    |       |
| pcip23                            | float | YES  |     | NULL    |       |
| pcip38                            | float | YES  |     | NULL    |       |
| npt43_relative                | float | YES  |     | NULL    |       |
| cip23cert1                        | float | YES  |     | NULL    |       |
| cip40cert4                        | float | YES  |     | NULL    |       |
| cip16cert4                        | float | YES  |     | NULL    |       |
| cip44cert1                        | float | YES  |     | NULL    |       |
| pcip50                            | float | YES  |     | NULL    |       |
| pcip14                            | float | YES  |     | NULL    |       |
| pcip39                            | float | YES  |     | NULL    |       |
| pcip05                            | float | YES  |     | NULL    |       |
| cip30bachl                        | float | YES  |     | NULL    |       |
| cip14assoc                        | float | YES  |     | NULL    |       |
| cip19cert2                        | float | YES  |     | NULL    |       |
| cip52bachl                        | float | YES  |     | NULL    |       |
| hsi                               | float | YES  |     | NULL    |       |
| cip23assoc                        | float | YES  |     | NULL    |       |
| cip09cert1                        | float | YES  |     | NULL    |       |
| economic_inclusion_score_absolute | float | YES  |     | NULL    |       |
| cip11cert4                        | float | YES  |     | NULL    |       |
| actmt25                           | float | YES  |     | NULL    |       |
| cip39cert1                        | float | YES  |     | NULL    |       |
| cip09cert2                        | float | YES  |     | NULL    |       |
| par_q2                            | float | YES  |     | NULL    |       |
| ugds_nra                          | float | YES  |     | NULL    |       |
| npt42_absolute                | float | YES  |     | NULL    |       |
| cip19cert1                        | float | YES  |     | NULL    |       |
| cip11cert2                        | float | YES  |     | NULL    |       |
| par_q1                            | float | YES  |     | NULL    |       |
| ugds_asian                        | float | YES  |     | NULL    |       |
| cip50cert2                        | float | YES  |     | NULL    |       |
| unitid                            | float | YES  |     | NULL    |       |
| satmt25                           | float | YES  |     | NULL    |       |
| npt45_absolute                | float | YES  |     | NULL    |       |
| cip13bachl                        | float | YES  |     | NULL    |       |
| enrl_orig_yr3_rt                  | float | YES  |     | NULL    |       |
| par_top5pc                        | float | YES  |     | NULL    |       |
| ec_high_parent_ses_college        | float | YES  |     | NULL    |       |
| pcip16                            | float | YES  |     | NULL    |       |
| cip12assoc                        | float | YES  |     | NULL    |       |
| pcip49                            | float | YES  |     | NULL    |       |
| cip51cert4                        | float | YES  |     | NULL    |       |
| cip26cert4                        | float | YES  |     | NULL    |       |
| cip42cert1                        | float | YES  |     | NULL    |       |
| cip23cert2                        | float | YES  |     | NULL    |       |
| weighted_debt_relative            | float | YES  |     | NULL    |       |
| locale                            | float | YES  |     | NULL    |       |
| nanti                             | float | YES  |     | NULL    |       |
| satmt75                           | float | YES  |     | NULL    |       |
| count_pq5                         | float | YES  |     | NULL    |       |
| inventor_pq2                      | float | YES  |     | NULL    |       |
| par_q4                            | float | YES  |     | NULL    |       |
| cip30cert4                        | float | YES  |     | NULL    |       |
| satmtmid                          | float | YES  |     | NULL    |       |
| cip29cert4                        | float | YES  |     | NULL    |       |
| cip29cert1                        | float | YES  |     | NULL    |       |
| sat_avg                           | float | YES  |     | NULL    |       |
| preddeg                           | float | YES  |     | NULL    |       |
| cip47cert1                        | float | YES  |     | NULL    |       |
| school_x                          | float | YES  |     | NULL    |       |
| cip19assoc                        | float | YES  |     | NULL    |       |
| pcip27                            | float | YES  |     | NULL    |       |
| cip30cert2                        | float | YES  |     | NULL    |       |
| cip48bachl                        | float | YES  |     | NULL    |       |
| cip50cert4                        | float | YES  |     | NULL    |       |
| relaffil                          | float | YES  |     | NULL    |       |
| cip27bachl                        | float | YES  |     | NULL    |       |
| satwrmid                          | float | YES  |     | NULL    |       |
| pcip01                            | float | YES  |     | NULL    |       |
| cip01cert1                        | float | YES  |     | NULL    |       |
| parent_plus_loan_debt_absolute    | float | YES  |     | NULL    |       |
| cip16cert2                        | float | YES  |     | NULL    |       |
| cip39cert4                        | float | YES  |     | NULL    |       |
| cip25cert4                        | float | YES  |     | NULL    |       |
| cip48assoc                        | float | YES  |     | NULL    |       |
| opeid6                            | float | YES  |     | NULL    |       |
| cip49bachl                        | float | YES  |     | NULL    |       |
| parent_plus_loan_debt_relative    | float | YES  |     | NULL    |       |
| satvr75                           | float | YES  |     | NULL    |       |
| cip10assoc                        | float | YES  |     | NULL    |       |
| cip41bachl                        | float | YES  |     | NULL    |       |
| weighted_income_absolute          | float | YES  |     | NULL    |       |
| acten25                           | float | YES  |     | NULL    |       |
| cip54cert2                        | float | YES  |     | NULL    |       |
| npt45_relative               | float | YES  |     | NULL    |       |
| cip38bachl                        | float | YES  |     | NULL    |       |
| cip16assoc                        | float | YES  |     | NULL    |       |
| cip52assoc                        | float | YES  |     | NULL    |       |
| cip27cert4                        | float | YES  |     | NULL    |       |
| cip54bachl                        | float | YES  |     | NULL    |       |
| cip39bachl                        | float | YES  |     | NULL    |       |
| cip25assoc                        | float | YES  |     | NULL    |       |
| cip19bachl                        | float | YES  |     | NULL    |       |
| cip10cert1                        | float | YES  |     | NULL    |       |
| cip03cert2                        | float | YES  |     | NULL    |       |
| cip27cert2                        | float | YES  |     | NULL    |       |
| satvrmid                          | float | YES  |     | NULL    |       |
| cip12cert2                        | float | YES  |     | NULL    |       |
| cip31cert4                        | float | YES  |     | NULL    |       |
| cip22cert4                        | float | YES  |     | NULL    |       |
| pcip31                            | float | YES  |     | NULL    |       |
| cip48cert2                        | float | YES  |     | NULL    |       |
| support_relative                  | float | YES  |     | NULL    |       |
| cip12bachl                        | float | YES  |     | NULL    |       |
| ccugprof                          | float | YES  |     | NULL    |       |
| dependent                         | float | YES  |     | NULL    |       |
| cip31cert1                        | float | YES  |     | NULL    |       |
| count_pq4                         | float | YES  |     | NULL    |       |
| support_absolute                  | float | YES  |     | NULL    |       |
| cip54cert1                        | float | YES  |     | NULL    |       |
| cip29cert2                        | float | YES  |     | NULL    |       |
| first_gen                         | float | YES  |     | NULL    |       |
| ugds_white                        | float | YES  |     | NULL    |       |
| cip09cert4                        | float | YES  |     | NULL    |       |
| cip41cert4                        | float | YES  |     | NULL    |       |
| k_married                         | float | YES  |     | NULL    |       |
| inventor_pq4                      | float | YES  |     | NULL    |       |
| pcip10                            | float | YES  |     | NULL    |       |
| actmtmid                          | float | YES  |     | NULL    |       |
| cip46assoc                        | float | YES  |     | NULL    |       |
| cip14bachl                        | float | YES  |     | NULL    |       |
| outcomes_relative                 | float | YES  |     | NULL    |       |
| cip39assoc                        | float | YES  |     | NULL    |       |
| cip09bachl                        | float | YES  |     | NULL    |       |
| cip43bachl                        | float | YES  |     | NULL    |       |
| cip27cert1                        | float | YES  |     | NULL    |       |
| cip48cert4                        | float | YES  |     | NULL    |       |
| pcip26                            | float | YES  |     | NULL    |       |
| cip05cert2                        | float | YES  |     | NULL    |       |
| actwrmid                          | float | YES  |     | NULL    |       |
| cip42cert4                        | float | YES  |     | NULL    |       |
| cip12cert4                        | float | YES  |     | NULL    |       |
| mr_kq5_pq1                        | float | YES  |     | NULL    |       |
| zip                               | text  | YES  |     | NULL    |       |
| cip27assoc                        | float | YES  |     | NULL    |       |
| cip26cert2                        | float | YES  |     | NULL    |       |
| annhi                             | float | YES  |     | NULL    |       |
| cip30cert1                        | float | YES  |     | NULL    |       |
| weighted_income_relative          | float | YES  |     | NULL    |       |
| count_pq3                         | float | YES  |     | NULL    |       |
| cip38cert2                        | float | YES  |     | NULL    |       |
| cip29bachl                        | float | YES  |     | NULL    |       |
| cip09assoc                        | float | YES  |     | NULL    |       |
| cip22cert1                        | float | YES  |     | NULL    |       |
| cip16bachl                        | float | YES  |     | NULL    |       |
| cip25cert1                        | float | YES  |     | NULL    |       |
| cip45assoc                        | float | YES  |     | NULL    |       |
| social_diversity_score_absolute   | float | YES  |     | NULL    |       |
| stabbr                            | text  | YES  |     | NULL    |       |
| menonly                           | float | YES  |     | NULL    |       |
| par_q3                            | float | YES  |     | NULL    |       |
| economic_inclusion_score_relative | float | YES  |     | NULL    |       |
| cip14cert1                        | float | YES  |     | NULL    |       |
| locale2                           | float | YES  |     | NULL    |       |
| cip47assoc                        | float | YES  |     | NULL    |       |
| npcurl                            | text  | YES  |     | NULL    |       |
| pcip48                            | float | YES  |     | NULL    |       |
| cip22assoc                        | float | YES  |     | NULL    |       |
| cip51assoc                        | float | YES  |     | NULL    |       |
| cip15assoc                        | float | YES  |     | NULL    |       |
| pcip09                            | float | YES  |     | NULL    |       |
| cip43cert1                        | float | YES  |     | NULL    |       |
| cip01cert2                        | float | YES  |     | NULL    |       |
| cip45cert4                        | float | YES  |     | NULL    |       |
| pcip11                            | float | YES  |     | NULL    |       |
| actmt75                           | float | YES  |     | NULL    |       |
| cip04assoc                        | float | YES  |     | NULL    |       |
| npt44_relative               | float | YES  |     | NULL    |       |
| cip12cert1                        | float | YES  |     | NULL    |       |
| cip24bachl                        | float | YES  |     | NULL    |       |
| cip54assoc                        | float | YES  |     | NULL    |       |
| pcip13                            | float | YES  |     | NULL    |       |
| cip24assoc                        | float | YES  |     | NULL    |       |
| cip45cert1                        | float | YES  |     | NULL    |       |
| cip42cert2                        | float | YES  |     | NULL    |       |
| highdeg                           | float | YES  |     | NULL    |       |
| cip23bachl                        | float | YES  |     | NULL    |       |
| cip31bachl                        | float | YES  |     | NULL    |       |
| cip04cert1                        | float | YES  |     | NULL    |       |
| cip47cert4                        | float | YES  |     | NULL    |       |
| actcm25                           | float | YES  |     | NULL    |       |
| cip46cert1                        | float | YES  |     | NULL    |       |
| pcip51                            | float | YES  |     | NULL    |       |
| cip47bachl                        | float | YES  |     | NULL    |       |
| cip44cert2                        | float | YES  |     | NULL    |       |
| pcip24                            | float | YES  |     | NULL    |       |
| inventor_pq1                      | float | YES  |     | NULL    |       |
| par_top10pc                       | float | YES  |     | NULL    |       |
| pcip44                            | float | YES  |     | NULL    |       |
| cip14cert4                        | float | YES  |     | NULL    |       |
| actenmid                          | float | YES  |     | NULL    |       |
| cip38cert4                        | float | YES  |     | NULL    |       |
| pcip52                            | float | YES  |     | NULL    |       |
| cip26bachl                        | float | YES  |     | NULL    |       |
| cip54cert4                        | float | YES  |     | NULL    |       |
| npt44_absolute               | float | YES  |     | NULL    |       |
| cip03assoc                        | float | YES  |     | NULL    |       |
| pcip54                            | float | YES  |     | NULL    |       |
| superopeid                        | float | YES  |     | NULL    |       |
| cip51cert1                        | float | YES  |     | NULL    |       |
| pcip40                            | float | YES  |     | NULL    |       |
| pbi                               | float | YES  |     | NULL    |       |
| cip05bachl                        | float | YES  |     | NULL    |       |
| cip05cert4                        | float | YES  |     | NULL    |       |
| cip15cert1                        | float | YES  |     | NULL    |       |
| pcip15                            | float | YES  |     | NULL    |       |
| cip24cert1                        | float | YES  |     | NULL    |       |
| cip52cert2                        | float | YES  |     | NULL    |       |
| cip04cert2                        | float | YES  |     | NULL    |       |
| cip11bachl                        | float | YES  |     | NULL    |       |
| cip16cert1                        | float | YES  |     | NULL    |       |
| cip19cert4                        | float | YES  |     | NULL    |       |
| cip15cert2                        | float | YES  |     | NULL    |       |
| cip25bachl                        | float | YES  |     | NULL    |       |
| sat_avg_all                       | float | YES  |     | NULL    |       |
| count_pq2                         | float | YES  |     | NULL    |       |
| pcip46                            | float | YES  |     | NULL    |       |
| inventor_pq3                      | float | YES  |     | NULL    |       |
| pcip25                            | float | YES  |     | NULL    |       |
| cip39cert2                        | float | YES  |     | NULL    |       |
| inventor                          | float | YES  |     | NULL    |       |
| cip40cert2                        | float | YES  |     | NULL    |       |
| cip50assoc                        | float | YES  |     | NULL    |       |
| sch_deg                           | float | YES  |     | NULL    |       |
| cip31assoc                        | float | YES  |     | NULL    |       |
| hbcu                              | float | YES  |     | NULL    |       |
| cip40cert1                        | float | YES  |     | NULL    |       |
| cip44bachl                        | float | YES  |     | NULL    |       |
| cip13assoc                        | float | YES  |     | NULL    |       |
| cip05cert1                        | float | YES  |     | NULL    |       |
| actwr25                           | float | YES  |     | NULL    |       |
| cip51cert2                        | float | YES  |     | NULL    |       |
| cip10cert2                        | float | YES  |     | NULL    |       |
| cip13cert1                        | float | YES  |     | NULL    |       |
| pcip04                            | float | YES  |     | NULL    |       |
| aanapii                           | float | YES  |     | NULL    |       |
| cip30assoc                        | float | YES  |     | NULL    |       |
| cip04cert4                        | float | YES  |     | NULL    |       |
| cip49cert4                        | float | YES  |     | NULL    |       |
| par_top1pc                        | float | YES  |     | NULL    |       |
| top5cit                           | float | YES  |     | NULL    |       |
| cip15bachl                        | float | YES  |     | NULL    |       |
| cip04bachl                        | float | YES  |     | NULL    |       |
| cip50cert1                        | float | YES  |     | NULL    |       |
| par_toppt1pc                      | float | YES  |     | NULL    |       |
| opeid                             | float | YES  |     | NULL    |       |
| cip43cert4                        | float | YES  |     | NULL    |       |
| adm_rate_all                      | float | YES  |     | NULL    |       |
| actwr75                           | float | YES  |     | NULL    |       |
| cip42assoc                        | float | YES  |     | NULL    |       |
| cip43assoc                        | float | YES  |     | NULL    |       |
| pcip30                            | float | YES  |     | NULL    |       |
| cip03cert1                        | float | YES  |     | NULL    |       |
| cip15cert4                        | float | YES  |     | NULL    |       |
| enrl_orig_yr2_rt                  | float | YES  |     | NULL    |       |
| count_pq1                         | float | YES  |     | NULL    |       |
| pcip29                            | float | YES  |     | NULL    |       |
| longitude                         | float | YES  |     | NULL    |       |
| latitude                          | float | YES  |     | NULL    |       |
| comp_orig_yr3_rt                  | float | YES  |     | NULL    |       |
| cip43cert2                        | float | YES  |     | NULL    |       |
| cip24cert2                        | float | YES  |     | NULL    |       |
| cip52cert1                        | float | YES  |     | NULL    |       |
| cip22bachl                        | float | YES  |     | NULL    |       |
+-----------------------------------+-------+------+-----+---------+'''
s2 = '''+---------------+--------------+------------+-----------------------------------+------------------+----------------+-------------+-----------+--------------------------+------------------------+-------------------+---------------+--------------------+--------------------+--------------------+-------------+------------+-------+---------------------------------+----------------+-----------------------+--------+
| TABLE_CATALOG | TABLE_SCHEMA | TABLE_NAME | COLUMN_NAME                       | ORDINAL_POSITION | COLUMN_DEFAULT | IS_NULLABLE | DATA_TYPE | CHARACTER_MAXIMUM_LENGTH | CHARACTER_OCTET_LENGTH | NUMERIC_PRECISION | NUMERIC_SCALE | DATETIME_PRECISION | CHARACTER_SET_NAME | COLLATION_NAME     | COLUMN_TYPE | COLUMN_KEY | EXTRA | PRIVILEGES                      | COLUMN_COMMENT | GENERATION_EXPRESSION | SRS_ID |
+---------------+--------------+------------+-----------------------------------+------------------+----------------+-------------+-----------+--------------------------+------------------------+-------------------+---------------+--------------------+--------------------+--------------------+-------------+------------+-------+---------------------------------+----------------+-----------------------+--------+
| def           | schools      | schools    | aanapii                           |              379 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | accredagency                      |               87 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actcm25                           |              324 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actcm75                           |               56 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actcmmid                          |              110 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | acten25                           |              226 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | acten75                           |              120 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actenmid                          |              334 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actmt25                           |              164 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actmt75                           |              309 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actmtmid                          |              262 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actwr25                           |              374 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actwr75                           |              392 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | actwrmid                          |              273 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | adm_rate                          |                7 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | adm_rate_all                      |              391 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | agege24                           |               86 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | annhi                             |              280 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c100_4                            |               12 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4                            |               11 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4_aian                       |               17 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4_black                      |               14 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4_hisp                       |               15 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4_nhpi                       |               16 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | c150_4_pell                       |               18 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ccbasic                           |                5 | NULL           | YES         | int       |                     NULL |                   NULL |                10 |             0 |               NULL | NULL               | NULL               | int         |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ccsizset                          |                6 | NULL           | YES         | int       |                     NULL |                   NULL |                10 |             0 |               NULL | NULL               | NULL               | int         |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ccugprof                          |              248 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip01assoc                        |               61 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip01bachl                        |              134 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip01cert1                        |              213 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip01cert2                        |              306 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip01cert4                        |              142 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip03assoc                        |              340 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip03bachl                        |              143 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip03cert1                        |              396 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip03cert2                        |              238 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip03cert4                        |              123 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip04assoc                        |              310 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip04bachl                        |              386 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip04cert1                        |              322 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip04cert2                        |              352 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip04cert4                        |              381 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip05assoc                        |               79 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip05bachl                        |              346 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip05cert1                        |              373 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip05cert2                        |              272 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip05cert4                        |              347 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip09assoc                        |              286 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip09bachl                        |              267 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip09cert1                        |              161 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip09cert2                        |              166 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip09cert4                        |              257 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip10assoc                        |              223 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip10bachl                        |               91 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip10cert1                        |              237 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip10cert2                        |              376 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip10cert4                        |               85 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip11assoc                        |              117 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip11bachl                        |              353 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip11cert1                        |              115 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip11cert2                        |              171 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip11cert4                        |              163 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip12assoc                        |              183 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip12bachl                        |              247 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip12cert1                        |              312 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip12cert2                        |              241 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip12cert4                        |              275 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip13assoc                        |              372 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip13bachl                        |              178 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip13cert1                        |              377 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip13cert2                        |               80 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip13cert4                        |              114 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip14assoc                        |              156 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip14bachl                        |              264 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip14cert1                        |              296 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip14cert2                        |               74 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip14cert4                        |              333 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip15assoc                        |              303 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip15bachl                        |              385 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip15cert1                        |              348 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip15cert2                        |              356 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip15cert4                        |              397 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip16assoc                        |              230 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip16bachl                        |              288 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip16cert1                        |              354 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip16cert2                        |              215 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip16cert4                        |              149 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip19assoc                        |              204 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip19bachl                        |              236 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip19cert1                        |              170 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip19cert2                        |              157 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip19cert4                        |              355 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip22assoc                        |              301 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip22bachl                        |              407 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip22cert1                        |              287 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip22cert2                        |               81 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip22cert4                        |              243 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip23assoc                        |              160 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip23bachl                        |              320 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip23cert1                        |              147 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip23cert2                        |              188 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip23cert4                        |               51 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip24assoc                        |              316 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip24bachl                        |              313 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip24cert1                        |              350 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip24cert2                        |              405 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip24cert4                        |              105 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip25assoc                        |              235 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip25bachl                        |              357 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip25cert1                        |              289 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip25cert2                        |               50 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip25cert4                        |              217 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip26assoc                        |              121 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip26bachl                        |              337 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip26cert1                        |              104 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip26cert2                        |              279 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip26cert4                        |              186 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip27assoc                        |              278 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip27bachl                        |              210 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip27cert1                        |              269 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip27cert2                        |              239 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip27cert4                        |              232 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip29assoc                        |              139 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip29bachl                        |              285 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip29cert1                        |              199 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip29cert2                        |              254 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip29cert4                        |              198 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip30assoc                        |              380 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip30bachl                        |              155 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip30cert1                        |              281 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip30cert2                        |              206 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip30cert4                        |              196 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip31assoc                        |              368 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip31bachl                        |              321 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip31cert1                        |              250 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip31cert2                        |              109 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip31cert4                        |              242 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip38assoc                        |               65 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip38bachl                        |              229 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip38cert1                        |               60 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip38cert2                        |              284 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip38cert4                        |              335 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip39assoc                        |              266 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip39bachl                        |              234 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip39cert1                        |              165 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip39cert2                        |              363 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip39cert4                        |              216 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip40assoc                        |              137 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip40bachl                        |              133 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip40cert1                        |              370 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip40cert2                        |              365 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip40cert4                        |              148 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip41assoc                        |               67 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip41bachl                        |              224 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip41cert1                        |              118 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip41cert2                        |              124 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip41cert4                        |              258 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip42assoc                        |              393 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip42bachl                        |               52 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip42cert1                        |              187 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip42cert2                        |              318 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip42cert4                        |              274 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip43assoc                        |              394 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip43bachl                        |              268 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip43cert1                        |              305 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip43cert2                        |              404 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip43cert4                        |              390 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip44assoc                        |              101 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip44bachl                        |              371 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip44cert1                        |              150 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip44cert2                        |              328 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip44cert4                        |              126 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip45assoc                        |              290 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip45bachl                        |               75 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip45cert1                        |              317 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip45cert2                        |               93 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip45cert4                        |              307 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip46assoc                        |              263 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip46bachl                        |               69 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip46cert1                        |              325 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip46cert2                        |               98 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip46cert4                        |               59 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip47assoc                        |              298 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip47bachl                        |              327 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip47cert1                        |              202 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip47cert2                        |              106 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip47cert4                        |              323 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip48assoc                        |              218 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip48bachl                        |              207 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip48cert1                        |              125 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip48cert2                        |              245 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip48cert4                        |              270 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip49assoc                        |               71 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip49bachl                        |              220 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip49cert1                        |               73 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip49cert2                        |              113 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip49cert4                        |              382 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip50assoc                        |              366 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip50bachl                        |               63 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip50cert1                        |              387 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip50cert2                        |              174 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip50cert4                        |              208 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip51assoc                        |              302 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip51bachl                        |              130 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip51cert1                        |              343 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip51cert2                        |              375 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip51cert4                        |              185 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip52assoc                        |              231 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip52bachl                        |              158 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip52cert1                        |              406 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip52cert2                        |              351 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip52cert4                        |               66 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip54assoc                        |              314 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip54bachl                        |              233 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip54cert1                        |              253 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip54cert2                        |              227 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cip54cert4                        |              338 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | city                              |               92 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | comp_orig_yr3_rt                  |              403 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | comp_orig_yr4_rt                  |               27 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | control                           |               77 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count                             |              129 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count_pq1                         |              399 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count_pq2                         |              359 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count_pq3                         |              283 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count_pq4                         |              251 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | count_pq5                         |              193 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cuml_debt_p10                     |               32 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cuml_debt_p25                     |               33 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cuml_debt_p75                     |               34 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | cuml_debt_p90                     |               35 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | debt_mdn                          |               97 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | dependent                         |              249 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | distanceonly                      |               95 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ec_high_parent_ses_college        |              181 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ec_parent_ses_college             |               62 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | economic_inclusion_score          |              112 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | economic_inclusion_score_absolute |              162 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | economic_inclusion_score_relative |              295 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | enrl_orig_yr2_rt                  |              398 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | enrl_orig_yr3_rt                  |              179 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | first_gen                         |              255 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | firstgen_comp_orig_yr4_rt         |               26 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | firstgen_wdraw_orig_yr3_rt        |               31 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | hbcu                              |              369 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | hcm2                              |              122 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | highdeg                           |              319 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | hsi                               |              159 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | id                                |                1 | NULL           | YES         | int       |                     NULL |                   NULL |                10 |             0 |               NULL | NULL               | NULL               | int         |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ind_comp_orig_yr4_rt              |               24 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ind_wdraw_orig_yr3_rt             |               29 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | instnm                            |                2 | NULL           | YES         | text      |                    65535 |                  65535 |              NULL |          NULL |               NULL | utf8mb3            | utf8mb3_general_ci | text        |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | insturl                           |               78 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor                          |              364 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor_pq1                      |              330 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor_pq2                      |              194 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor_pq3                      |              361 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor_pq4                      |              260 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | inventor_pq5                      |              119 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | k_married                         |              259 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | latitude                          |              402 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | lo_inc_comp_orig_yr4_rt           |               25 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | lo_inc_wdraw_orig_yr3_rt          |               30 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | locale                            |              190 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | locale2                           |              297 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | longitude                         |              401 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | main                              |               89 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | menonly                           |              293 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | mr_kq5_pq1                        |              276 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | mr_ktop1_pq1                      |              116 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | nanti                             |              191 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npcurl                            |              299 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt41_absolute                    |               90 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt41_priv                        |               41 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt41_pub                         |               36 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt41_relative                    |               99 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt42_absolute                    |              169 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt42_priv                        |               42 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt42_pub                         |               37 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt42_relative                    |               64 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt43_absolute                    |               88 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt43_priv                        |               43 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt43_pub                         |               38 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt43_relative                    |              146 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt44_absolute                    |              339 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt44_priv                        |               44 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt44_pub                         |               39 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt44_relative                    |              311 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt45_absolute                    |              177 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt45_priv                        |               45 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt45_pub                         |               40 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | npt45_relative                    |              228 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | numbranch                         |               72 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | opeid                             |              389 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | opeid6                            |              219 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | outcomes_absolute                 |              111 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | outcomes_relative                 |              265 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_q1                            |              172 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_q2                            |              167 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_q3                            |              294 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_q4                            |              195 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_q5                            |              103 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_top10pc                       |              331 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_top1pc                        |              383 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_top5pc                        |              180 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | par_toppt1pc                      |              388 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | parent_plus_loan_debt_absolute    |              214 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | parent_plus_loan_debt_relative    |              221 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pbi                               |              345 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip01                            |              212 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip03                            |              107 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip04                            |              378 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip05                            |              154 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip09                            |              304 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip10                            |              261 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip11                            |              308 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip12                            |               84 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip13                            |              315 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip14                            |              152 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip15                            |              349 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip16                            |              182 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip19                            |               70 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip22                            |               96 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip23                            |              144 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip24                            |              329 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip25                            |              362 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip26                            |              271 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip27                            |              205 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip29                            |              400 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip30                            |              395 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip31                            |              244 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip38                            |              145 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip39                            |              153 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip40                            |              344 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip41                            |              135 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip42                            |              128 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip43                            |              108 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip44                            |              332 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip45                            |               57 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip46                            |              360 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip47                            |              131 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip48                            |              300 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip49                            |              184 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip50                            |              151 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip51                            |              326 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip52                            |              336 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pcip54                            |              341 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pct10_earn_wne_p10                |               46 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pct25_earn_wne_p10                |               47 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pct75_earn_wne_p10                |               48 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pct90_earn_wne_p10                |               49 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pell_ever                         |               68 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | plus_debt_all_md                  |               10 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | plus_debt_all_nocomp_md           |               94 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | plus_debt_inst_comp_md            |               82 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pplus_pct_high                    |                9 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | pplus_pct_low                     |                8 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | preddeg                           |              201 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | region                            |                4 | NULL           | YES         | int       |                     NULL |                   NULL |                10 |             0 |               NULL | NULL               | NULL               | int         |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | relaffil                          |              209 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | sat_avg                           |              200 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | sat_avg_all                       |              358 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satmt25                           |              176 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satmt75                           |              192 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satmtmid                          |              197 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satvr25                           |               54 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satvr75                           |              222 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satvrmid                          |              240 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satwr25                           |               76 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satwr75                           |               58 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | satwrmid                          |              211 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | sch_deg                           |              367 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | school_x                          |              203 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | social_diversity_score            |               55 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | social_diversity_score_absolute   |              291 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | social_diversity_score_relative   |              136 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | st_fips                           |                3 | NULL           | YES         | int       |                     NULL |                   NULL |                10 |             0 |               NULL | NULL               | NULL               | int         |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | stabbr                            |              292 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | success_absolute                  |              132 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | success_relative                  |              127 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | superopeid                        |              342 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | support_absolute                  |              252 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | support_relative                  |              246 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | top5cit                           |              384 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | total_cites                       |              141 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | total_patents                     |              140 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | trans_4                           |               13 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | tribal                            |              102 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ug                                |              138 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds                              |               23 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_2mor                         |               83 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_aian                         |               21 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_asian                        |              173 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_black                        |               19 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_hisp                         |               20 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_nhpi                         |               22 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_nra                          |              168 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | ugds_white                        |              256 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | unitid                            |              175 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | wdraw_orig_yr3_rt                 |               28 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | weighted_debt_absolute            |               53 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | weighted_debt_relative            |              189 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | weighted_income_absolute          |              225 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | weighted_income_relative          |              282 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | womenonly                         |              100 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
| def           | schools      | schools    | zip                               |              277 | NULL           | YES         | float     |                     NULL |                   NULL |                12 |          NULL |               NULL | NULL               | NULL               | float       |            |       | select,insert,update,references |                |                       |   NULL |
+---------------+--------------+------------+-----------------------------------+------------------+----------------+-------------+-----------+--------------------------+------------------------+-------------------+---------------+--------------------+--------------------+--------------------+-------------+------------+-------+---------------------------------+----------------+-----------------------+--------+'''
s2 = '''+-----------------------------------+-------+------+-----+---------+-------+
| Field                             | Type  | Null | Key | Default | Extra |
+-----------------------------------+-------+------+-----+---------+-------+
| id                                | int   | YES  |     | NULL    |       |
| instnm                            | text  | YES  |     | NULL    |       |
| st_fips                           | int   | YES  |     | NULL    |       |
| region                            | int   | YES  |     | NULL    |       |
| ccbasic                           | int   | YES  |     | NULL    |       |
| ccsizset                          | int   | YES  |     | NULL    |       |
| adm_rate                          | float | YES  |     | NULL    |       |
| pplus_pct_low                     | float | YES  |     | NULL    |       |
| pplus_pct_high                    | float | YES  |     | NULL    |       |
| plus_debt_all_md                  | float | YES  |     | NULL    |       |
| c150_4                            | float | YES  |     | NULL    |       |
| c100_4                            | float | YES  |     | NULL    |       |
| trans_4                           | float | YES  |     | NULL    |       |
| c150_4_black                      | float | YES  |     | NULL    |       |
| c150_4_hisp                       | float | YES  |     | NULL    |       |
| c150_4_nhpi                       | float | YES  |     | NULL    |       |
| c150_4_aian                       | float | YES  |     | NULL    |       |
| c150_4_pell                       | float | YES  |     | NULL    |       |
| ugds_black                        | float | YES  |     | NULL    |       |
| ugds_hisp                         | float | YES  |     | NULL    |       |
| ugds_aian                         | float | YES  |     | NULL    |       |
| ugds_nhpi                         | float | YES  |     | NULL    |       |
| ugds                              | float | YES  |     | NULL    |       |
| ind_comp_orig_yr4_rt              | float | YES  |     | NULL    |       |
| lo_inc_comp_orig_yr4_rt           | float | YES  |     | NULL    |       |
| firstgen_comp_orig_yr4_rt         | float | YES  |     | NULL    |       |
| comp_orig_yr4_rt                  | float | YES  |     | NULL    |       |
| wdraw_orig_yr3_rt                 | float | YES  |     | NULL    |       |
| ind_wdraw_orig_yr3_rt             | float | YES  |     | NULL    |       |
| lo_inc_wdraw_orig_yr3_rt          | float | YES  |     | NULL    |       |
| firstgen_wdraw_orig_yr3_rt        | float | YES  |     | NULL    |       |
| cuml_debt_p10                     | float | YES  |     | NULL    |       |
| cuml_debt_p25                     | float | YES  |     | NULL    |       |
| cuml_debt_p75                     | float | YES  |     | NULL    |       |
| cuml_debt_p90                     | float | YES  |     | NULL    |       |
| npt41_pub                         | float | YES  |     | NULL    |       |
| npt42_pub                         | float | YES  |     | NULL    |       |
| npt43_pub                         | float | YES  |     | NULL    |       |
| npt44_pub                         | float | YES  |     | NULL    |       |
| npt45_pub                         | float | YES  |     | NULL    |       |
| npt41_priv                        | float | YES  |     | NULL    |       |
| npt42_priv                        | float | YES  |     | NULL    |       |
| npt43_priv                        | float | YES  |     | NULL    |       |
| npt44_priv                        | float | YES  |     | NULL    |       |
| npt45_priv                        | float | YES  |     | NULL    |       |
| pct10_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct25_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct75_earn_wne_p10                | float | YES  |     | NULL    |       |
| pct90_earn_wne_p10                | float | YES  |     | NULL    |       |
| cip25cert2                        | float | YES  |     | NULL    |       |
| cip23cert4                        | float | YES  |     | NULL    |       |
| cip42bachl                        | float | YES  |     | NULL    |       |
| weighted_debt_absolute            | float | YES  |     | NULL    |       |
| satvr25                           | float | YES  |     | NULL    |       |
| social_diversity_score            | float | YES  |     | NULL    |       |
| actcm75                           | float | YES  |     | NULL    |       |
| pcip45                            | float | YES  |     | NULL    |       |
| satwr75                           | float | YES  |     | NULL    |       |
| cip46cert4                        | float | YES  |     | NULL    |       |
| cip38cert1                        | float | YES  |     | NULL    |       |
| cip01assoc                        | float | YES  |     | NULL    |       |
| ec_parent_ses_college             | float | YES  |     | NULL    |       |
| cip50bachl                        | float | YES  |     | NULL    |       |
| npt42_relative                    | float | YES  |     | NULL    |       |
| cip38assoc                        | float | YES  |     | NULL    |       |
| cip52cert4                        | float | YES  |     | NULL    |       |
| cip41assoc                        | float | YES  |     | NULL    |       |
| pell_ever                         | float | YES  |     | NULL    |       |
| cip46bachl                        | float | YES  |     | NULL    |       |
| pcip19                            | float | YES  |     | NULL    |       |
| cip49assoc                        | float | YES  |     | NULL    |       |
| numbranch                         | float | YES  |     | NULL    |       |
| cip49cert1                        | float | YES  |     | NULL    |       |
| cip14cert2                        | float | YES  |     | NULL    |       |
| cip45bachl                        | float | YES  |     | NULL    |       |
| satwr25                           | float | YES  |     | NULL    |       |
| control                           | float | YES  |     | NULL    |       |
| insturl                           | float | YES  |     | NULL    |       |
| cip05assoc                        | float | YES  |     | NULL    |       |
| cip13cert2                        | float | YES  |     | NULL    |       |
| cip22cert2                        | float | YES  |     | NULL    |       |
| plus_debt_inst_comp_md            | float | YES  |     | NULL    |       |
| ugds_2mor                         | float | YES  |     | NULL    |       |
| pcip12                            | float | YES  |     | NULL    |       |
| cip10cert4                        | float | YES  |     | NULL    |       |
| agege24                           | float | YES  |     | NULL    |       |
| accredagency                      | float | YES  |     | NULL    |       |
| npt43_absolute                    | float | YES  |     | NULL    |       |
| main                              | float | YES  |     | NULL    |       |
| npt41_absolute                    | float | YES  |     | NULL    |       |
| cip10bachl                        | float | YES  |     | NULL    |       |
| city                              | float | YES  |     | NULL    |       |
| cip45cert2                        | float | YES  |     | NULL    |       |
| plus_debt_all_nocomp_md           | float | YES  |     | NULL    |       |
| distanceonly                      | float | YES  |     | NULL    |       |
| pcip22                            | float | YES  |     | NULL    |       |
| debt_mdn                          | float | YES  |     | NULL    |       |
| cip46cert2                        | float | YES  |     | NULL    |       |
| npt41_relative                    | float | YES  |     | NULL    |       |
| womenonly                         | float | YES  |     | NULL    |       |
| cip44assoc                        | float | YES  |     | NULL    |       |
| tribal                            | float | YES  |     | NULL    |       |
| par_q5                            | float | YES  |     | NULL    |       |
| cip26cert1                        | float | YES  |     | NULL    |       |
| cip24cert4                        | float | YES  |     | NULL    |       |
| cip47cert2                        | float | YES  |     | NULL    |       |
| pcip03                            | float | YES  |     | NULL    |       |
| pcip43                            | float | YES  |     | NULL    |       |
| cip31cert2                        | float | YES  |     | NULL    |       |
| actcmmid                          | float | YES  |     | NULL    |       |
| outcomes_absolute                 | float | YES  |     | NULL    |       |
| economic_inclusion_score          | float | YES  |     | NULL    |       |
| cip49cert2                        | float | YES  |     | NULL    |       |
| cip13cert4                        | float | YES  |     | NULL    |       |
| cip11cert1                        | float | YES  |     | NULL    |       |
| mr_ktop1_pq1                      | float | YES  |     | NULL    |       |
| cip11assoc                        | float | YES  |     | NULL    |       |
| cip41cert1                        | float | YES  |     | NULL    |       |
| inventor_pq5                      | float | YES  |     | NULL    |       |
| acten75                           | float | YES  |     | NULL    |       |
| cip26assoc                        | float | YES  |     | NULL    |       |
| hcm2                              | float | YES  |     | NULL    |       |
| cip03cert4                        | float | YES  |     | NULL    |       |
| cip41cert2                        | float | YES  |     | NULL    |       |
| cip48cert1                        | float | YES  |     | NULL    |       |
| cip44cert4                        | float | YES  |     | NULL    |       |
| success_relative                  | float | YES  |     | NULL    |       |
| pcip42                            | float | YES  |     | NULL    |       |
| count                             | float | YES  |     | NULL    |       |
| cip51bachl                        | float | YES  |     | NULL    |       |
| pcip47                            | float | YES  |     | NULL    |       |
| success_absolute                  | float | YES  |     | NULL    |       |
| cip40bachl                        | float | YES  |     | NULL    |       |
| cip01bachl                        | float | YES  |     | NULL    |       |
| pcip41                            | float | YES  |     | NULL    |       |
| social_diversity_score_relative   | float | YES  |     | NULL    |       |
| cip40assoc                        | float | YES  |     | NULL    |       |
| ug                                | float | YES  |     | NULL    |       |
| cip29assoc                        | float | YES  |     | NULL    |       |
| total_patents                     | float | YES  |     | NULL    |       |
| total_cites                       | float | YES  |     | NULL    |       |
| cip01cert4                        | float | YES  |     | NULL    |       |
| cip03bachl                        | float | YES  |     | NULL    |       |
| pcip23                            | float | YES  |     | NULL    |       |
| pcip38                            | float | YES  |     | NULL    |       |
| npt43_relative                    | float | YES  |     | NULL    |       |
| cip23cert1                        | float | YES  |     | NULL    |       |
| cip40cert4                        | float | YES  |     | NULL    |       |
| cip16cert4                        | float | YES  |     | NULL    |       |
| cip44cert1                        | float | YES  |     | NULL    |       |
| pcip50                            | float | YES  |     | NULL    |       |
| pcip14                            | float | YES  |     | NULL    |       |
| pcip39                            | float | YES  |     | NULL    |       |
| pcip05                            | float | YES  |     | NULL    |       |
| cip30bachl                        | float | YES  |     | NULL    |       |
| cip14assoc                        | float | YES  |     | NULL    |       |
| cip19cert2                        | float | YES  |     | NULL    |       |
| cip52bachl                        | float | YES  |     | NULL    |       |
| hsi                               | float | YES  |     | NULL    |       |
| cip23assoc                        | float | YES  |     | NULL    |       |
| cip09cert1                        | float | YES  |     | NULL    |       |
| economic_inclusion_score_absolute | float | YES  |     | NULL    |       |
| cip11cert4                        | float | YES  |     | NULL    |       |
| actmt25                           | float | YES  |     | NULL    |       |
| cip39cert1                        | float | YES  |     | NULL    |       |
| cip09cert2                        | float | YES  |     | NULL    |       |
| par_q2                            | float | YES  |     | NULL    |       |
| ugds_nra                          | float | YES  |     | NULL    |       |
| npt42_absolute                    | float | YES  |     | NULL    |       |
| cip19cert1                        | float | YES  |     | NULL    |       |
| cip11cert2                        | float | YES  |     | NULL    |       |
| par_q1                            | float | YES  |     | NULL    |       |
| ugds_asian                        | float | YES  |     | NULL    |       |
| cip50cert2                        | float | YES  |     | NULL    |       |
| unitid                            | float | YES  |     | NULL    |       |
| satmt25                           | float | YES  |     | NULL    |       |
| npt45_absolute                    | float | YES  |     | NULL    |       |
| cip13bachl                        | float | YES  |     | NULL    |       |
| enrl_orig_yr3_rt                  | float | YES  |     | NULL    |       |
| par_top5pc                        | float | YES  |     | NULL    |       |
| ec_high_parent_ses_college        | float | YES  |     | NULL    |       |
| pcip16                            | float | YES  |     | NULL    |       |
| cip12assoc                        | float | YES  |     | NULL    |       |
| pcip49                            | float | YES  |     | NULL    |       |
| cip51cert4                        | float | YES  |     | NULL    |       |
| cip26cert4                        | float | YES  |     | NULL    |       |
| cip42cert1                        | float | YES  |     | NULL    |       |
| cip23cert2                        | float | YES  |     | NULL    |       |
| weighted_debt_relative            | float | YES  |     | NULL    |       |
| locale                            | float | YES  |     | NULL    |       |
| nanti                             | float | YES  |     | NULL    |       |
| satmt75                           | float | YES  |     | NULL    |       |
| count_pq5                         | float | YES  |     | NULL    |       |
| inventor_pq2                      | float | YES  |     | NULL    |       |
| par_q4                            | float | YES  |     | NULL    |       |
| cip30cert4                        | float | YES  |     | NULL    |       |
| satmtmid                          | float | YES  |     | NULL    |       |
| cip29cert4                        | float | YES  |     | NULL    |       |
| cip29cert1                        | float | YES  |     | NULL    |       |
| sat_avg                           | float | YES  |     | NULL    |       |
| preddeg                           | float | YES  |     | NULL    |       |
| cip47cert1                        | float | YES  |     | NULL    |       |
| school_x                          | float | YES  |     | NULL    |       |
| cip19assoc                        | float | YES  |     | NULL    |       |
| pcip27                            | float | YES  |     | NULL    |       |
| cip30cert2                        | float | YES  |     | NULL    |       |
| cip48bachl                        | float | YES  |     | NULL    |       |
| cip50cert4                        | float | YES  |     | NULL    |       |
| relaffil                          | float | YES  |     | NULL    |       |
| cip27bachl                        | float | YES  |     | NULL    |       |
| satwrmid                          | float | YES  |     | NULL    |       |
| pcip01                            | float | YES  |     | NULL    |       |
| cip01cert1                        | float | YES  |     | NULL    |       |
| parent_plus_loan_debt_absolute    | float | YES  |     | NULL    |       |
| cip16cert2                        | float | YES  |     | NULL    |       |
| cip39cert4                        | float | YES  |     | NULL    |       |
| cip25cert4                        | float | YES  |     | NULL    |       |
| cip48assoc                        | float | YES  |     | NULL    |       |
| opeid6                            | float | YES  |     | NULL    |       |
| cip49bachl                        | float | YES  |     | NULL    |       |
| parent_plus_loan_debt_relative    | float | YES  |     | NULL    |       |
| satvr75                           | float | YES  |     | NULL    |       |
| cip10assoc                        | float | YES  |     | NULL    |       |
| cip41bachl                        | float | YES  |     | NULL    |       |
| weighted_income_absolute          | float | YES  |     | NULL    |       |
| acten25                           | float | YES  |     | NULL    |       |
| cip54cert2                        | float | YES  |     | NULL    |       |
| npt45_relative                    | float | YES  |     | NULL    |       |
| cip38bachl                        | float | YES  |     | NULL    |       |
| cip16assoc                        | float | YES  |     | NULL    |       |
| cip52assoc                        | float | YES  |     | NULL    |       |
| cip27cert4                        | float | YES  |     | NULL    |       |
| cip54bachl                        | float | YES  |     | NULL    |       |
| cip39bachl                        | float | YES  |     | NULL    |       |
| cip25assoc                        | float | YES  |     | NULL    |       |
| cip19bachl                        | float | YES  |     | NULL    |       |
| cip10cert1                        | float | YES  |     | NULL    |       |
| cip03cert2                        | float | YES  |     | NULL    |       |
| cip27cert2                        | float | YES  |     | NULL    |       |
| satvrmid                          | float | YES  |     | NULL    |       |
| cip12cert2                        | float | YES  |     | NULL    |       |
| cip31cert4                        | float | YES  |     | NULL    |       |
| cip22cert4                        | float | YES  |     | NULL    |       |
| pcip31                            | float | YES  |     | NULL    |       |
| cip48cert2                        | float | YES  |     | NULL    |       |
| support_relative                  | float | YES  |     | NULL    |       |
| cip12bachl                        | float | YES  |     | NULL    |       |
| ccugprof                          | float | YES  |     | NULL    |       |
| dependent                         | float | YES  |     | NULL    |       |
| cip31cert1                        | float | YES  |     | NULL    |       |
| count_pq4                         | float | YES  |     | NULL    |       |
| support_absolute                  | float | YES  |     | NULL    |       |
| cip54cert1                        | float | YES  |     | NULL    |       |
| cip29cert2                        | float | YES  |     | NULL    |       |
| first_gen                         | float | YES  |     | NULL    |       |
| ugds_white                        | float | YES  |     | NULL    |       |
| cip09cert4                        | float | YES  |     | NULL    |       |
| cip41cert4                        | float | YES  |     | NULL    |       |
| k_married                         | float | YES  |     | NULL    |       |
| inventor_pq4                      | float | YES  |     | NULL    |       |
| pcip10                            | float | YES  |     | NULL    |       |
| actmtmid                          | float | YES  |     | NULL    |       |
| cip46assoc                        | float | YES  |     | NULL    |       |
| cip14bachl                        | float | YES  |     | NULL    |       |
| outcomes_relative                 | float | YES  |     | NULL    |       |
| cip39assoc                        | float | YES  |     | NULL    |       |
| cip09bachl                        | float | YES  |     | NULL    |       |
| cip43bachl                        | float | YES  |     | NULL    |       |
| cip27cert1                        | float | YES  |     | NULL    |       |
| cip48cert4                        | float | YES  |     | NULL    |       |
| pcip26                            | float | YES  |     | NULL    |       |
| cip05cert2                        | float | YES  |     | NULL    |       |
| actwrmid                          | float | YES  |     | NULL    |       |
| cip42cert4                        | float | YES  |     | NULL    |       |
| cip12cert4                        | float | YES  |     | NULL    |       |
| mr_kq5_pq1                        | float | YES  |     | NULL    |       |
| zip                               | float | YES  |     | NULL    |       |
| cip27assoc                        | float | YES  |     | NULL    |       |
| cip26cert2                        | float | YES  |     | NULL    |       |
| annhi                             | float | YES  |     | NULL    |       |
| cip30cert1                        | float | YES  |     | NULL    |       |
| weighted_income_relative          | float | YES  |     | NULL    |       |
| count_pq3                         | float | YES  |     | NULL    |       |
| cip38cert2                        | float | YES  |     | NULL    |       |
| cip29bachl                        | float | YES  |     | NULL    |       |
| cip09assoc                        | float | YES  |     | NULL    |       |
| cip22cert1                        | float | YES  |     | NULL    |       |
| cip16bachl                        | float | YES  |     | NULL    |       |
| cip25cert1                        | float | YES  |     | NULL    |       |
| cip45assoc                        | float | YES  |     | NULL    |       |
| social_diversity_score_absolute   | float | YES  |     | NULL    |       |
| stabbr                            | float | YES  |     | NULL    |       |
| menonly                           | float | YES  |     | NULL    |       |
| par_q3                            | float | YES  |     | NULL    |       |
| economic_inclusion_score_relative | float | YES  |     | NULL    |       |
| cip14cert1                        | float | YES  |     | NULL    |       |
| locale2                           | float | YES  |     | NULL    |       |
| cip47assoc                        | float | YES  |     | NULL    |       |
| npcurl                            | float | YES  |     | NULL    |       |
| pcip48                            | float | YES  |     | NULL    |       |
| cip22assoc                        | float | YES  |     | NULL    |       |
| cip51assoc                        | float | YES  |     | NULL    |       |
| cip15assoc                        | float | YES  |     | NULL    |       |
| pcip09                            | float | YES  |     | NULL    |       |
| cip43cert1                        | float | YES  |     | NULL    |       |
| cip01cert2                        | float | YES  |     | NULL    |       |
| cip45cert4                        | float | YES  |     | NULL    |       |
| pcip11                            | float | YES  |     | NULL    |       |
| actmt75                           | float | YES  |     | NULL    |       |
| cip04assoc                        | float | YES  |     | NULL    |       |
| npt44_relative                    | float | YES  |     | NULL    |       |
| cip12cert1                        | float | YES  |     | NULL    |       |
| cip24bachl                        | float | YES  |     | NULL    |       |
| cip54assoc                        | float | YES  |     | NULL    |       |
| pcip13                            | float | YES  |     | NULL    |       |
| cip24assoc                        | float | YES  |     | NULL    |       |
| cip45cert1                        | float | YES  |     | NULL    |       |
| cip42cert2                        | float | YES  |     | NULL    |       |
| highdeg                           | float | YES  |     | NULL    |       |
| cip23bachl                        | float | YES  |     | NULL    |       |
| cip31bachl                        | float | YES  |     | NULL    |       |
| cip04cert1                        | float | YES  |     | NULL    |       |
| cip47cert4                        | float | YES  |     | NULL    |       |
| actcm25                           | float | YES  |     | NULL    |       |
| cip46cert1                        | float | YES  |     | NULL    |       |
| pcip51                            | float | YES  |     | NULL    |       |
| cip47bachl                        | float | YES  |     | NULL    |       |
| cip44cert2                        | float | YES  |     | NULL    |       |
| pcip24                            | float | YES  |     | NULL    |       |
| inventor_pq1                      | float | YES  |     | NULL    |       |
| par_top10pc                       | float | YES  |     | NULL    |       |
| pcip44                            | float | YES  |     | NULL    |       |
| cip14cert4                        | float | YES  |     | NULL    |       |
| actenmid                          | float | YES  |     | NULL    |       |
| cip38cert4                        | float | YES  |     | NULL    |       |
| pcip52                            | float | YES  |     | NULL    |       |
| cip26bachl                        | float | YES  |     | NULL    |       |
| cip54cert4                        | float | YES  |     | NULL    |       |
| npt44_absolute                    | float | YES  |     | NULL    |       |
| cip03assoc                        | float | YES  |     | NULL    |       |
| pcip54                            | float | YES  |     | NULL    |       |
| superopeid                        | float | YES  |     | NULL    |       |
| cip51cert1                        | float | YES  |     | NULL    |       |
| pcip40                            | float | YES  |     | NULL    |       |
| pbi                               | float | YES  |     | NULL    |       |
| cip05bachl                        | float | YES  |     | NULL    |       |
| cip05cert4                        | float | YES  |     | NULL    |       |
| cip15cert1                        | float | YES  |     | NULL    |       |
| pcip15                            | float | YES  |     | NULL    |       |
| cip24cert1                        | float | YES  |     | NULL    |       |
| cip52cert2                        | float | YES  |     | NULL    |       |
| cip04cert2                        | float | YES  |     | NULL    |       |
| cip11bachl                        | float | YES  |     | NULL    |       |
| cip16cert1                        | float | YES  |     | NULL    |       |
| cip19cert4                        | float | YES  |     | NULL    |       |
| cip15cert2                        | float | YES  |     | NULL    |       |
| cip25bachl                        | float | YES  |     | NULL    |       |
| sat_avg_all                       | float | YES  |     | NULL    |       |
| count_pq2                         | float | YES  |     | NULL    |       |
| pcip46                            | float | YES  |     | NULL    |       |
| inventor_pq3                      | float | YES  |     | NULL    |       |
| pcip25                            | float | YES  |     | NULL    |       |
| cip39cert2                        | float | YES  |     | NULL    |       |
| inventor                          | float | YES  |     | NULL    |       |
| cip40cert2                        | float | YES  |     | NULL    |       |
| cip50assoc                        | float | YES  |     | NULL    |       |
| sch_deg                           | float | YES  |     | NULL    |       |
| cip31assoc                        | float | YES  |     | NULL    |       |
| hbcu                              | float | YES  |     | NULL    |       |
| cip40cert1                        | float | YES  |     | NULL    |       |
| cip44bachl                        | float | YES  |     | NULL    |       |
| cip13assoc                        | float | YES  |     | NULL    |       |
| cip05cert1                        | float | YES  |     | NULL    |       |
| actwr25                           | float | YES  |     | NULL    |       |
| cip51cert2                        | float | YES  |     | NULL    |       |
| cip10cert2                        | float | YES  |     | NULL    |       |
| cip13cert1                        | float | YES  |     | NULL    |       |
| pcip04                            | float | YES  |     | NULL    |       |
| aanapii                           | float | YES  |     | NULL    |       |
| cip30assoc                        | float | YES  |     | NULL    |       |
| cip04cert4                        | float | YES  |     | NULL    |       |
| cip49cert4                        | float | YES  |     | NULL    |       |
| par_top1pc                        | float | YES  |     | NULL    |       |
| top5cit                           | float | YES  |     | NULL    |       |
| cip15bachl                        | float | YES  |     | NULL    |       |
| cip04bachl                        | float | YES  |     | NULL    |       |
| cip50cert1                        | float | YES  |     | NULL    |       |
| par_toppt1pc                      | float | YES  |     | NULL    |       |
| opeid                             | float | YES  |     | NULL    |       |
| cip43cert4                        | float | YES  |     | NULL    |       |
| adm_rate_all                      | float | YES  |     | NULL    |       |
| actwr75                           | float | YES  |     | NULL    |       |
| cip42assoc                        | float | YES  |     | NULL    |       |
| cip43assoc                        | float | YES  |     | NULL    |       |
| pcip30                            | float | YES  |     | NULL    |       |
| cip03cert1                        | float | YES  |     | NULL    |       |
| cip15cert4                        | float | YES  |     | NULL    |       |
| enrl_orig_yr2_rt                  | float | YES  |     | NULL    |       |
| count_pq1                         | float | YES  |     | NULL    |       |
| pcip29                            | float | YES  |     | NULL    |       |
| longitude                         | float | YES  |     | NULL    |       |
| latitude                          | float | YES  |     | NULL    |       |
| comp_orig_yr3_rt                  | float | YES  |     | NULL    |       |
| cip43cert2                        | float | YES  |     | NULL    |       |
| cip24cert2                        | float | YES  |     | NULL    |       |
| cip52cert1                        | float | YES  |     | NULL    |       |
| cip22bachl                        | float | YES  |     | NULL    |       |
+-----------------------------------+-------+------+-----+---------+-------+'''
def parseByLine(s: str):
    result = list()
    for line in s.split('\n')[2:]:
        if (' ' in line):
            col = line.split()[1]
            result.append(col)
    return result
def collectColumnsByOrder(s: str):
    elems = s.split(',')
    result = list()
    for elem in elems:
        result.append(elem.split()[0])
    result[0] = 'id'
    result = result[:-1]
    return result
# print(collectColumnsByOrder(s))
#print(parseByLine(s2))




'''ALTER TABLE schools ADD (cip25cert2 FLOAT, cip23cert4 FLOAT, cip42bachl FLOAT, weighted_debt_absolute FLOAT, satvr25 FLOAT, social_diversity_score FLOAT, actcm75 FLOAT, pcip45 FLOAT, satwr75 FLOAT, cip46cert4 FLOAT, cip38cert1 FLOAT, npt41_pub_absolute FLOAT, cip01assoc FLOAT, ec_parent_ses_college FLOAT, cip50bachl FLOAT, npt42_pub_relative FLOAT, cip38assoc FLOAT, cip52cert4 FLOAT, cip41assoc FLOAT, pell_ever FLOAT, cip46bachl FLOAT, pcip19 FLOAT, cip49assoc FLOAT, numbranch FLOAT, cip49cert1 FLOAT, cip14cert2 FLOAT, cip45bachl FLOAT, satwr25 FLOAT, control FLOAT, insturl TEXT(100), cip05assoc FLOAT, cip13cert2 FLOAT, cip22cert2 FLOAT, plus_debt_inst_comp_md FLOAT, ugds_2mor FLOAT, pcip12 FLOAT, cip10cert4 FLOAT, agege24 FLOAT, accredagency TEXT(100), npt43_pub_absolute FLOAT, main FLOAT, npt41_priv_absolute FLOAT, cip10bachl FLOAT, city TEXT(100), cip45cert2 FLOAT, plus_debt_all_nocomp_md FLOAT, distanceonly FLOAT, pcip22 FLOAT, debt_mdn FLOAT, cip46cert2 FLOAT, npt41_pub_relative FLOAT, womenonly FLOAT, cip44assoc FLOAT, tribal FLOAT, par_q5 FLOAT, cip26cert1 FLOAT, cip24cert4 FLOAT, cip47cert2 FLOAT, pcip03 FLOAT, pcip43 FLOAT, cip31cert2 FLOAT, actcmmid FLOAT, outcomes_absolute FLOAT, economic_inclusion_score FLOAT, cip49cert2 FLOAT, cip13cert4 FLOAT, cip11cert1 FLOAT, mr_ktop1_pq1 FLOAT, cip11assoc FLOAT, cip41cert1 FLOAT, inventor_pq5 FLOAT, acten75 FLOAT, cip26assoc FLOAT, hcm2 FLOAT, cip03cert4 FLOAT, cip41cert2 FLOAT, cip48cert1 FLOAT, cip44cert4 FLOAT, success_relative FLOAT, pcip42 FLOAT, count FLOAT, cip51bachl FLOAT, pcip47 FLOAT, success_absolute FLOAT, cip40bachl FLOAT, cip01bachl FLOAT, pcip41 FLOAT, social_diversity_score_relative FLOAT, cip40assoc FLOAT, ug FLOAT, cip29assoc FLOAT, total_patents FLOAT, total_cites FLOAT, cip01cert4 FLOAT, cip03bachl FLOAT, pcip23 FLOAT, pcip38 FLOAT, npt43_pub_relative FLOAT, cip23cert1 FLOAT, cip40cert4 FLOAT, cip16cert4 FLOAT, cip44cert1 FLOAT, pcip50 FLOAT, pcip14 FLOAT, pcip39 FLOAT, pcip05 FLOAT, cip30bachl FLOAT, cip14assoc FLOAT, cip19cert2 FLOAT, cip52bachl FLOAT, hsi FLOAT, cip23assoc FLOAT, cip09cert1 FLOAT, economic_inclusion_score_absolute FLOAT, cip11cert4 FLOAT, actmt25 FLOAT, cip39cert1 FLOAT, cip09cert2 FLOAT, par_q2 FLOAT, ugds_nra FLOAT, npt42_pub_absolute FLOAT, cip19cert1 FLOAT, cip11cert2 FLOAT, par_q1 FLOAT, ugds_asian FLOAT, cip50cert2 FLOAT, unitid FLOAT, satmt25 FLOAT, npt45_pub_absolute FLOAT, cip13bachl FLOAT, enrl_orig_yr3_rt FLOAT, par_top5pc FLOAT, ec_high_parent_ses_college FLOAT, pcip16 FLOAT, cip12assoc FLOAT, pcip49 FLOAT, cip51cert4 FLOAT, cip26cert4 FLOAT, cip42cert1 FLOAT, cip23cert2 FLOAT, weighted_debt_relative FLOAT, locale FLOAT, nanti FLOAT, satmt75 FLOAT, count_pq5 FLOAT, inventor_pq2 FLOAT, par_q4 FLOAT, cip30cert4 FLOAT, satmtmid FLOAT, cip29cert4 FLOAT, cip29cert1 FLOAT, sat_avg FLOAT, preddeg FLOAT, cip47cert1 FLOAT, school_x FLOAT, cip19assoc FLOAT, pcip27 FLOAT, cip30cert2 FLOAT, cip48bachl FLOAT, cip50cert4 FLOAT, relaffil FLOAT, cip27bachl FLOAT, satwrmid FLOAT, pcip01 FLOAT, cip01cert1 FLOAT, parent_plus_loan_debt_absolute FLOAT, cip16cert2 FLOAT, cip39cert4 FLOAT, cip25cert4 FLOAT, cip48assoc FLOAT, opeid6 FLOAT, cip49bachl FLOAT, parent_plus_loan_debt_relative FLOAT, satvr75 FLOAT, cip10assoc FLOAT, cip41bachl FLOAT, weighted_income_absolute FLOAT, acten25 FLOAT, cip54cert2 FLOAT, npt45_priv_relative FLOAT, cip38bachl FLOAT, cip16assoc FLOAT, cip52assoc FLOAT, cip27cert4 FLOAT, cip54bachl FLOAT, cip39bachl FLOAT, cip25assoc FLOAT, cip19bachl FLOAT, cip10cert1 FLOAT, cip03cert2 FLOAT, cip27cert2 FLOAT, satvrmid FLOAT, cip12cert2 FLOAT, cip31cert4 FLOAT, cip22cert4 FLOAT, pcip31 FLOAT, cip48cert2 FLOAT, support_relative FLOAT, cip12bachl FLOAT, ccugprof FLOAT, dependent FLOAT, cip31cert1 FLOAT, count_pq4 FLOAT, support_absolute FLOAT, npt42_priv_relative FLOAT, cip54cert1 FLOAT, cip29cert2 FLOAT, first_gen FLOAT, ugds_white FLOAT, cip09cert4 FLOAT, npt41_priv_relative FLOAT, cip41cert4 FLOAT, k_married FLOAT, npt45_pub_relative FLOAT, inventor_pq4 FLOAT, pcip10 FLOAT, actmtmid FLOAT, cip46assoc FLOAT, cip14bachl FLOAT, outcomes_relative FLOAT, cip39assoc FLOAT, cip09bachl FLOAT, cip43bachl FLOAT, cip27cert1 FLOAT, cip48cert4 FLOAT, pcip26 FLOAT, cip05cert2 FLOAT, actwrmid FLOAT, cip42cert4 FLOAT, cip12cert4 FLOAT, mr_kq5_pq1 FLOAT, zip TEXT(100), cip27assoc FLOAT, cip26cert2 FLOAT, annhi FLOAT, cip30cert1 FLOAT, weighted_income_relative FLOAT, count_pq3 FLOAT, cip38cert2 FLOAT, cip29bachl FLOAT, cip09assoc FLOAT, cip22cert1 FLOAT, cip16bachl FLOAT, cip25cert1 FLOAT, cip45assoc FLOAT, social_diversity_score_absolute FLOAT, stabbr TEXT(100), menonly FLOAT, par_q3 FLOAT, economic_inclusion_score_relative FLOAT, npt45_priv_absolute FLOAT, cip14cert1 FLOAT, locale2 FLOAT, cip47assoc FLOAT, npcurl TEXT(100), pcip48 FLOAT, cip22assoc FLOAT, cip51assoc FLOAT, cip15assoc FLOAT, pcip09 FLOAT, cip43cert1 FLOAT, cip01cert2 FLOAT, cip45cert4 FLOAT, pcip11 FLOAT, actmt75 FLOAT, cip04assoc FLOAT, npt44_priv_relative FLOAT, cip12cert1 FLOAT, cip24bachl FLOAT, cip54assoc FLOAT, pcip13 FLOAT, cip24assoc FLOAT, cip45cert1 FLOAT, cip42cert2 FLOAT, highdeg FLOAT, cip23bachl FLOAT, cip31bachl FLOAT, cip04cert1 FLOAT, cip47cert4 FLOAT, actcm25 FLOAT, cip46cert1 FLOAT, pcip51 FLOAT, cip47bachl FLOAT, cip44cert2 FLOAT, pcip24 FLOAT, inventor_pq1 FLOAT, par_top10pc FLOAT, pcip44 FLOAT, cip14cert4 FLOAT, actenmid FLOAT, cip38cert4 FLOAT, pcip52 FLOAT, cip26bachl FLOAT, cip54cert4 FLOAT, npt44_priv_absolute FLOAT, cip03assoc FLOAT, npt44_pub_relative FLOAT, pcip54 FLOAT, superopeid FLOAT, cip51cert1 FLOAT, pcip40 FLOAT, pbi FLOAT, cip05bachl FLOAT, cip05cert4 FLOAT, cip15cert1 FLOAT, pcip15 FLOAT, cip24cert1 FLOAT, cip52cert2 FLOAT, cip04cert2 FLOAT, cip11bachl FLOAT, cip16cert1 FLOAT, cip19cert4 FLOAT, cip15cert2 FLOAT, cip25bachl FLOAT, sat_avg_all FLOAT, count_pq2 FLOAT, pcip46 FLOAT, inventor_pq3 FLOAT, pcip25 FLOAT, cip39cert2 FLOAT, inventor FLOAT, cip40cert2 FLOAT, cip50assoc FLOAT, npt43_priv_relative FLOAT, sch_deg FLOAT, cip31assoc FLOAT, npt44_pub_absolute FLOAT, hbcu FLOAT, cip40cert1 FLOAT, cip44bachl FLOAT, cip13assoc FLOAT, cip05cert1 FLOAT, actwr25 FLOAT, npt43_priv_absolute FLOAT, cip51cert2 FLOAT, cip10cert2 FLOAT, cip13cert1 FLOAT, pcip04 FLOAT, aanapii FLOAT, cip30assoc FLOAT, cip04cert4 FLOAT, cip49cert4 FLOAT, par_top1pc FLOAT, top5cit FLOAT, cip15bachl FLOAT, cip04bachl FLOAT, cip50cert1 FLOAT, par_toppt1pc FLOAT, opeid FLOAT, npt42_priv_absolute FLOAT, cip43cert4 FLOAT, adm_rate_all FLOAT, actwr75 FLOAT, cip42assoc FLOAT, cip43assoc FLOAT, pcip30 FLOAT, cip03cert1 FLOAT, cip15cert4 FLOAT, enrl_orig_yr2_rt FLOAT, count_pq1 FLOAT, pcip29 FLOAT, longitude FLOAT, latitude FLOAT, comp_orig_yr3_rt FLOAT, cip43cert2 FLOAT, cip24cert2 FLOAT, cip52cert1 FLOAT, cip22bachl FLOAT, )'''
'''ALTER TABLE schools ADD (value_1 FLOAT, value_2 FLOAT, value_3 FLOAT, value_4 FLOAT, value_5 FLOAT);'''