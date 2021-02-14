import { Ticket } from "./ticket.model";

let bookingId = 0;

export class Booking {
  bookingId: string;
  order = new Ticket();

  constructor(
    public bookingName: string,
    public people: number,
    public table: number,
    public bookingDate: Date = new Date()
  ) {
    this.bookingId = this.generateBookingId();
  }

  private generateBookingId(): string {
    bookingId++;
    return bookingId.toString().padStart(6, '0');
  }

  get bookingInfo(): string {
    return `INV-${this.bookingId} - ${this.bookingName}`;
  }
}
