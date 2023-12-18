import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyComponentComponent} from "./components/my-component/my-component.component";
import {Query7Component} from "./components/query7/query7.component";
import {Query2Component} from "./components/query2/query2.component";
import {Query3Component} from "./components/query3/query3.component";
import {Query4Component} from "./components/query4/query4.component";
import {Query5Component} from "./components/query5/query5.component";
import {Query6Component} from "./components/query6/query6.component";
import {Query8Component} from "./components/query8/query8.component";
import {Query9Component} from "./components/query9/query9.component";
import {Query10Component} from "./components/query10/query10.component";
import {Analysis1o1Component} from "./components/analysis1o1/analysis1o1.component";
import {Analysis1o2Component} from "./components/analysis1o2/analysis1o2.component";
import {Analysis2o1Component} from "./components/analysis2o1/analysis2o1.component";
import {Analysis2o2Component} from "./components/analysis2o2/analysis2o2.component";
import {Analysis3o1Component} from "./components/analysis3o1/analysis3o1.component";
import {Analysis3o2Component} from "./components/analysis3o2/analysis3o2.component";
import {Analysis4o1Component} from "./components/analysis4o1/analysis4o1.component";
import {Analysis4o2Component} from "./components/analysis4o2/analysis4o2.component";
import {Analysis5o1Component} from "./components/analysis5o1/analysis5o1.component";
import {Analysis5o2Component} from "./components/analysis5o2/analysis5o2.component";

const routes: Routes = [
  {path: 'my-com', component: MyComponentComponent},
  {path: 'query7', component: Query7Component},
  {path: 'query2',component: Query2Component},
  {path: 'query3',component: Query3Component},
  {path: 'query4',component: Query4Component},
  {path: 'query5',component: Query5Component},
  {path: 'query6',component: Query6Component},
  {path: 'query8',component: Query8Component},
  {path: 'query9',component: Query9Component},
  {path: 'query10',component: Query10Component},
  {path: 'a101',component:Analysis1o1Component},
  {path: 'a102',component:Analysis1o2Component},
  {path: 'a201',component:Analysis2o1Component},
  {path: 'a202',component:Analysis2o2Component},
  {path: 'a301',component:Analysis3o1Component},
  {path: 'a302',component:Analysis3o2Component},
  {path: 'a401',component:Analysis4o1Component},
  {path: 'a402',component:Analysis4o2Component},
  {path: 'a501',component:Analysis5o1Component},
  {path: 'a502',component:Analysis5o2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
