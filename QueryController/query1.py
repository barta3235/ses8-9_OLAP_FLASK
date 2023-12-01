from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query1_div:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1_div(self):
        con=self.con
        cur = con.cursor()
        select_stmt = """
                      SELECT s.division, SUM(t.total_price)
                      FROM ecomdb_star_schema.fact_table t
                      JOIN ecomdb_star_schema.store_dim s on t.store_key=s.store_key
                      GROUP BY CUBE(s.division)
                      ORDER BY s.division
                    """
        cur.execute(select_stmt)
        records = cur.fetchall()
        df_q1_1 = pd.DataFrame(records, columns=['Division', 'Total Sales'])
        df_q1_1=df_q1_1.dropna()
        return df_q1_1.to_dict(orient='records')



class Query1_dis:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1_dis(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        dw_stmt = """
                      SELECT s.district, SUM(t.total_price)
                      FROM ecomdb_star_schema.fact_table t
                      JOIN ecomdb_star_schema.store_dim s on t.store_key=s.store_key
                      GROUP BY CUBE(s.district)
                      ORDER BY SUM(t.total_price) DESC
                    """
        cur.execute(dw_stmt)
        records_1 = cur.fetchall()
        dwts_df = pd.DataFrame(records_1, columns=['District', 'Total Sales'])
        dwts_df= dwts_df.dropna()
        return  dwts_df.to_dict(orient='records')



if __name__== '__main__':
    query1_div=Query1_div()   # object instantiated
    data1_div=query1_div.execute1_div()
    print(data1_div)

    query1_dis = Query1_dis()  # object instantiated
    data1_dis = query1_dis.execute1_dis()
    print(data1_div)



