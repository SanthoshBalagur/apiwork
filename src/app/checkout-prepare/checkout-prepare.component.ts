import { Component, OnInit } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { EventService } from 'src/app/event.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/'

@Component({
  selector: 'app-checkout-prepare',
  templateUrl: './checkout-prepare.component.html',
  styleUrls: ['./checkout-prepare.component.css']
})
export class CheckoutPrepareComponent implements OnInit {
  Events:Event[];
  constructor(private EventService, private http :HttpClient) { }

  ngOnInit() {
    this.EventService.getevents().subscribe(Events=> {
      this.Events = Events;
    }
    
   
    
  }


