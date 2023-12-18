import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset,ChartOptions} from "chart.js";
import { ScriptableAndScriptableOptions } from 'chart.js';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  data_all:any[]=[];
  Division:any[]=[];
  Total_Sales:any[]=[];

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Sales in BDT',
      data: this.Total_Sales
    }
  ];
  chartLabels: string[] = this.Division;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Set the label color to white
        }
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#ffeaff',
        displayColors: true, // removes unnecessary legend
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


  constructor(private query1service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getDivisionQuery1()
  }


  getDivisionQuery1(): void {
    this.query1service.getQuery1Division().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.Division.push(d.Division)
            this.Total_Sales.push(d.Total_Sales)
          }
          this.data_all = data;
        }
    );
  }


}
