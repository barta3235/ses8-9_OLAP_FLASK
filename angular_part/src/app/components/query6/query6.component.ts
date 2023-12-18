import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { ChartOptions, ChartDataset } from 'chart.js';



@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {
  data_all:any[]=[]
  S:any[]=[]
  IN:any[]=[]
  QS:any[]=[]


  constructor(private query6service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery6()
  }

  getFromQuery6(): void {
    this.query6service.getQuery6().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.S.push(d.Store)
            this.IN.push(d.Item_Name)
            this.QS.push(d.Quantity_Sold)
          }
         this.data_all = data;
        }
    );
  }
}



