import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {
  data_all:any[]=[]

  constructor(private query4service:MyServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery4()
  }

  getFromQuery4():void{
    this.query4service.getQuery4().subscribe((data:any):void=>{
      for(const d of data){
        console.log(d)
      }
      this.data_all=data
    }
    )
  }
}
