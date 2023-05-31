import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/service/product.service';
import { product } from '../shared/domain';
import { Router } from '@angular/router';
import { productRoute } from '../shared/routes';
import { categories } from '../shared/enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProduct: product;
  categories = [
    categories.MEN,
    categories.WOMEN,
    categories.UNISEX,
    categories.KIDS,
    categories.HOME,
    categories.ACCESSORIES,
  ];

  constructor(
    readonly productService: ProductService,
    private readonly router: Router
  ) {
    this.featuredProduct =
      this.productService.products[
        (Math.random() * this.productService.products.length) | 0
      ];
  }

  ngOnInit() {}

  goToFeaturedProduct = (): void => {
    this.router.navigate([productRoute, this.featuredProduct.id]);
  };

  goToProducts = (): void => {
    this.router.navigate(['/products']);
  };
}
