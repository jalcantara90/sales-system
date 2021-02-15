import { FoodOrBeverageType } from "./product.model";

export interface ProductFilters {
  filters: FoodOrBeverageType[];
  order: string;
  search: string;
}
