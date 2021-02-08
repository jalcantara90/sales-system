import { Ticket, Discount } from './../shared/ticket/ticket.model';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { DiscountService } from '../shared/ticket/discount.service';

const a = new Product('Spaghetti Fettucine Aglio with Beef Bacon', 'Pasta', 11.5);
const b = new Product('Taggliatelle Carbonnara', 'Pasta', 10.5);
const c = new Product('Rigatonni Parmesana', 'Pasta', 12.0);
const d = new Product('Ravioli 4 Formaggi', 'Pasta', 11.5);
const e = new Product('Spaghetti With Black Truffle', 'Pasta', 11.5);
const f = new Product('Fettucine A La Rabiatta', 'Pasta', 11.5);
const g = new Product('Parpadelle A La Matricciana', 'Pasta', 11.5);
const h = new Product('Rigatonni Boloñesa', 'Pasta', 9.5);

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {
  public productList: Product[] = [
    a, b, c, d, e, f, g, h
  ];

  public ticket: Ticket = new Ticket();

  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {
    this.ticket.addItem(a);
    this.ticket.addItem(b);
    this.ticket.addItem(c);
    this.ticket.addItem(d);
  }

  addProductTicket(product: Product): void {
    this.ticket.addItem(product);
  }

  substractProductTicket(product: Product): void {
    this.ticket.removeItem(product);
  }

  addDiscount(code: string): void {
    if (this.ticket.discountList.some(d => d.code === code)) {
      return ;
    }

    const discount = this.discountService.checkDiscountCode(code);

    if (discount) {
      this.ticket.addDiscount(discount);
    }
  }

  removeDiscount(discount: Discount): void {
    this.ticket = this.ticket.removeDiscount(discount);
  }
}
