import { Discount, PercentDiscount, FixDiscount, TaxFreeDiscount } from './ticket.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  private readonly discounList: Discount[] = [
    new PercentDiscount(15, '15%DISC'),
    new PercentDiscount(20, '20%DISC'),
    new FixDiscount(30, '30DISC'),
    new TaxFreeDiscount('FREETAX')
  ];

  private discountNotMatch = new Subject() ;
  private discountMatch = new Subject();

  public discountNotMatch$ = this.discountNotMatch.asObservable();
  public discountMatch$ = this.discountMatch.asObservable();

  constructor() {}

  public checkDiscountCode(code: string): Discount {
    const discount = this.discounList.find(discount => discount.code === code);

    discount ? this.discountMatch.next() : this.notMatch();

    return discount;
  }

  private notMatch() {
    this.discountNotMatch.next('NOTMATCH');
    setTimeout(() => this.discountNotMatch.next(), 1500);
  }
}
