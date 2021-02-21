import { Booking } from './booking.model';

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'bookingFilter'})
export class BookingFilterPipe implements PipeTransform {
  transform(bookingList: Booking[], search: string, type: string | null): Booking[] {
    let filteredBookList: Booking[] = bookingList;

    if (search) {
      filteredBookList = filteredBookList.filter(booking => booking.bookingInfo.includes(search));
    }

    if (type && type === 'charged' || type === 'pending') {
      const charged = type === 'charged';
      filteredBookList = filteredBookList.filter(booking => booking.order.charged === charged);
    }

    return filteredBookList;
  }
}
