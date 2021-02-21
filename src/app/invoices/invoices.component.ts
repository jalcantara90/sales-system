import { FormControl } from '@angular/forms';
import { Booking } from './../shared/ticket/booking.model';
import { Observable } from 'rxjs';
import { TicketService } from './../shared/ticket/ticket.service';
import { state, trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  animations: [
    trigger('toogle', [
      state('false', style({ width: '100%' })),
      state('true', style({ width: '50%' })),
      transition('true <=> false', animate('500ms'))
    ]),
    trigger('expanded', [
      state('false', style({ width: '0%', opacity: 0 })),
      state('true', style({ width: '50%', opacity: 1 })),
      transition('true <=> false', animate('500ms'))
    ])
  ]
})
export class InvoicesComponent implements OnInit {
  show: boolean = false;
  bookingList$: Observable<Booking[]>;
  booking: Booking;
  search = new FormControl();
  status = new FormControl();

  constructor(private bookingService: TicketService) { }

  ngOnInit(): void {
    this.bookingList$ = this.bookingService.bookingList$;
  }

  bookingSelected(booking: Booking) {
    this.show = true;
    this.booking = booking;
  }

  collapse() {
    this.show = false;
  }

  closeDetail(animation: AnimationEvent) {
    if(!animation.toState) {
      this.booking = null;
    }
  }
}
