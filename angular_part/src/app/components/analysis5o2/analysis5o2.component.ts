import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { Chart } from 'chart.js';



@Component({
  selector: 'app-analysis5o2',
  templateUrl: './analysis5o2.component.html',
  styleUrls: ['./analysis5o2.component.css']
})
export class Analysis5o2Component implements OnInit {
  data_all:any[]=[]
  U:any[]=[]
  Y:any[]=[]
  S_Q:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  lineChart: any;

  constructor(private analysis5o2service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis5o2()
  }

  getFromAnalysis5o2(): void {
    this.analysis5o2service.getAnalysis5o2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.U.push(d.Unit)
          this.Y.push(d.Year)
          this.S_Q.push(d.Stock_Quantity)
        }
        this.U = Array.from(new Set(this.U));
        this.data_all = data;
        this.setPage(1);
        this.drawLineChart()
      }
    );
  }

  drawLineChart() {
    const canvas = document.getElementById('lineChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const uniqueYears = [...new Set(this.Y)]; // Get unique years

      this.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.U, // X-axis labels (Unit)
          datasets: uniqueYears.map((year, index) => ({
            label: year,
            data: this.S_Q.map((stockQuantity, innerIndex) => (this.Y[innerIndex] === year ? stockQuantity : null)),
            borderColor: this.getDistinctColor(index),
            fill: false,
          })),
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Unit',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Stock Quantity',
              },
            },
          },
        },
      });
    } else {
      console.error('Error');
    }
  }





  getDistinctColor(index: number): string {
    const baseColors = ['#FF5733', '#3399FF', '#33FF49', '#FF33E9', '#33FFE2', '#FFD433'];
    const colorIndex = index % baseColors.length;
    return baseColors[colorIndex];
  }


  get pages() {
    const pageCount = Math.ceil(this.data_all.length / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  get pagedData(){
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Unit} ${item.Year} ${item.Stock_Quantity}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
