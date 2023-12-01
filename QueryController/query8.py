from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query8:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute8(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        qwfpi_stmt = """
                     SELECT t.quater, item.item_name, SUM(ft.total_price)
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.item_dim item ON item.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim t ON t.time_key =ft.time_key
                     GROUP BY ROLLUP(t.quater, item.item_name)
                     ORDER BY item.item_name, SUM(ft.total_price)
                  """
        cur.execute(qwfpi_stmt)
        records_11 = cur.fetchall()
        df_qwfpi_stmt = pd.DataFrame(records_11, columns=['Quarter', 'Item Name', 'Total Sales'])
        df_qwfpi_stmt = df_qwfpi_stmt.dropna()
        df_qwfpi_stmt_1 = df_qwfpi_stmt.groupby('Item Name').head(1)
        return df_qwfpi_stmt_1.to_dict(orient='records')

if __name__== '__main__':
    query8=Query8()   # object instantiated
    data8=query8.execute8()
    print(data8)



