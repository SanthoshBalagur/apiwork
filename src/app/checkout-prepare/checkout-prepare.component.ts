import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout-prepare',
  templateUrl: './checkout-prepare.component.html',
  styleUrls: ['./checkout-prepare.component.css']
})
export class CheckoutPrepareComponent implements OnInit {
  quantity: any;
 Events:any;
 pay: any;
 tickettype: any;
taxes: any;
response:any;
val:any;
options:any=[];
tickettypeid:any;


  constructor(private http :HttpClient,private EventService: EventService) {

   }
   ngOnInit() {
      

    
this.EventService.getUsers().subscribe(Events => {
      this.Events = Events;
      this.pay = this.Events.payment_options;
      this.tickettype = this.Events.tickettypes;
      // this.taxes= this.Events.tax;
      console.log(this.Events);
        
    });
   this.options = [
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 }, 
      { name: "9", value: 9 },
      { name: "10", value: 10 }
    ]
 
  

  
   
    
  }
  

}

