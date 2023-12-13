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
from QueryServices.Analysis1service import Analysis1API_1
from QueryServices.Analysis1service import Analysis1API_2
from QueryServices.Analysis2service import Analysis2API_1
from QueryServices.Analysis2service import Analysis2API_2
from QueryServices.Analysis3service import Analysis3API_1
from QueryServices.Analysis3service import Analysis3API_2
from QueryServices.Analysis4service import Analysis4API_1
from QueryServices.Analysis4service import Analysis4API_2
from QueryServices.Analysis5service import Analysis5API_1
from QueryServices.Analysis5service import Analysis5API_2

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

Analysis1_api1_1=Blueprint('Analysis1_api1_1',__name__)
Analysis1_api1_2=Blueprint('Analysis1_api1_2',__name__)

Analysis2_api1_1=Blueprint('Analysis2_api1_1',__name__)
Analysis2_api1_2=Blueprint('Analysis2_api1_2',__name__)

Analysis3_api1_1=Blueprint('Analysis3_api1_1',__name__)
Analysis3_api1_2=Blueprint('Analysis3_api1_2',__name__)

Analysis4_api1_1=Blueprint('Analysis4_api1_1',__name__)
Analysis4_api1_2=Blueprint('Analysis4_api1_2',__name__)

Analysis5_api1_1=Blueprint('Analysis5_api1_1',__name__)
Analysis5_api1_2=Blueprint('Analysis5_api1_2',__name__)


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


Analysis1_api1_1.add_url_rule('/Analysis1/DivisionWiseYearly',view_func=Analysis1API_1.as_view("Total Sales Division wise yearly"))
Analysis1_api1_2.add_url_rule('/Analysis1/WeekOfEachMonthDhaka2022',view_func=Analysis1API_2.as_view("Week of each month that has the highest sales for the year 2022 in Dhaka"))

Analysis2_api1_1.add_url_rule('/Analysis2/Top10Customer20212020',view_func=Analysis2API_1.as_view("Top 10 customers who bought the highest number of products for the year 2021 & 2020"))
Analysis2_api1_2.add_url_rule('/Analysis2/UpazilaSalesCovid',view_func=Analysis2API_2.as_view("Upazila's and their corresponding sales in the year 2022 and 2020 (Pre and post covid)"))

Analysis3_api1_1.add_url_rule('/Analysis3/YearlyTotalSalesUnit',view_func=Analysis3API_1.as_view("Yearly lowest total sales on the basis of unit (Unit that did the least sales yearly)"))
Analysis3_api1_2.add_url_rule('/Analysis3/SalesCT20222020',view_func=Analysis3API_2.as_view("Sales of unit named 'CT' of each month for the year 2020 and 2022"))

Analysis4_api1_1.add_url_rule('/Analysis4/QuantityStoreSizeDecember',view_func=Analysis4API_1.as_view("Total quantity sold based on store size (yearly) for the month of december"))
Analysis4_api1_2.add_url_rule('/Analysis4/AverageQuantitySoldQ4Dhaka',view_func=Analysis4API_2.as_view("Average quantity sold for the 4th quarter(Q4) in Dhaka"))

Analysis5_api1_1.add_url_rule('/Analysis5/MonthStockHighestYears',view_func=Analysis5API_1.as_view("Month of each year when stock quantity remains the highest"))
Analysis5_api1_2.add_url_rule('/Analysis5/UnitLowestStock2022020',view_func=Analysis5API_2.as_view("Unit that had the lowest stock quantity in the year 2020 and 2022"))
