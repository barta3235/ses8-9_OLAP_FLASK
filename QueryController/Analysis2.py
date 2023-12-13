from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Analysis2_1:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute2_1(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        two1_stmt = """
                     SELECT c.customer_key,t.year, MAX(ft.quantity)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.customer_dim c ON c.customer_key =ft.customer_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE t.year IN ('2021','2020')
                     GROUP BY CUBE(c.customer_key,t.year)
                     ORDER BY MAX(ft.quantity) DESC
                  """
        cur.execute(two1_stmt)
        record_two1 = cur.fetchall()
        df_record_two1 = pd.DataFrame(record_two1, columns=['Customer', 'Year', 'Quantity'])
        df_record_two1 = df_record_two1.dropna()
        df_record_two1_10 = df_record_two1.head(10)
        return df_record_two1_10.to_dict(orient='records')



class Analysis2_2:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute2_2(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        two2_stmt = """
                     SELECT c.upazila,t.year, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.customer_dim c ON c.customer_key =ft.customer_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     WHERE t.year IN ('2022','2020')
                     GROUP BY ROLLUP(c.upazila,t.year)
                  """
        cur.execute(two2_stmt)
        record_two2 = cur.fetchall()
        df_record_two2 = pd.DataFrame(record_two2, columns=['Upazila', 'Year', 'Total_Sales'])
        df_record_two2 = df_record_two2.dropna()
        return df_record_two2.to_dict(orient='records')




