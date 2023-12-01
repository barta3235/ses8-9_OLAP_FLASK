from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query5:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute5(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        tsdhk2015_stmt = """
                      SELECT t.year, s.division, SUM(ft.total_price)
                      FROM ecomdb_star_schema.fact_table ft
                      JOIN ecomdb_star_schema.time_dim t on ft.time_key=t.time_key
                      JOIN ecomdb_star_schema.store_dim s on ft.store_key=s.store_key
                      WHERE t.year='2015' AND s.division='Barishal'
                      GROUP BY ROLLUP(t.year,s.division)
                    """
        cur.execute(tsdhk2015_stmt)
        records_7 = cur.fetchall()
        df_tsdhk2015_stmt = pd.DataFrame(records_7, columns=['Year', 'Division', 'Total Sales'])
        df_tsdhk2015_stmt=df_tsdhk2015_stmt.dropna()
        return df_tsdhk2015_stmt.to_dict(orient='records')

if __name__== '__main__':
    query5=Query5()   # object instantiated
    data5=query5.execute5()
    print(data5)



