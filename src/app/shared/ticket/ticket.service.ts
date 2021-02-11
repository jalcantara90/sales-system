import { DiscountService } from './discount.service';
import { Discount, Ticket } from './ticket.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { beefRamen, shrimpsRamen, sake, water} from '../product/product-list';
import { Product } from '../product/product.model';

const ticket = new Ticket('Leonardo DiCaprio', 4, 21);
ticket.addItem(beefRamen);
ticket.addItem(shrimpsRamen);
ticket.addItem(sake);
ticket.addItem(water);
ticket.addItem(sake);

@Injectable({ providedIn: 'root' })
export class TicketService {
  private ticket = new BehaviorSubject(ticket);
  public ticket$ = this.ticket.asObservable();

  constructor(private discountService: DiscountService) {}

  addProductTicket(product: Product): void {
    const ticket = this.ticket.getValue();
    ticket.addItem(product);
    this.ticket.next(ticket);
  }

  removeProductTicket(product: Product): void {
    const ticket = this.ticket.getValue();
    ticket.removeItem(product);
    this.ticket.next(ticket);
  }

  addDiscount(code: string): void {
    const ticket = this.ticket.getValue();
    if (ticket.discountList.some(d => d.code === code)) {
      return ;
    }

    const discount = this.discountService.checkDiscountCode(code);

    if (discount) {
      ticket.addDiscount(discount);
    }

    this.ticket.next(ticket);
  }

  removeDiscount(discount: Discount): void {
    let ticket = this.ticket.getValue();
    ticket = ticket.removeDiscount(discount);
    this.ticket.next(ticket);
  }

  resetTicket(): void {
    this.ticket.next(new Ticket('Leonardo DiCaprio', 4, 21));
  }
}
