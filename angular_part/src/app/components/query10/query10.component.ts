import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css']
})
export class Query10Component implements OnInit {
  data_all:any[]=[]
  S:any[]=[]
  M:any[]=[]
  AS:any[]=[]

  constructor(private query10service: MyServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery10();
  }

  getFromQuery10():void{
    this.query10service.getQuery10().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.S.push(d.Store)
            this.M.push(d.Month)
            this.AS.push(d.Average_Sales)
          }
          this.data_all = data;
        }
    );
  }

}
