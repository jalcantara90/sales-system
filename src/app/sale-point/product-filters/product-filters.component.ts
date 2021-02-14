import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductFiltersComponent),
      multi: true
    }
  ]
})
export class ProductFiltersComponent implements OnInit, OnDestroy, ControlValueAccessor {
  productFilters = new FormGroup({
    search: new FormControl(''),
    order: new FormControl(null)
  });

  searchSub = new Subscription();

  public onChange: any = (_: any) => {};
  public onTouch: any = () => {};

  constructor() { }

  ngOnInit(): void {
    this.searchSub = this.productFilters.valueChanges.subscribe(filters => {
      this.onChange(filters);
      this.onTouch();
    });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  writeValue(filters: { search: string, order: string }): void {
    this.productFilters.setValue(filters);
    this.onChange(filters);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
