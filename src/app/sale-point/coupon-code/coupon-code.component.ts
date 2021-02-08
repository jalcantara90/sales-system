import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.scss']
})
export class CouponCodeComponent implements OnInit {
  couponCode: FormControl = new FormControl('');
  @Output() applyDiscount: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  apply(): void {
    this.applyDiscount.emit(this.couponCode.value);
    this.couponCode.reset();
  }
}
