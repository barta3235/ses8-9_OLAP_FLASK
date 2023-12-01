from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query10:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute10(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        asppm_stmt = """
                     SELECT s.store_key,t.month, AVG(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.store_dim s ON s.store_key =ft.store_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     GROUP BY ROLLUP(s.store_key,t.month)
                     ORDER BY(s.store_key,t.month)
                  """
        cur.execute(asppm_stmt)
        records_13 = cur.fetchall()
        df_asppm_stmt = pd.DataFrame(records_13, columns=['Store', 'Month', 'Average Sales'])
        df_asppm_stmt = df_asppm_stmt.dropna()
        df_asppm_stmt['Average Sales'] = df_asppm_stmt['Average Sales'].apply(float)
        df_asppm_stmt['Average Sales'] = df_asppm_stmt['Average Sales'].round(2)
        return df_asppm_stmt.to_dict(orient='records')

if __name__== '__main__':
    query10=Query10()   # object instantiated
    data10=query10.execute10()
    print(data10)



