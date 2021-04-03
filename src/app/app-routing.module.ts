import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpartnerComponent } from './partner/addpartner/addpartner.component';


const routes: Routes = [{ path: 'addPartner', component: AddpartnerComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
