from DBconnection.dbconf import PostgresConnection
import psycopg2
import pandas as pd
import psycopg2.extras
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

class Query7:
    def __init__(self):
        self.con=PostgresConnection().getConnection()
        print("Constructor Called")

    def execute7(self,dd):
        con = PostgresConnection().getConnection()
        cur = con.cursor()

        pstc3 = """
                     SELECT trans.trans_type, item.item_name  
                     FROM ecomdb_star_schema.fact_table ft
                     JOIN ecomdb_star_schema.trans_dim trans ON trans.payment_key=ft.payment_key
                     JOIN ecomdb_star_schema.item_dim item ON item.item_key =ft.item_key
                     JOIN ecomdb_star_schema.time_dim d ON d.time_key =ft.time_key
                     WHERE d.date>(CURRENT_DATE::date - '
                  """
        pstc4 = str(
            dd) + " days'::interval) AND (trans.trans_type='card' OR trans.trans_type='mobile') GROUP BY ROLLUP(trans.trans_type,item.item_name)"

        pstc_stmt1 = pstc3 + pstc4
        cur.execute(pstc_stmt1)
        records_10 = cur.fetchall()
        df_pstc_stmt1 = pd.DataFrame(records_10, columns=['Trans Type', 'Item Name'])
        df_pstc_stmt1 = df_pstc_stmt1.dropna()
        return df_pstc_stmt1.to_dict(orient='records')

if __name__== '__main__':
    query7=Query7()   # object instantiated
    data7=query7.execute7()
    print(data7)



