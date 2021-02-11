import { Product } from './../product/product.model';

export class TicketItem {

  constructor(public product: Product, public qty: number = 1) {}

  get total(): number {
    return this.product.price * this.qty;
  }
}

export enum DiscountOptions {
  PERCENT = 'percent',
  FIX = 'fix',
  FREETAX = 'free-tax'
}

type DiscountType = `${DiscountOptions}`;

export interface Discount {
  type: DiscountType;
  amount?: number;
  code?: string;
  applyDiscount?: (amount: number) => number;
}

export class PercentDiscount implements Discount {
  type: DiscountType = DiscountOptions.PERCENT;

  constructor(public amount: number, public code: string) {}

  public applyDiscount(amount: number): number {
    return amount * ((100 - this.amount) / 100);
  };
}

export class FixDiscount implements Discount {
  type: DiscountType = DiscountOptions.FIX;

  constructor(public amount: number, public code: string) {}

  public applyDiscount(amount: number): number {
    return amount - this.amount;
  };
}

export class TaxFreeDiscount implements Discount {
  type: DiscountType = DiscountOptions.FREETAX;

  constructor(public code: string) {}
}

export class Ticket {
  public itemList: TicketItem[] = [];
  public discountList: Discount[] = [];

  get totalWithoutTaxOrDiscount(): number {
    return this.itemList
    .reduce((acc: number, current: TicketItem) => acc + current.total, 0);
  }

  get amountItems(): number {
    return this.discountList
    .filter(discount => discount.type !== DiscountOptions.FREETAX)
    .reduce((acc: number, discount: Discount) => discount.applyDiscount(acc), this.totalWithoutTaxOrDiscount);
  }

  get parseTaxPercent(): number {
    return this.discountList.every(discount => discount.type !== DiscountOptions.FREETAX) ? (this.tax / 100) + 1 : 1;
  }

  get total(): number {
    return this.amountItems * this.parseTaxPercent;
  }

  constructor(
    public bookingName: string,
    public people: number,
    public table: number,
    public bookDate: Date = new Date(),
    public tax: number = 21
  ) {}

  public addItem(product: Product): void {
    const existenProduct = this.itemList.find(item => item.product.id === product.id);
    if (existenProduct) {
      existenProduct.qty++;
      return;
    }

    this.itemList = [...this.itemList, new TicketItem(product)];
  }

  public removeItem(product: Product): void {
    const existenProduct = this.itemList.find(item => item.product.id === product.id);
    if (existenProduct) {
      existenProduct.qty--;
    }

    if (existenProduct.qty <= 0) {
      this.itemList = this.itemList.filter(item => item.product.id !== product.id);
    }
  }

  public addDiscount(discount: Discount): void {
    this.discountList.push(discount);

    this.discountList.sort((a, b) => {
      if (a.type === b.type) {
        return 0;
      }

      if (a.type === DiscountOptions.FIX && b.type === DiscountOptions.PERCENT) {
        return -1;
      }

      return 1;
    });
  }

  public removeDiscount(discount: Discount): Ticket {
    this.discountList = this.discountList.filter(d => d.code !== discount.code);
    return this;
  }
}
