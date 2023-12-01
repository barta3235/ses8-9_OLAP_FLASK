from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query9:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute9(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        tsigdw_stmt = """
                     SELECT item.item_name,d.division, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim item ON item.item_key =ft.item_key
                     JOIN ecomdb_star_schema.store_dim d ON d.store_key =ft.store_key
                     GROUP BY ROLLUP(item.item_name,d.division)
                     ORDER BY(item.item_name,d.division)
                  """
        cur.execute(tsigdw_stmt)
        records_12 = cur.fetchall()
        df_tsigdw_stmt = pd.DataFrame(records_12, columns=['Item Name', 'Division', 'Total Sales'])
        df_tsigdw_stmt = df_tsigdw_stmt.dropna()
        return df_tsigdw_stmt.to_dict(orient='records')

if __name__== '__main__':
    query9=Query9()   # object instantiated
    data9=query9.execute9()
    print(data9)



