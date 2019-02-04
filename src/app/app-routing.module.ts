import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CheckoutCreateComponent } from 'src/app/checkout-create/checkout-create.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
const routes: Routes = [
  { path: 'prepare/create/:quantity', component: CheckoutCreateComponent
  },
  {
   path: 'prepare', component: CheckoutPrepareComponent
 }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule ,
   [ RouterModule.forRoot(routes) ]
  ]
})

export class AppRoutingModule { }
