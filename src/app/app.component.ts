import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Event } from 'src/app/models/Event';

//import { HttpClient,HttpHeaders } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Events:Event[];

  constructor(){
    
    // this.eve.printToConsole("Got the Service");
  }
  ngOnInit() {
    // this.EventService.getevents().subscribe(Events=> {
    //   this.Events = Events;
  }
   
    
  }


