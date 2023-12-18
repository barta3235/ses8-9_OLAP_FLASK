import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {
  data_all:any[]=[]
  Q:any[]=[]
  I_N:any[]=[]
  T_S:any[]=[]
  constructor(private query8service: MyServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery8();
  }

  getFromQuery8():void{
    this.query8service.getQuery8().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.Q.push(d.Quarter)
            this.I_N.push(d.Item_Name)
            this.T_S.push(d.Total_Sales)
          }
          this.data_all = data;
        }
    );
  }

}
