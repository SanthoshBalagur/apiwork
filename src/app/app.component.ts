import { Component } from '@angular/core';
import { EventService } from './event.service';
//import { HttpClient,HttpHeaders } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
// import { Event } from 'src/models/Event';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name :any;
  

  constructor(private EventService: EventService, private http:HttpClient ){
    
   // this.data.printToConsole("Got the Service");
    
  }
 eventid:any;
 dateid:any;

  ngOnInit() {
   
  //  this.eventid = 2138990184;
  //  this.dateid =238982482;
  }



 

  
}

