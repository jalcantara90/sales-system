import { bookingList } from './ticket-list';
import { DiscountService } from './discount.service';
import { Discount } from './ticket.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { Product } from '../product/product.model';
import { Booking } from './booking.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private bookingList = new BehaviorSubject(bookingList);
  private selectedBookingId: BehaviorSubject<string> = new BehaviorSubject(bookingList[0].bookingId);
  public bookingList$ = this.bookingList.asObservable();

  public ticket$ = combineLatest([
    this.bookingList$,
    this.selectedBookingId.asObservable()
  ]).pipe(
    map(([bookingList, bookingId]) =>
      bookingList.find((booking: Booking) => booking.bookingId === bookingId)
    )
  );

  constructor(private discountService: DiscountService) {}

  addBooking(newBooking: Booking) {
    const bookingList = this.bookingList.getValue();
    bookingList.push(newBooking);
    this.bookingList.next(bookingList);
    this.selectedBookingId.next(newBooking.bookingId);
  }

  updateBooking(booking: Booking) {
    this.updateBookingList(booking);
  }

  selectBooking(bookingId: string) {
    this.selectedBookingId.next(bookingId);
  }

  addProductTicket(product: Product): void {
    const booking = this.findSelectedBooking();
    booking.order.addItem(product);
    this.updateBookingList(booking);
  }

  removeProductTicket(product: Product): void {
    const booking = this.findSelectedBooking();
    booking.order.removeItem(product);
    this.updateBookingList(booking);
  }

  addDiscount(code: string): void {
    const booking = this.findSelectedBooking();
    if (booking.order.discountList.some(d => d.code === code)) {
      return ;
    }

    const discount = this.discountService.checkDiscountCode(code);

    if (discount) {
      booking.order.addDiscount(discount);
    }

    this.updateBookingList(booking);
  }

  removeDiscount(discount: Discount): void {
    const booking = this.findSelectedBooking();
    booking.order = booking.order.removeDiscount(discount);
    this.updateBookingList(booking);
  }

  resetTicket(): void {
    const booking = this.findSelectedBooking();
    booking.order = booking.order.reset();
    this.updateBookingList(booking);
  }

  private findSelectedBooking() {
    const bookingId = this.selectedBookingId.getValue();
    const bookingList = this.bookingList.getValue();

    return bookingList.find(booking => booking.bookingId === bookingId);
  }

  updateBookingList(booking: Booking) {
    const bookingList = this.bookingList.getValue().map((b) => {
      if (b.bookingId === booking.bookingId) {
        b = booking;
      }

      return b;
    });
    this.bookingList.next(bookingList);
  }
}
