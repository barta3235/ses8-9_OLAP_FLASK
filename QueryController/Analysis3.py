from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Analysis3_1:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute3_1(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        Three1_stmt = """
                     SELECT i.unit,t.year, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim i ON i.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     GROUP BY ROLLUP(i.unit,t.year)
                     ORDER BY t.year,SUM(ft.total_price) ASC
                  """
        cur.execute(Three1_stmt)
        record_three1 = cur.fetchall()
        df_record_three1 = pd.DataFrame(record_three1, columns=['Unit_Name', 'Year', 'Total_Sales'])
        df_record_three1 = df_record_three1.dropna()
        df_record_three1_ext = df_record_three1.groupby('Year').head(1)
        df_record_three1_ext['Year'] = df_record_three1_ext['Year'].astype(int)
        return df_record_three1_ext.to_dict(orient='records')



class Analysis3_2:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute3_2(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        Three2_stmt = """
                     SELECT i.unit,t.year,t.month, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim i ON i.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE i.unit='ct' AND t.year IN ('2020','2022') 
                     GROUP BY ROLLUP(i.unit,t.year,t.month)
                     ORDER BY t.year,t.month, SUM(ft.total_price) DESC
                  """
        cur.execute(Three2_stmt)
        record_three2 = cur.fetchall()
        df_record_three2 = pd.DataFrame(record_three2, columns=['Unit_Name', 'Year', 'Month', 'Total_Sales'])
        df_record_three2 = df_record_three2.dropna()
        return df_record_three2.to_dict(orient='records')




