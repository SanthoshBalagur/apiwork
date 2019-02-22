import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-checkout-fillorder',
  templateUrl: './checkout-fillorder.component.html',
  styleUrls: ['./checkout-fillorder.component.css']
})

export class CheckoutFillorderComponent implements OnInit {

  myForm:FormGroup;
  tickets:FormArray;
  value:any;
  fillorder:any;
  Events:any;
  ticketsids:any[];
  eventid:any;
  dateid:any;
  constructor( private EventService: EventService , private fb: FormBuilder, private route: ActivatedRoute) {

   }

  ngOnInit() {

    this.eventid = this.route.snapshot.paramMap.get("eventid")
    this.dateid= this.route.snapshot.paramMap.get("dateid")
    this.EventService.getUsers(this.eventid,this.dateid).subscribe(Events => {
      this.Events = Events;
  
       for (let i = 0; i<this.Events.ticket_types.length; i++){
       this.ticketsids.push(this.Events.ticket_types[i].tickettype_id)
       }
        
    });
    this.myForm = this.fb.group({
      val: new FormControl(''),
      eventid : new FormControl('24362234'),
      eventdateid : new FormControl('83455235'),
      checkout_id : new FormControl('45323424'),
      buyerdetails : this.fb.array([this.createBuyerDetails()]),
      tickets: this.fb.array([]),
      payment_id: new FormControl('78452354')
    });

    
  }

  createTicket(): FormGroup {
    return this.fb.group({
        ticket_price_id: new FormControl(''),
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        email: new FormControl('')
    });
  }
  createBuyerDetails(): FormGroup{
    return this.fb.group({
      buyer_firstname: new FormControl(''),
      buyer_lastname: new FormControl(''),
      buyer_email: new FormControl('')
    });
}

debugger;
createTickets(val: number): void {
  
  if (this.value > 0) {
    for (let i = 0; i < this.value; i++) {
        this.tickets = this.myForm.get('tickets') as FormArray;
        this.tickets.push(this.createTicket());
    }
    for (let j = 0; j < this.tickets.controls.length; j++) {
      this.myForm.controls.tickets.controls[j].controls.ticket_price_id.setValue(this.ticketsids[j]);
  }
  }
}


submitForm() {
  const value = this.myForm.value;
  console.log(value);
  this.EventService.checkoutfillorder(this.myForm).subscribe(_fillorder =>
    {
    this.fillorder =_fillorder;
    console.log(this.fillorder);
    });
}


}



