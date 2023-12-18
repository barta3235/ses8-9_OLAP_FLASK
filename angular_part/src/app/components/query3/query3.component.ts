import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {
  data_all:any[]=[]

  constructor(private query3service: MyServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getFromQuery3()
  }

  getFromQuery3(): void{
    this.query3service.getQuery3().subscribe((data:any):void=>{
      for(const d of data){
        console.log(d)
      }
      this.data_all=data
    }
    )
  }


}
