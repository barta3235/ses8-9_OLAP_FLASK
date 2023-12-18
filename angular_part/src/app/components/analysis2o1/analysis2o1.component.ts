import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import { Chart } from 'chart.js';


@Component({
  selector: 'app-analysis2o1',
  templateUrl: './analysis2o1.component.html',
  styleUrls: ['./analysis2o1.component.css']
})
export class Analysis2o1Component implements OnInit {
  data_all:any[]=[]
  C:any[]=[]
  Y:any[]=[]
  Q:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page
  horizontalBarChart: any;

  constructor(private analysis2o1service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis2o1();
  }
  getFromAnalysis2o1(): void {
    this.analysis2o1service.getAnalysis2o1().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.C.push(d.Customer)
          this.Y.push(d.Year)
          this.Q.push(d.Quantity)
        }
        this.data_all = data;
        this.setPage(1);
        this.drawHorizontalBarChart();
      }
    );
  }



  drawHorizontalBarChart() {
    const canvas = document.getElementById('horizontalBarChartCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.horizontalBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.C, // Y-axis labels (Customer)
          datasets: this.createDatasets(),
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Customer',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Quantity',
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
    const uniqueYears = [...new Set(this.Y)];
    const datasets = [];

    for (const year of uniqueYears) {
      const filteredQ = this.Q.filter((quantity, index) => this.Y[index] === year);

      datasets.push({
        label: year,
        data: filteredQ,
        backgroundColor: this.getRandomColor(),
        borderWidth: 1,
      });
    }

    return datasets;
  }

  getRandomColor() {
    const predefinedColors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
    ];

    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  }





  get pages() {
    const pageCount = Math.ceil(this.data_all.length / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Customer} ${item.Year} ${item.Quantity}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
