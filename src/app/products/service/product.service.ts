import { Injectable } from '@angular/core';
import { dummyProducts } from '../../shared/data';
import {product} from "../../shared/domain";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: product[] = dummyProducts;

  constructor() {}

  public getProducts = (): product[] => {
    return dummyProducts;
  }

  public getProductById = (id: number): product | undefined => {
    return dummyProducts.find((product) => product.id === id);
  }

  public getProductsByCategory = (category: string): product[] => {
    return dummyProducts.filter((product) => product.category === category);
  }

  public getProductsBySearch = (search: string): product[] => {
    return dummyProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  }
}
