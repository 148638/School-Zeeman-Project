import { Component, OnInit } from '@angular/core';
import { product } from '../shared/domain';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';
import {productRoute} from "../shared/routes";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products: product[] = this.productService.getProducts();

  constructor(
    readonly productService: ProductService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {}

  openProduct = (product: product): void => {
    this.router.navigate([productRoute, product.id]);
  };

  filterProducts = (event: any): void => {
    const value = event.target.value;
    if (value === 'all') {
      this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsBySearch(value);
    }
  }
}
