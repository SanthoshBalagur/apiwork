import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { urlevent } from 'src/models/Event'

// import { DataStorage } from "../dataProvider";

let x = new urlevent();

@Component({
  selector: 'app-checkout-create',
  templateUrl: './checkout-create.component.html',
  styleUrls: ['./checkout-create.component.css'],
 
})




export class CheckoutCreateComponent implements OnInit {
  name:any;
  // datas:any;
 response: any;
  val: any;
  ticketnew: any;
  // eventid =2138990184 ;
  // dateid=238982482;
 
  Events: any;
  pay: any;
  tickettype: any;
  ticketid: any;
  IsHidden: boolean;
  CheckoutId: any;
  Current: any;
  EventZillaFee: any;
  TransactionTotal: any;
  TransactionReference: any;
  TransactionTax: any;
  Tickets: any;
  filorder: any;
  lastname:any;
  email:any;
  userForm:FormGroup;
 ticketsids:any;
 myForm:FormGroup;
  value:any;
  tickets: FormArray;
 eventid:any;
 dateid:any;
 datas:FormGroup;
newdata:any;
ticketquant:any;
tickettdet:any;
paymentoptionid:any;
  constructor( private fb:FormBuilder, private EventService: EventService,
     private route:ActivatedRoute) {
  
    this.route.queryParams.subscribe(params => {
       this.eventid = params.Eventid;
          this.dateid = params.Dateid;
          this.ticketquant =params['Data'] ;

      console.log(params);
  });
  // debugger
  //   this.newdata = JSON.stringify(this.data.storage);
  
  // console.log((this.newdata));


  }


  ngOnInit() {

    
    // this.eventid = this.route.snapshot.paramMap.get("eventid")
    // x.eventid= this.route.snapshot.paramMap.get("eventid")
    // this.dateid= this.route.snapshot.paramMap.get("dateid")
    // x.dateid= this.route.snapshot.paramMap.get("dateid")
    debugger
   this.EventService.getUsers(this.eventid,this.dateid).subscribe(Events => {
     
      this.Events = Events;
      this.pay = this.Events.payment_options;
      // for (let i = 0; i<this.Events.ticket_types.length; i++){
      //   this.ticketsids.push(this.Events.ticket_types[i].tickettype_id)
      //   }
      //  this.ticketid = this.Events.ticket_types.tickettype_id;
   });
    // this.route.params.subscribe(eventp =>{
    //  (this.val)  =  (eventp.quantity);
      
    // })
   // 2139012976
  

  //   let datas ={ 
  //     "eventid":this.eventid,
  //     "eventdateid": this.dateid,
  //     "ticket_types": [
  //       {
  //         "ticket_typeid":2139012923,
  //         "quantity": this.val
  //       }
    
  //     ]
  
  //  }

  
  this.datas = this.fb.group({
    
    eventid : new FormControl(this.eventid),
    eventdateid : new FormControl(this.dateid),
    ticket_types :this.fb.array([])
    
  })
  
   
  this.tickettdet = JSON.parse(this.ticketquant);
 
      for (let i = 0; i < this.tickettdet.TicketDetails.length; i++) {
    this.Tickets = this.datas.get('ticket_types') as FormArray;
    this.Tickets.push(this.createTickettypes( this.tickettdet.TicketDetails[i].TicketTypeId,
     this.tickettdet.TicketDetails[i].Quantity));
}   
console.log(this.datas.value);
  
   this.EventService.checkoutcreate(this.datas.value).subscribe(Respons =>{
     
         this.response =Respons;
    this.ticketnew = this.response.tickets;
    this.CheckoutId = this.response.checkout_id;
    this.Current=this.response.currency;
    this.EventZillaFee = this.response.eventzilla_fee;
    this.TransactionReference = this.response.transaction_ref;
    this.TransactionTotal = this.response.transaction_total;
    this.TransactionTax = this.response.transaction_tax;
    this.Tickets = this.response.tickets;
console.log(Respons);

this.myForm = this.fb.group({
  
  eventid : new FormControl(this.eventid),
  eventdateid : new FormControl(this.dateid),
  checkout_id : new FormControl(this.CheckoutId),
  buyerdetails : this.fb.array([this.createBuyerDetails()]),
  tickets: this.fb.array([]),
  
  payment_id: new FormControl('')
});


    } )
    
    for (let i = 0; i < this.ticketnew.length; i++) {
      this.Tickets = this.myForm.get('tickets') as FormArray;
      this.Tickets.push(this.createTicket(this.ticketnew[i].ticket_price_id));
    } 
    
     
    // for (let j = 0; j < this.tickets.controls.length; j++) {
    //         this.myForm.controls.tickets.controls[j].controls.ticket_price_id.setValue(this.ticketTypeId[j]);
    //     }
  }
  
  createTickettypes(tickettypeid,quantity): FormGroup {
    return this.fb.group({
      ticket_typeid: new FormControl(tickettypeid),
      quantity: new FormControl(quantity)
        });
  }
  createTicket(TicketPriceID): FormGroup {
    return this.fb.group({
        ticket_price_id: new FormControl(TicketPriceID),
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

  // createTickets(val: number): void {
    
  //   if (this.val> 0) {
  //     for (let i = 0; i < this.val; i++) {
  //         this.Tickets = this.myForm.get('tickets') as FormArray;
  //         this.Tickets.push(this.createTicket());
  //     }
  //   //   for (let j = 0; j < this.Tickets.length; j++) {
  //   //     this.myForm.controls.tickets.controls[j].controls.ticket_price_id.setValue(this.ticketsids[j]);
  //   // }
  //   }
  // }

  submitForm() {
    const value = this.myForm.value;
    console.log(value);
    debugger
    this.myForm.controls['payment_id'].setValue(this.paymentoptionid);
    this.EventService.checkoutfillorder(this.myForm.value).subscribe(_fillorder =>
      {
      this.filorder =_fillorder;
      
      console.log(this.filorder);
      });
  }
   

  onSelect()
    {
    this.IsHidden= !this.IsHidden;
  
   }

 
}
  

  
    

  
 
   
  






