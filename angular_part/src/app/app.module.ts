import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {NgChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from 'angular-datatables';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { Query7Component } from './components/query7/query7.component';
import { Query2Component } from './components/query2/query2.component';
import { Query3Component } from './components/query3/query3.component';
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { Analysis1o1Component } from './components/analysis1o1/analysis1o1.component';
import { Analysis1o2Component } from './components/analysis1o2/analysis1o2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Analysis2o1Component } from './components/analysis2o1/analysis2o1.component';
import { Analysis2o2Component } from './components/analysis2o2/analysis2o2.component';
import { Analysis3o1Component } from './components/analysis3o1/analysis3o1.component';
import { Analysis3o2Component } from './components/analysis3o2/analysis3o2.component';
import { Analysis4o1Component } from './components/analysis4o1/analysis4o1.component';
import { Analysis4o2Component } from './components/analysis4o2/analysis4o2.component';
import { Analysis5o1Component } from './components/analysis5o1/analysis5o1.component';
import { Analysis5o2Component } from './components/analysis5o2/analysis5o2.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    Query7Component,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query8Component,
    Query9Component,
    Query10Component,
    Analysis1o1Component,
    Analysis1o2Component,
    Analysis2o1Component,
    Analysis2o2Component,
    Analysis3o1Component,
    Analysis3o2Component,
    Analysis4o1Component,
    Analysis4o2Component,
    Analysis5o1Component,
    Analysis5o2Component,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NgChartsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DataTablesModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatInputModule,
        MatTableModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
