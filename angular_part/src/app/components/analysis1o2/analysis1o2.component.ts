import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-analysis1o2',
  templateUrl: './analysis1o2.component.html',
  styleUrls: ['./analysis1o2.component.css']
})
export class Analysis1o2Component implements OnInit {
  data_all:any[]=[]
  M:any[]=[]
  W:any[]=[]
  T_S:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  stemChart: any;


  constructor(private analysis1o2service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis1o2()
  }

  getFromAnalysis1o2(): void {
    this.analysis1o2service.getAnalysis1o2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.M.push(d.Month)
          this.W.push(d.Week)
          this.T_S.push(d.Total_Sales)
        }
        this.data_all = data;
        this.setPage(1);
        this.drawStemChart();
      }
    );
  }

  drawStemChart() {
    const canvas = document.getElementById('stemChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.stemChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.M, // X-axis labels (Month)
          datasets: [{
            data: this.T_S, // Y-axis values (Total Sales)
            borderColor: 'blue', // Color of the line
            borderWidth: 2, // Width of the line
            pointBackgroundColor: 'red', // Color of the point
            pointRadius: 5, // Radius of the point
            pointHoverRadius: 8, // Radius of the point on hover
            label: 'Total Sales',
          }],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Total Sales',
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => `${context.parsed.y}\nWeek: ${this.W[context.dataIndex]}`,
              },
            },
          },
        },
      });
    } else {
      console.error('error.');
    }
  }







  get pages() {
    const pageCount = Math.ceil(this.data_all.length / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Month} ${item.Week} ${item.Total_Sales}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
