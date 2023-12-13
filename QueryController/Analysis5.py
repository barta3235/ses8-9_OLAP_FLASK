from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Analysis5_1:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute5_1(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        five1_stmt = """
                     SELECT t.year,t.month, SUM(i.stock_quantity)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim i ON i.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     GROUP BY ROLLUP(t.year,t.month)
                     ORDER BY t.year,SUM(i.stock_quantity) DESC
                  """
        cur.execute(five1_stmt)
        record_five1 = cur.fetchall()
        df_record_five1 = pd.DataFrame(record_five1, columns=['Year', 'Month', 'Stock_Quantity'])
        df_record_five1 = df_record_five1.dropna()
        df_record_five1['Year'] = df_record_five1['Year'].astype(int)
        df_record_five1['Month'] = df_record_five1['Month'].astype(int)
        df_record_five1_ext = df_record_five1.groupby('Year').head(1)
        return df_record_five1_ext.to_dict(orient='records')



class Analysis5_2:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute5_2(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        five2_stmt = """
                     SELECT i.unit,t.year, SUM(i.stock_quantity)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim i ON i.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE t.year IN ('2020','2022')
                     GROUP BY ROLLUP(i.unit,t.year)
                     ORDER BY i.unit,t.year,SUM(i.stock_quantity) ASC
                  """
        cur.execute(five2_stmt)
        record_five2 = cur.fetchall()
        df_record_five2 = pd.DataFrame(record_five2, columns=['Unit', 'Year', 'Stock_Quantity'])
        df_record_five2 = df_record_five2.dropna()
        return df_record_five2.to_dict(orient='records')




