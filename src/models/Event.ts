export interface Event {
    payment_options:  PaymentOption[];
    tickettypes:      Tickettype[];
    questions:        any[];
    discount_enabled: boolean;
    tax_enabled:      boolean;
    tax:              Tax;
}

export interface PaymentOption {
    paymentoption_id:   number;
    paymentoption_name: string;
}

export interface Tax {
    tax_type:  string;
    tax_label: string;
    tax_value: number;
}

export interface Tickettype {
    tickettype_id:             number;
    tickettype_name:           string;
    tickettype_price:          number;
    tickettype_min_limit:      number;
    tickettype_max_limt:       number;
    tickettype_avail_quantity: number;
    tickettype_onsale:         boolean;
}
