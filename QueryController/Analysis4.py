from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Analysis4_1:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute4_1(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        four1_stmt = """
                     SELECT s.store_size,t.year, SUM(ft.quantity)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.store_dim s ON s.store_key =ft.store_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE t.month='12' 
                     GROUP BY CUBE(s.store_size,t.year)
                     ORDER BY s.store_size,t.year
                  """
        cur.execute(four1_stmt)
        record_four1 = cur.fetchall()
        df_record_four1 = pd.DataFrame(record_four1, columns=['Store_Size', 'Year', 'Quantity_Sold'])
        df_record_four1 = df_record_four1.dropna()
        return  df_record_four1.to_dict(orient='records')



class Analysis4_2:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute4_2(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        four2_stmt = """
                     SELECT t.year,t.quater,s.district, AVG(ft.quantity)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.store_dim s ON s.store_key =ft.store_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE t.quater='Q4' AND s.district='Dhaka' 
                     GROUP BY CUBE(t.year,t.quater,s.district)
                     ORDER BY t.year
                  """
        cur.execute(four2_stmt)
        record_four2 = cur.fetchall()
        df_record_four2 = pd.DataFrame(record_four2, columns=['Year', 'Quarter', 'District', 'Average_Quantity_Sold'])
        df_record_four2 = df_record_four2.dropna()
        df_record_four2_ext = pd.DataFrame(df_record_four2, columns=['Year', 'Average_Quantity_Sold'])
        df_record_four2_ext['Year'] = df_record_four2_ext['Year'].astype(int)
        df_record_four2_ext['Average_Quantity_Sold'] = df_record_four2_ext['Average_Quantity_Sold'].apply(float)
        df_record_four2_ext['Average_Quantity_Sold'] = df_record_four2_ext['Average_Quantity_Sold'].round(2)
        return df_record_four2_ext.to_dict(orient='records')




