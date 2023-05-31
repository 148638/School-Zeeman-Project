import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { product } from '../../shared/domain';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  currentProduct: product | undefined;
  currentImage: string | undefined;

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {
    this.currentProduct = this.productService.getProductById(
      Number(this.router.url.split('/')[2])
    );
    this.currentImage = this.currentProduct?.images[0];
  }

  ngOnInit() {}

  public nextImage = (): void => {
    const index = this.currentProduct?.images.indexOf(this.currentImage!);
    if (index! < this.currentProduct?.images.length! - 1) {
      this.currentImage = this.currentProduct?.images[index! + 1];
    } else {
      this.currentImage = this.currentProduct?.images[0];
    }
  };

  public prevImage = (): void => {
    const index = this.currentProduct?.images.indexOf(this.currentImage!);
    if (index! > 0) {
      this.currentImage = this.currentProduct?.images[index! - 1];
    } else {
      this.currentImage =
        this.currentProduct?.images[this.currentProduct?.images.length! - 1];
    }
  };

  addToCart = (product: product): void => {
    alert(`${product.name} would now have been added to cart!`);
  };

  addToWishlist = (product: product): void => {
    alert(`${product.name} would now have been added to wishlist!`);
  };
}
