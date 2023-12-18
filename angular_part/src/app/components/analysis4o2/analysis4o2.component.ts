import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {ChartDataset,ChartOptions} from "chart.js";

@Component({
  selector: 'app-analysis4o2',
  templateUrl: './analysis4o2.component.html',
  styleUrls: ['./analysis4o2.component.css']
})
export class Analysis4o2Component implements OnInit {
  data_all:any[]=[]
  Y:any[]=[]
  A_Q_S:any[]=[]
  private days_input: any;
  private pageSize = 8; // Number of items per page
  public searchText = ''; // Search text
  public currentPage = 1; // Current page


  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Quantity sold for the 4th quarter(Q4)',
      data: this.A_Q_S

    }
  ];
  chartLabels: string[] = this.Y;

  chartWidth: number = 600;
  chartHeight: number = 600;

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






  constructor(private analysis4o2service: MyServiceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFromAnalysis4o2();
  }

  getFromAnalysis4o2(): void {
    this.analysis4o2service.getAnalysis4o2().subscribe((data: any) => {
        for (const d of data) {
          console.log(d);
          this.Y.push(d.Year)
          this.A_Q_S.push(d.Average_Quantity_Sold)
        }
        this.data_all = data;
        this.setPage(1);
      }
    );
  }

  get pages() {
    const pageCount = Math.ceil(this.data_all.length / this.pageSize);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data_all.filter((item: any) => {
      const searchStr = `${item.Year} ${item.Average_Quantity_Sold}`.toLowerCase();
      return searchStr.includes(this.searchText.toLowerCase());
    }).slice(start, end);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

}
