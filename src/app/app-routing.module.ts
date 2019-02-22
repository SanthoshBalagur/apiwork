import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CheckoutCreateComponent } from 'src/app/checkout-create/checkout-create.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/prepare/:eventid/:dateid', pathMatch: 'full'
  },
  {
   path: 'prepare/:eventid/:dateid', component: CheckoutPrepareComponent
 },

 { 
   path: 'create', component: CheckoutCreateComponent
  },
  { 
    path: '**', component: PageNotFoundComponent
   }
];
// 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule ,
   [ RouterModule.forRoot(routes) ]
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents =[CheckoutCreateComponent,
                                 CheckoutPrepareComponent,
                                 PageNotFoundComponent
                                                        ]