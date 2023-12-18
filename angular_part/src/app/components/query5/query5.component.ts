import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.css']
})
export class Query5Component implements OnInit {
  data_all:any[]=[]

  constructor(private query5service:MyServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery5()
  }

  getFromQuery5():void{
    this.query5service.getQuery5().subscribe((data:any):void=>{
          for(const d of data){
            console.log(d)
          }
          this.data_all=data
        }
    )
  }

}
