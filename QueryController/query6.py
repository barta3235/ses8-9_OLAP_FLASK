from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query6:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute6(self):
        con = PostgresConnection().getConnection()
        cur = con.cursor()
        top3sif_stmt = """
                      SELECT s.store_key, i.item_name, SUM(ft.quantity)
                      FROM ecomdb_star_schema.fact_table ft
                      JOIN ecomdb_star_schema.store_dim s on ft.store_key=s.store_key
                      JOIN ecomdb_star_schema.item_dim i on ft.item_key=i.item_key
                      GROUP BY CUBE(s.store_key,i.item_name)
                      ORDER BY s.store_key, SUM(ft.quantity) DESC
                    """
        cur.execute(top3sif_stmt)
        records_8 = cur.fetchall()
        df_top3sif_stmt = pd.DataFrame(records_8, columns=['Store', 'Item Name', 'Quantity Sold'])
        df_top3sif_stmt = df_top3sif_stmt.dropna()
        df_top3sif_stmt_top3 = df_top3sif_stmt.groupby('Store').head(3)
        return df_top3sif_stmt_top3.to_dict(orient='records')

if __name__== '__main__':
    query6=Query6()   # object instantiated
    data6=query6.execute6()
    print(data6)



