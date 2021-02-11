import { DiscountService } from './../../shared/ticket/discount.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.scss']
})
export class CouponCodeComponent implements OnInit, OnDestroy {
  couponCode: FormControl = new FormControl('');
  @Output() applyDiscount: EventEmitter<string> = new EventEmitter();

  error$ = this.discountService.discountNotMatch$;
  private subscription: Subscription;

  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {
    this.subscription = this.discountService.discountMatch$
      .subscribe(() => this.couponCode.reset());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  apply(): void {
    this.applyDiscount.emit(this.couponCode.value);
  }
}
