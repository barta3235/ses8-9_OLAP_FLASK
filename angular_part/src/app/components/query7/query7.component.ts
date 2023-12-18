import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {HttpClient} from "@angular/common/http";
import {Form, FormControl, FormGroup} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.css']
})
export class Query7Component implements OnInit {

  private days_input:any;

  query7form= new FormGroup({
      days:new FormControl('')
});

  constructor(private query7service:MyServiceService,private http:HttpClient) { }

  data_all: any[]=[];

  ngOnInit(): void {
  }

  search(){
    this.days_input=this.query7form.value.days
    this.query7service.getQuery7(this.days_input).subscribe((data:any)=>{
      console.log(data)
      this.data_all=data
    })
  }

}
