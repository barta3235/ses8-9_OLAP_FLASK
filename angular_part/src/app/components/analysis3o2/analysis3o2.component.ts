import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analysis3o2',
  templateUrl: './analysis3o2.component.html',
  styleUrls: ['./analysis3o2.component.css']
})
export class Analysis3o2Component implements OnInit {
  data_all:any[]=[]
  U_N:any[]=[]
  Y:any[]=[]
  M:any[]=[]
  T_S:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  lineChart:any

  constructor(private analysis3o2service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis3o2();
  }

  getFromAnalysis3o2(): void {
    this.analysis3o2service.getAnalysis3o2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.U_N.push(d.Unit_Name)
          this.Y.push(d.Year)
          this.M.push(d.Month)
          this.T_S.push(d.Total_Sales)
        }
        this.M = Array.from(new Set(this.M));
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
      this.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.M, // X-axis labels (Month)
          datasets: this.createDatasets(), // Create datasets based on unique years
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
        },
      });
    } else {
      console.error('Error');
    }
  }

  createDatasets() {
    const uniqueYears = Array.from(new Set(this.Y));

    return uniqueYears.map((year, index) => {
      return {
        data: this.T_S.filter((_, i) => this.Y[i] === year), // Y-axis values (Total Sales)
        borderColor: this.getDistinctColor(index), // Color of the line
        borderWidth: 2, // Width of the line
        label: `Year ${year}`, // Legend label
        fill: false, // No fill for a line plot
      };
    });
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
      const searchStr = `${item.Unit_Name} ${item.Year} ${item.Month} ${item.Total_Sales}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
