import { DialogService } from '@ngneat/dialog';
import { Booking } from './../../shared/ticket/booking.model';
import { Observable } from 'rxjs';
import { TicketService } from './../../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../shared/ticket/ticket.model';
import { filter, map } from 'rxjs/operators';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-detail-tab',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit {

  ticket$: Observable<Booking>;

  constructor(
    private ticketService: TicketService,
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
    this.ticket$ = this.ticketService.ticket$;
  }

  editBooking(booking: Booking) {
    const orderFormRef = this.dialog.open(OrderFormComponent, { data: booking });
    orderFormRef.afterClosed$.pipe(
      filter(result => !!result)
    ).subscribe((bookingInfo: Booking) => {
      const booking = new Booking(bookingInfo.bookingName, bookingInfo.people, bookingInfo.table, bookingInfo.bookingDate);
      this.ticketService.addBooking(booking);
    });
  }

}
