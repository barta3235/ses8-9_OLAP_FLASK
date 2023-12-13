from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Analysis1_1:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1_1(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        one1_stmt = """
                     SELECT s.division,t.year, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.store_dim s ON s.store_key =ft.store_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     GROUP BY ROLLUP(s.division,t.year)
                     ORDER BY(s.division,t.year)
                  """
        cur.execute(one1_stmt)
        record_one1 = cur.fetchall()
        df_record_one1 = pd.DataFrame(record_one1, columns=['Division', 'Year', 'Total_Sales'])
        df_record_one1 = df_record_one1.dropna()
        df_record_one1['Year'] = df_record_one1['Year'].astype(int)
        return df_record_one1.to_dict(orient='records')



class Analysis1_2:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute1_2(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        one2_stmt = """
                     SELECT t.month,t.week, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.store_dim s ON s.store_key =ft.store_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     where t.year= '2022' AND s.division='Dhaka'
                     GROUP BY ROLLUP(t.month,t.week)
                     ORDER BY t.month,SUM(ft.total_price) DESC
                  """
        cur.execute(one2_stmt)
        record_one2 = cur.fetchall()
        df_record_one2 = pd.DataFrame(record_one2, columns=['Month', 'Week', 'Total_Sales'])
        df_record_one2 = df_record_one2.dropna()
        df_record_one2_temp = df_record_one2.groupby('Month').head(1)
        return df_record_one2_temp.to_dict(orient='records')




