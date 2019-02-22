export interface event {
    eventid:      number;
    eventdateid:  number;
    checkout_id:  number;
    buyerdetails: Buyerdetail[];
    tickets:      Ticket[];
    payment_id:   number;
}

export interface Buyerdetail {
    buyer_firstname: string;
    buyer_lastname:  string;
    buyer_email:     string;
}

export interface Ticket {
    ticket_price_id: number;
    first_name:      string;
    last_name:       string;
    email:           string;
}
