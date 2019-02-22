import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
// import { Event } from 'src/models/Event';
import { Observable } from 'rxjs';


let mytoken = "565e95b08ad5210001000001b0db86dc97f6477c781493729c6cbcfb";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': mytoken
  })
}




let eventlive = "http://publicapi.eventxpress.net/v2/api/events?status=live"
var Geturl="http://publicapi.eventxpress.net/v2/api/checkout/prepare/";
var Posturl ="http://publicapi.eventxpress.net/v2/api/checkout/create";
var Fillorder ="http://publicapi.eventxpress.net/v2/api/checkout/fillorder";


@Injectable({
  providedIn: 'root'
})


export class EventService {
  printToConsole(arg){
    console.log(arg);
  }
 
  public api_url:string = Geturl;
  public event_url :string =eventlive;
  
  constructor(private http: HttpClient) { };
   
  getUsers(eventid:number,dateid:number):Observable<any[]>
  {
    return this.http.get<any[]>(this.api_url+"/"+eventid+"/"+dateid, httpOptions);
  }
  

  checkoutcreate(datas): Observable<any> {
    console.log(datas);
    return this.http.post<any>( Posturl, JSON.stringify(datas), httpOptions)
      
  }
  checkoutfillorder(myForm): Observable<any> {
    console.log(myForm);
    return this.http.post<any>( Fillorder, JSON.stringify(myForm), httpOptions)
        
    }

  }
  

