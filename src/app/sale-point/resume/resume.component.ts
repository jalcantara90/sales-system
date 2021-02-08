import { Discount } from './../../shared/ticket/ticket.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../shared/ticket/ticket.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() removeDiscount: EventEmitter<Discount> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get hasFreeTax(): boolean {
    return this.ticket.discountList.some(discount => discount.type === 'free-tax');
  }
}
