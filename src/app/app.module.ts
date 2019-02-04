import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutCreateComponent } from './checkout-create/checkout-create.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutPrepareComponent,
    CheckoutCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,


    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
