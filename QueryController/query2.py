from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query2_cash:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute2_cash(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        twts_stmt = """
                      SELECT trans.trans_type, SUM(ft.total_price)
                      FROM ecomdb_star_schema.fact_table ft
                      JOIN ecomdb_star_schema.trans_dim trans on ft.payment_key=trans.payment_key
                      WHERE trans_type= 'cash'
                      GROUP BY ROLLUP(trans.trans_type)
                      ORDER BY trans.trans_type
                    """
        cur.execute(twts_stmt)
        records_4 = cur.fetchall()
        twts_stmt = pd.DataFrame(records_4, columns=['Transaction Type', 'Total Sales'])
        twts_stmt = twts_stmt.dropna()
        return twts_stmt.to_dict(orient='records')






class Query2_mobile:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute2_mobile(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        twts_stmt = """
                      SELECT trans.trans_type, SUM(ft.total_price)
                      FROM ecomdb_star_schema.fact_table ft
                      JOIN ecomdb_star_schema.trans_dim trans on ft.payment_key=trans.payment_key
                      WHERE trans_type= 'mobile'
                      GROUP BY ROLLUP(trans.trans_type)
                      ORDER BY trans.trans_type
                    """
        cur.execute(twts_stmt)
        records_4 = cur.fetchall()
        twts_stmt = pd.DataFrame(records_4, columns=['Transaction Type', 'Total Sales'])
        twts_stmt = twts_stmt.dropna()
        return twts_stmt.to_dict(orient='records')

if __name__== '__main__':
    query2_cash=Query2_cash()   # object instantiated
    data2_cash=query2_cash.execute2_cash()
    print(data2_cash)

    query2_mobile = Query2_mobile()  # object instantiated
    data2_mobile = query2_mobile.execute2_mobile()
    print(data2_mobile)



