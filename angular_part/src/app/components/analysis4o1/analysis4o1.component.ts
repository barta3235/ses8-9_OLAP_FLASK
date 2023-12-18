import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";

@Component({
  selector: 'app-analysis4o1',
  templateUrl: './analysis4o1.component.html',
  styleUrls: ['./analysis4o1.component.css']
})
export class Analysis4o1Component implements OnInit {
  data_all:any[]=[]
  S:any[]=[]
  Y:any[]=[]
  Q_S:any[]=[]
  private days_input: any;
  private pageSize = 8;
  public searchText = '';
  public currentPage = 1;
  barChart: any;

  constructor(private analysis4o1service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis4o1();
  }

  getFromAnalysis4o1(): void {
    this.analysis4o1service.getAnalysis4o1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.S.push(d.Store_Size)
          this.Y.push(d.Year)
          this.Q_S.push(d.Quantity_Sold)
        }
        this.Y = Array.from(new Set(this.Y));
        this.data_all = data;
        this.setPage(1);
        this.drawBarChart();
      }
    );
  }


  drawBarChart() {
    const canvas = document.getElementById('barChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const uniqueStoreSizes = Array.from(new Set(this.S));

      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.Y, // X-axis labels (Year)
          datasets: uniqueStoreSizes.map((storeSize, index) => {
            const storeSizeData = this.data_all
              .filter(item => item.Store_Size === storeSize)
              .map(item => item.Quantity_Sold);

            return {
              label: storeSize.toString(),
              data: storeSizeData,
              backgroundColor: this.getDistinctColor(index), // Updated line
            };
          }),
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
                text: 'Quantity Sold',
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
      const searchStr = `${item.Store_Size} ${item.Year} ${item.Quantity_Sold}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }


}
