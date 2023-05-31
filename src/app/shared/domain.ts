import {categories} from "./enum";

export interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: number;
  sizes: string[];
  category: categories;
}
