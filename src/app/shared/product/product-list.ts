import { Product, FoodOrBeverage } from "./product.model";

export const edamame = new Product('Edamame', FoodOrBeverage.SNACK, 4.9, 'assets/images/Edamame.png');
export const gyozas = new Product('Gyozas', FoodOrBeverage.SNACK, 6, 'assets/images/Gyozas.png');
export const shrimps = new Product('Tempura shrimps', FoodOrBeverage.SNACK, 7.0, 'assets/images/Gambas-tempura.png');
export const chickenNoodle = new Product('Chicken noodles', FoodOrBeverage.NOODLES, 9.5, 'assets/images/Noodles.png');
export const teriyakiChicken = new Product('Teriyaki chicken', FoodOrBeverage.CHICKEN, 9, 'assets/images/Pollo_teriyaki.png');
export const shrimpsRamen = new Product('Ramen with shrimps', FoodOrBeverage.RAMEN, 11.5, 'assets/images/Ramen_de_gambas.png');
export const beefRamen = new Product('Ramen with beef', FoodOrBeverage.RAMEN, 11.5, 'assets/images/Ramen_de_ternera.png');
export const tatakiSalmon = new Product('Tataki Salmon', FoodOrBeverage.TATAKI, 9.5, 'assets/images/Tataki_salmon.png');
export const uramakiSalmonAvocado = new Product('Salmon uramaki, avocado and shrimps', FoodOrBeverage.SUSHI, 9.5, 'assets/images/Uramaki_salmón_aguacate.png');
export const uramakiSalmon = new Product('Salmon uramaki and cheese', FoodOrBeverage.SUSHI, 9.5, 'assets/images/Uramaki_salmon_queso.png');
export const taiyaki = new Product('Taiyaki', FoodOrBeverage.DESSERT, 3.5, 'assets/images/Taiyaki.png');
export const mochi = new Product('Mochi', FoodOrBeverage.DESSERT, 3.5, 'assets/images/Mochi.png');
export const water = new Product('Water', FoodOrBeverage.BEVERAGE, 1.5, 'assets/images/Water.png');
export const sake = new Product('Sake', FoodOrBeverage.BEVERAGE, 3.5, 'assets/images/Sake.png');
export const lemonade = new Product('Lemonade', FoodOrBeverage.BEVERAGE, 2, 'assets/images/Lemonade.png');

export const productList = [
  edamame,
  gyozas,
  shrimps,
  chickenNoodle,
  teriyakiChicken,
  shrimpsRamen,
  beefRamen,
  tatakiSalmon,
  uramakiSalmonAvocado,
  uramakiSalmon,
  taiyaki,
  mochi,
  water,
  sake,
  lemonade
];
