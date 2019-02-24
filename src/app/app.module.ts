import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutCreateComponent } from './checkout-create/checkout-create.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataStorage } from 'src/app/dataprovider';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutPrepareComponent,
    CheckoutCreateComponent,
    
    
    PageNotFoundComponent,
    
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    HttpClientModule,

    AppRoutingModule
  ],
  providers: [DataStorage],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
