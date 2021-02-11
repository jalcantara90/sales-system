import { FormControl } from '@angular/forms';
import { TicketService } from './../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { productList } from './../shared/product/product-list';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {
  public productList: Product[] = productList;

  filters = new FormControl([]);

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.filters.valueChanges.subscribe(console.log);
  }

  addProductTicket(product: Product): void {
    this.ticketService.addProductTicket(product);
  }
}
