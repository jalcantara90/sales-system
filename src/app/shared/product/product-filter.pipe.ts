import { FoodOrBeverageType, Product } from './product.model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], filters: FoodOrBeverageType): Product[] {
    const setFilters = new Set(filters);
    if (!setFilters.size) {
      return products;
    }

    return products.filter(p => setFilters.has(p.type));
  }
}
