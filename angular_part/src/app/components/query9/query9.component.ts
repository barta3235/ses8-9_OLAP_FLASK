import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css']
})
export class Query9Component implements OnInit {

  constructor(private query9service: MyServiceService,private http:HttpClient) { }
  data_all:any[]=[]
  I_N:any[]=[]
  D:any[]=[]
  T_S:any[]=[]

  ngOnInit(): void {
    this.getFromQuery9()
  }

  getFromQuery9():void{
    this.query9service.getQuery9().subscribe((data: any) => {
          for (const d of data) {
            console.log(d);
            this.I_N.push(d.Quarter)
            this.D.push(d.Item_Name)
            this.T_S.push(d.Total_Sales)
          }
          this.data_all = data;
        }
    );
  }

}
