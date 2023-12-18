import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";

@Component({
  selector: 'app-analysis3o1',
  templateUrl: './analysis3o1.component.html',
  styleUrls: ['./analysis3o1.component.css']
})
export class Analysis3o1Component implements OnInit {
  data_all:any[]=[]
  U_N:any[]=[]
  Y:any[]=[]
  T_S:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  barChart: any;

  constructor(private analysis3o1service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis3o1();
  }

  getFromAnalysis3o1(): void {
    this.analysis3o1service.getAnalysis3o1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.U_N.push(d.Unit_Name)
          this.Y.push(d.Year)
          this.T_S.push(d.Total_Sales)
        }
      this.Y = Array.from(new Set(this.Y));
        this.data_all = data;
        this.setPage(1);
        this.drawBarChart()
      }
    );
  }

  getDistinctColor(index: number): string {
    const baseColors = ['#FF5733', '#3399FF', '#33FF49', '#FF33E9', '#33FFE2', '#FFD433'];
    const colorIndex = index % baseColors.length;
    return baseColors[colorIndex];
  }

  drawBarChart() {
    const canvas = document.getElementById('barChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.Y,
          datasets: this.createDatasets(),
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
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
    const uniqueUnitNames = [...new Set(this.U_N)];
    const datasets = [];

    for (let i = 0; i < uniqueUnitNames.length; i++) {
      const unitName = uniqueUnitNames[i];
      const filteredT_S = this.T_S.filter((totalSales, index) => this.U_N[index] === unitName);

      datasets.push({
        label: unitName,
        data: filteredT_S,
        backgroundColor: this.getDistinctColor(i),
        borderWidth: 1,
      });
    }

    return datasets;
  }






  get pages() {
    const pageCount = Math.ceil(this.data_all.length / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Unit_Name} ${item.Year} ${item.Total_Sales}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
