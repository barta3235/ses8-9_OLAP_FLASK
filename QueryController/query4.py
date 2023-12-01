from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query4:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute4(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        ts2015_stmt = """
                      SELECT t.year, SUM(ft.total_price)
                      FROM ecomdb_star_schema.fact_table ft
                      JOIN ecomdb_star_schema.time_dim t on ft.time_key=t.time_key
                      WHERE t.year='2015'
                      GROUP BY CUBE(t.year)
                    """
        cur.execute(ts2015_stmt)
        records_6 = cur.fetchall()
        df_ts2015_stmt = pd.DataFrame(records_6, columns=['Year', 'Total Sales'])
        df_ts2015_stmt = df_ts2015_stmt.dropna()
        return df_ts2015_stmt.to_dict(orient='records')

if __name__== '__main__':
    query4=Query4()   # object instantiated
    data4=query4.execute4()
    print(data4)



