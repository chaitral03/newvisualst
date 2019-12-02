import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductssaleComponent } from './productssale/productssale.component';


const routes: Routes = [
  {path:'productsale',component:ProductssaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
