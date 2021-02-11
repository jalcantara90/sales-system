import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { enterRight } from './../../shared/animations/enter-right.animation';
import { FoodOrBeverage, FoodOrBeverageType, Product } from './../../shared/product/product.model';

class ProductSelection {
  products: Product[];
  active: boolean = false;
  constructor(public type: FoodOrBeverageType, public qty: number) {}
}

@Component({
  selector: 'app-product-type-selection',
  templateUrl: './product-type-selection.component.html',
  styleUrls: ['./product-type-selection.component.scss'],
  animations: [enterRight],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductTypeSelectionComponent),
      multi: true
    }
  ]
})
export class ProductTypeSelectionComponent implements OnInit, ControlValueAccessor {
  productSelection: ProductSelection[];
  selected: Set<FoodOrBeverageType> = new Set();

  public onChange: any = (_: any) => {};
  public onTouch: any = () => {};

  constructor() { }

  writeValue(selected: FoodOrBeverageType[]): void {
    this.selected = new Set(selected);
    this.selectProducts();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.productSelection = [
      new ProductSelection(FoodOrBeverage.SNACK, 4),
      new ProductSelection(FoodOrBeverage.NOODLES, 1),
      new ProductSelection(FoodOrBeverage.CHICKEN, 1),
      new ProductSelection(FoodOrBeverage.RAMEN, 2),
      new ProductSelection(FoodOrBeverage.TATAKI, 1),
      new ProductSelection(FoodOrBeverage.SUSHI, 2),
      new ProductSelection(FoodOrBeverage.DESSERT, 2),
      new ProductSelection(FoodOrBeverage.BEVERAGE, 3),
    ];
  }

  select(type: FoodOrBeverageType): void {
    if (this.selected.has(type)) {
      this.selected.delete(type);
    } else {
      this.selected.add(type);
    }

    this.selectProducts();
  }

  selectProducts() {
    this.productSelection.map((p) => {
      p.active = this.selected.has(p.type);
      return p;
    });
    this.onChange(Array.from(this.selected));
  }

}
