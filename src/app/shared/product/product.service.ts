import { productList } from './product-list';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productList = new BehaviorSubject(productList);
  productList$ = this.productList.asObservable();

  constructor() {}
}
