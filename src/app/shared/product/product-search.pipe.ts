import { Product } from './product.model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'productSearch'})
export class ProductSearchPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {

    if (!search) {
      return products;
    }

    return products.filter(p => p.name.includes(search));
  }
}
