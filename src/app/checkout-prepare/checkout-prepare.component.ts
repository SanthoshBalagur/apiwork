import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
import { Router,NavigationExtras } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { urlevent } from 'src/models/Event';
import { CreteEvent } from '../models/createevent';
import { DataStorage } from '../dataprovider';
let c = new urlevent();

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
tickettypeid:any;
orderref:any;
eventid:any;
dateid:any;
myForm:FormGroup;
CreateEventObj:CreteEvent;
TicketDetailsArray:any;
constructor( private fb:FormBuilder,private http :HttpClient,
 private EventService: EventService,private route: ActivatedRoute ,
 private data: DataStorage , private router: Router) {
     
   }
   ngOnInit() {
 
    c.eventid = this.route.snapshot.paramMap.get("eventid")
    c.dateid= this.route.snapshot.paramMap.get("dateid")
    this.eventid = c.eventid;
    this.dateid = c.dateid;
    
    this.myForm = this.fb.group({
     
      TicketDetails: this.fb.array([])
});
     this.EventService.getUsers( c.eventid,c.dateid).subscribe(Events => {
      
      this.Events = Events;
      this.pay = this.Events.payment_options;
      this.tickettype = this.Events.tickettypes;
      console.log(this.Events);
      for (let i = 0; i < this.tickettype.length; i++) {
      
        // this.TicketDetailsArray = this.myForm.get('TicketDetails') as FormArray;
        (this.myForm.controls['TicketDetails'] as FormArray).
        push(this.EventsDetails(this.tickettype[i].tickettype_name,
          this.tickettype[i].tickettype_price,this.tickettype[i].tickettype_id));
      } 
      console.log(this.myForm)
    },


    );

 
    this.route.params.subscribe(eventp =>{
      this.eventid =  (eventp.eventid);
      this.dateid =  (eventp.dateid);
      
    })
  
  
   
    
  }
    EventsDetails(tickettype,ticketprice,tickettypeid): FormGroup {
      
        return this.fb.group({
        
        TicketType: new FormControl(tickettype),
        TicketPrice: new FormControl(ticketprice),
        TicketTypeId: new FormControl(tickettypeid),
        Quantity: new FormControl('')
   
    });
  }

//   submitForm() {
//     const value = this.myForm.value;
    
//     this.data.storage = {
//       Eventid:this.eventid,
//       Dateid:this.dateid,
//       NewData: JSON.stringify(value)
//     }
//     this.router.navigate(['create']);
// }
  submitForm() {
    let value = this.myForm.value;
    
 
    this.router.navigate(['/create'], { queryParams: {
          Eventid:this.eventid,
          Dateid:this.dateid,
          Data: JSON.stringify(value)
        } ,skipLocationChange: true  });
}


}
 // for(var i=0;i<this.tickettype.length;i++){
    //   this.myForm.setValue({TicketType:this.tickettype[i].tickettype_name});
    //   this.myForm.setValue({Ticketprice:this.tickettype[i].tickettype_price});

    // }
  //   this.router.navigate(['create'], navigationExtras  );
  // }
//   let navigationExtras: NavigationExtras = {
//     queryParams: {
//       Eventid:this.eventid,
//       Dateid:this.dateid,
//       Data: JSON.stringify(value)
//     }
// }
//   data() {

  //     // this.CreateEventObj.eventid  = this.route.snapshot.paramMap.get("eventid")
  //     //  = 
  //     // c.dateid= this.route.snapshot.paramMap.get("dateid")
  //     // this.tickettypeid;


  //     // let tickettypes = this.route.snapshot.paramMap.get("ticket_typeid");

  //     // tickettypes.
  //     // this.CreateEventObj.eventid = this.route.snapshot.paramMap.get("eventid")
  //     // this.CreateEventObj.eventdateid =this.route.snapshot.paramMap.get("eventdateid")
      

  // //  alert('re');

  // }

