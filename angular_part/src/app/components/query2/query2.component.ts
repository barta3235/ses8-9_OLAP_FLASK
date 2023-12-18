import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {
  data_all:any[]=[]
  TT:any[]=[]
  TS:any[]=[]



  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Total Sales given in BDT',
      data: this.TS
    }
  ];
  chartLabels: string[] = this.TT;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#ffeaff',
        displayColors: false, // removes unnecessary legend
        padding: 10,


        // ⤵️ title
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };



  constructor(private query2service:MyServiceService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.getOnlineFromQuery2()
    this.getCashFromQuery2()
  }

  getOnlineFromQuery2(): void {
    this.query2service.getQuery2Online().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.TT.push(d.Transaction_Type)
            this.TS.push(d.Total_Sales)
          }
          this.data_all = this.data_all.concat(data);
        }
    );
  }

  getCashFromQuery2(): void {
    this.query2service.getQuery2Cash().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.TT.push(d.Transaction_Type)
            this.TS.push(d.Total_Sales)
          }
          this.data_all = this.data_all.concat(data);
        }
    );
  }
}
