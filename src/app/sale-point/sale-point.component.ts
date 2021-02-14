import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from './../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { productList } from './../shared/product/product-list';
import { map, throttleTime, startWith } from 'rxjs/operators';
import { Booking } from '../shared/ticket/booking.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {
  public productList: Product[] = productList;
  public bookingList$: Observable<Booking[]> ;

  filtersAndOrder = new FormGroup({
    filters: new FormControl([]),
    searchAndOrder: new FormControl({ search: '', order: null })
  });

  filter$;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.bookingList$ = this.ticketService.bookingList$;

    this.filter$ = this.filtersAndOrder.valueChanges.pipe(
      startWith({
        filters: [],
        order: null,
        search: ''
      }),
      throttleTime(300),
      map((filtersAndOrder) => {
        return {
          filters: filtersAndOrder.filters,
          ...filtersAndOrder.searchAndOrder
        }
      })
    );
  }

  addProductTicket(product: Product): void {
    this.ticketService.addProductTicket(product);
  }

  selectBooking(bookingId: string) {
    this.ticketService.selectBooking(bookingId);
  }
}
