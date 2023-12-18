import {Component, OnInit, ViewChild, ViewEncapsulation,AfterViewInit} from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Chart } from 'chart.js'; // Import Chart module

@Component({
  selector: 'app-analysis1o1',
  templateUrl: './analysis1o1.component.html',
  styleUrls: ['./analysis1o1.component.css'],
})
export class Analysis1o1Component implements OnInit {

  @ViewChild('barChart') barChart: any;

  data_all:any[]=[];
  D:any[]=[];
  Y:any[]=[];
  T_S:any[]=[];
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page

  constructor(private analysis101service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis1o1()
  }

  getFromAnalysis1o1(): void {
    this.analysis101service.getAnalysis1o1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.D.push(d.Division)
          this.Y.push(d.Year)
          this.T_S.push(d.Total_Sales)
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
      const uniqueDivisions = [...new Set(this.D)]; // Get unique divisions

      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.Y, // X-axis labels (Year)
          datasets: uniqueDivisions.map((division, index) => {
            const divisionData = this.data_all
              .filter(item => item.Division === division)
              .map(item => item.Total_Sales);

            return {
              label: division,
              data: divisionData,
              backgroundColor: this.getDistinctColor(index),
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
              stacked: false, // If you want stacked bar charts
            },
            y: {
              title: {
                display: true,
                text: 'Total Sales',
              },
              stacked: false, // If you want stacked bar charts
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
      const searchStr = `${item.Division} ${item.Year} ${item.Total_Sales}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }







}
