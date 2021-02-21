import { Booking } from './../../shared/ticket/booking.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.scss']
})
export class OrderResumeComponent {
  @Input() booking: Booking;
  @Output() close = new EventEmitter();

  constructor() { }
}
