import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const baseUrl='http://127.0.0.1:5000/api'
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {
  }

  getQuery1Division():Observable<any>{
     return this.http.get<any>(`${baseUrl}/query1/division`)
  }

  getQuery2Online():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query2/online`)
  }
  getQuery2Cash():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query2/cash`)
  }

  getQuery3():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query3`)
  }

  getQuery4():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query4`)
  }

  getQuery5():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query5`)
  }

  getQuery6():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query6`)
  }

  getQuery7(days?:any):Observable<any>{
    const headers={'content-type':'application/json'}
    const body=JSON.stringify({'days':days});
    return this.http.post(`${baseUrl}/query7`,body,{'headers':headers})
  }

  getQuery8():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query8`)
  }

  getQuery9():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query9`)
  }
  getQuery10():Observable<any>{
    return this.http.get<any>(`${baseUrl}/query10`)
  }

  getAnalysis1o1():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis1/DivisionWiseYearly`)
  }

  getAnalysis1o2():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis1/WeekOfEachMonthDhaka2022`)
  }

  getAnalysis2o1():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis2/Top10Customer20212020`)
  }

  getAnalysis2o2():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis2/UpazilaSalesCovid`)
  }

  getAnalysis3o1():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis3/YearlyTotalSalesUnit`)
  }

  getAnalysis3o2():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis3/SalesCT20222020`)
  }

  getAnalysis4o1():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis4/QuantityStoreSizeDecember`)
  }

  getAnalysis4o2():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis4/AverageQuantitySoldQ4Dhaka`)
  }

  getAnalysis5o1():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis5/MonthStockHighestYears`)
  }

  getAnalysis5o2():Observable<any>{
    return this.http.get<any>(`${baseUrl}/Analysis5/UnitLowestStock2022020`)
  }


}
