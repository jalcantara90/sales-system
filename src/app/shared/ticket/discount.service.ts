import { Discount, PercentDiscount, FixDiscount, TaxFreeDiscount } from './ticket.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  private readonly discounList: Discount[] = [
    new PercentDiscount(15, '15%DISC'),
    new PercentDiscount(20, '20%DISC'),
    new FixDiscount(30, '30DISC'),
    new TaxFreeDiscount('FREETAX')
  ];

  constructor() {}

  public checkDiscountCode(code: string): Discount {
    return this.discounList.find(discount => discount.code === code);
  }
}
