import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { homeRoute, idRoute, noRoute, productRoute } from './shared/routes';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  {
    path: noRoute,
    redirectTo: homeRoute,
    pathMatch: 'full',
  },
  {
    path: homeRoute,
    component: HomeComponent,
  },
  {
    path: productRoute,
    children: [
      {
        path: noRoute,
        component: ProductsComponent,
      },
      {
        path: idRoute,
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
