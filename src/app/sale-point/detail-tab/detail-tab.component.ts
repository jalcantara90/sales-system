import { Booking } from './../../shared/ticket/booking.model';
import { Observable } from 'rxjs';
import { TicketService } from './../../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../shared/ticket/ticket.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-tab',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent implements OnInit {

  ticket$: Observable<Booking>;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticket$ = this.ticketService.ticket$;
  }

}
