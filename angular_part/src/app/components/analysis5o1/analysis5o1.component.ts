import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { Chart } from 'chart.js';


@Component({
  selector: 'app-analysis5o1',
  templateUrl: './analysis5o1.component.html',
  styleUrls: ['./analysis5o1.component.css']
})
export class Analysis5o1Component implements OnInit {
  data_all:any[]=[]
  Y:any[]=[]
  M:any[]=[]
  S_Q:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  barChart: any;


  constructor(private analysis5o1service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis5o1();
  }

  getFromAnalysis5o1(): void {
    this.analysis5o1service.getAnalysis5o1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.Y.push(d.Year)
          this.M.push(d.Month)
          this.S_Q.push(d.Stock_Quantity)
        }
        this.Y = Array.from(new Set(this.Y));
        this.data_all = data;
        this.setPage(1);
        this.drawBarChart()
      }
    );
  }

  drawBarChart() {
    const canvas = document.getElementById('barChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.Y, // X-axis labels (Year)
          datasets: this.M.map((month, index) => ({
            label: month,
            data: this.S_Q.map((stockQuantity, innerIndex) => (this.M[innerIndex] === month ? stockQuantity : null)),
            backgroundColor: this.getDistinctColor(index),
          })),
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Year', // Label for X-axis
              },
            },
            y: {
              title: {
                display: true,
                text: 'Stock Quantity', // Label for Y-axis
              },
            },
          },
        },
      });
    } else {
      console.error('Error.');
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




  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Year} ${item.Month} ${item.Stock_Quantity}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
