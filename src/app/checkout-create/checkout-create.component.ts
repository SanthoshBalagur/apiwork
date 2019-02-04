import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-checkout-create',
  templateUrl: './checkout-create.component.html',
  styleUrls: ['./checkout-create.component.css']
})





export class CheckoutCreateComponent implements OnInit {
  name:any;
  datas:any;
 
  response: any;
  val: any;
  ticketnew: any;
  eventid =2138990184 ;
  Events: any;
  pay: any;
  tickettype: any;
  ticketid: any;


  constructor(private EventService: EventService,private route:ActivatedRoute) { }

  ngOnInit() {
   this.EventService.getUsers().subscribe(Events => {
      this.Events = Events;

    console.log(this.tickettype);
      console.log(this.Events);
        
    });
    this.route.params.subscribe(eventp =>{
      this.val =  (eventp.quantity);
      this.ticketid = (eventp.ticket_typeid);
    })

    let datas ={ 
    
      "eventid":this.eventid,
      "eventdateid":238982482,
      "ticket_types": [
        {
          "ticket_typeid":this.ticketid,
          "quantity": this.val
      }
      
      ]
  
   }
   
   this.EventService.checkoutcreate(datas).subscribe(Response =>{
      this.response =Response;
    this.ticketnew = this.response.tickets;
console.log(Response);
    } )
  }
 
   
   
      
  
  
 
}



