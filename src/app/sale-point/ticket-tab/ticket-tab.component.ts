import { Observable } from 'rxjs';
import { Discount, Ticket } from './../../shared/ticket/ticket.model';
import { Product } from './../../shared/product/product.model';
import { TicketService } from './../../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-tab',
  templateUrl: './ticket-tab.component.html',
  styleUrls: ['./ticket-tab.component.scss']
})
export class TicketTabComponent implements OnInit {

  public ticket$: Observable<Ticket>;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticket$ = this.ticketService.ticket$;
  }

  addProductTicket(product: Product) {
    this.ticketService.addProductTicket(product);
  }

  removeProductTicket(product: Product) {
    this.ticketService.removeProductTicket(product);
  }

  addDiscount(code: string) {
    this.ticketService.addDiscount(code);
  }

  removeDiscount(discount: Discount) {
    this.ticketService.removeDiscount(discount);
  }

  resetTicket() {
    this.ticketService.resetTicket();
  }
}
