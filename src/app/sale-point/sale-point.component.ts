import { ProductService } from './../shared/product/product.service';
import { ProductFilters } from './../shared/product/product-filter.interface';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from './../shared/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product.model';
import { map, throttleTime, startWith, filter } from 'rxjs/operators';
import { Booking } from '../shared/ticket/booking.model';
import { Observable } from 'rxjs';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {
  bookingList$: Observable<Booking[]> ;
  productList$: Observable<Product[]> ;

  filtersAndOrder = new FormGroup({
    filters: new FormControl([]),
    searchAndOrder: new FormControl({ search: '', order: null })
  });

  filter$: Observable<ProductFilters>;

  constructor(
    private ticketService: TicketService,
    private productService: ProductService,
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
    this.bookingList$ = this.ticketService.bookingList$;
    this.productList$ = this.productService.productList$;

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
        };
      })
    );
  }

  addProductTicket(product: Product): void {
    this.ticketService.addProductTicket(product);
  }

  selectBooking(bookingId: string) {
    this.ticketService.selectBooking(bookingId);
  }

  openOrderForm() {
    const orderFormRef = this.dialog.open(OrderFormComponent);
    orderFormRef.afterClosed$.pipe(
      filter(result => !!result)
    ).subscribe((bookingInfo: Booking) => {
      const booking = new Booking(bookingInfo.bookingName, bookingInfo.people, bookingInfo.table, bookingInfo.bookingDate);
      this.ticketService.addBooking(booking);
    });
  }
}
