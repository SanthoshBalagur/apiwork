export interface CreteEvent {
    eventid: any;
    eventdateid: any;
    ticket_types: Tickettype[];
    discount_code: any;
  }
  
 export interface Tickettype {
    ticket_typeid: number;
    quantity: number;
  }