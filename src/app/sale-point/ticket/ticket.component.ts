import { enterRight } from './../../shared/animations/enter-right.animation';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/product/product.model';
import { Ticket } from '../../shared/ticket/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  animations: [enterRight]
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();
  @Output() subtractProduct: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  trackByProductId(product: Product): number {
    return product.id;
  }

}
