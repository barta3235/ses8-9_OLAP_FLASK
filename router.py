from QueryServices.query2service import Query2API_cash
from QueryServices.query2service import Query2API_mobile
from QueryServices.query1service import Query1API_div
from QueryServices.query1service import Query1API_dis
from QueryServices.query3service import Query3API
from QueryServices.query4service import Query4API
from QueryServices.query5service import Query5API
from QueryServices.query6service import Query6API
from QueryServices.query7service import Query7API
from QueryServices.query8service import Query8API
from QueryServices.query9service import Query9API
from QueryServices.query10service import Query10API
from flask import Blueprint

query1_api1_div=Blueprint('query1_api1_div',__name__)
query1_api1_dis=Blueprint('query1_api1_dis',__name__)
query2_api2_cash=Blueprint('query2_api2_cash',__name__)
query2_api2_mobile=Blueprint('query2_api2_mobile',__name__)
query3_api3=Blueprint('query3_api3',__name__)
query4_api4=Blueprint('query4_api4',__name__)
query5_api5=Blueprint('query5_api5',__name__)
query6_api6=Blueprint('query6_api6',__name__)
query7_api7=Blueprint('query7_api7',__name__)
query8_api8=Blueprint('query8_api8',__name__)
query9_api9=Blueprint('query9_api9',__name__)
query10_api10=Blueprint('query10_api10',__name__)



query1_api1_div.add_url_rule('/query1/division',view_func=Query1API_div.as_view("Get Division-wise Total Sales"))
query1_api1_dis.add_url_rule('/query1/district',view_func=Query1API_dis.as_view("Get District-wise Total Sales"))
query2_api2_cash.add_url_rule('/query2/cash',view_func=Query2API_cash.as_view("Get transaction(cash) wise total sales"))
query2_api2_mobile.add_url_rule('/query2/online',view_func=Query2API_mobile.as_view("Get transaction(online) wise total sales"))
query3_api3.add_url_rule('/query3',view_func=Query3API.as_view("Get Total sales in Barisal"))
query4_api4.add_url_rule('/query4',view_func=Query4API.as_view("Get Total sales in 2015"))
query5_api5.add_url_rule('/query5',view_func=Query5API.as_view("Get Total sales of Barisal in 2015"))
query6_api6.add_url_rule('/query6',view_func=Query6API.as_view("Get the top three products that are most often purchased each store"))
query7_api7.add_url_rule('/query7',view_func=Query7API.as_view("Get the products that have been sold since X days"))
query8_api8.add_url_rule('/query8',view_func=Query8API.as_view("Get the season(quarter)that is the worst for each product item"))
query9_api9.add_url_rule('/query9',view_func=Query9API.as_view("Get the total sales of items geographically (division-wise)"))
query10_api10.add_url_rule('/query10',view_func=Query10API.as_view("Get the average sales of products sales per store monthly"))
