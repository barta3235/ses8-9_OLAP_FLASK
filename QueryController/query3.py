from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query3:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute3(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        bts_stmt = """
                   SELECT s.division, SUM(ft.total_price) AS total_price
                   FROM ecomdb_star_schema.fact_table ft
                   JOIN ecomdb_star_schema.store_dim s ON ft.store_key = s.store_key
                   JOIN ecomdb_star_schema.time_dim t ON ft.time_key = t.time_key
                   WHERE s.division = 'Barishal'
                   GROUP BY CUBE(s.division)
              """
        cur.execute(bts_stmt)
        records_5 = cur.fetchall()
        df_bts_stmt = pd.DataFrame(records_5, columns=['Division', 'Total Sales'])
        df_bts_stmt = df_bts_stmt.dropna().reset_index()
        return df_bts_stmt.to_dict(orient='records')

if __name__== '__main__':
    query3=Query3()   # object instantiated
    data3=query3.execute3()
    print(data3)



