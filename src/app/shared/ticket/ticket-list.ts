import { beefRamen, shrimpsRamen, sake, water } from "../product/product-list";
import { Booking } from "./booking.model";

export const booking1 = new Booking('Netanel Basal', 4, 21);
booking1.order.addItem(beefRamen);
booking1.order.addItem(shrimpsRamen);
booking1.order.addItem(sake);
booking1.order.addItem(water);
booking1.order.addItem(sake);
booking1.order.charged = true;

export const booking2 = new Booking('Jonathan Alcántara', 2, 12);
booking2.order.charged = true;
export const booking3 = new Booking('Kamil Mysliwiec', 6, 2);
export const booking4 = new Booking('Brandon Roberts', 4, 16);
export const booking5 = new Booking('Jonathan Alcántara', 2, 12);
booking5.order.charged = true;
export const booking6 = new Booking('Kamil Mysliwiec', 6, 2);
export const booking7 = new Booking('Brandon Roberts', 4, 16);
export const booking8 = new Booking('Jonathan Alcántara', 2, 12);
booking8.order.charged = true;
export const booking9 = new Booking('Kamil Mysliwiec', 6, 2);
export const booking10 = new Booking('Brandon Roberts', 4, 16);

export const bookingList = [
  booking1,
  booking2,
  booking3,
  booking4,
  booking5,
  booking6,
  booking7,
  booking8,
  booking9,
  booking10,
];
