import { Booking } from './../../shared/ticket/booking.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input() bookingList: Booking[] = [];
  @Output() selectBooking = new EventEmitter<Booking>();

  constructor() { }
}
