import { Component } from '@angular/core';
import { homeRoute, productRoute } from './shared/routes';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: homeRoute, icon: 'home' },
    { title: 'Products', url: productRoute, icon: 'list' },
  ];
  constructor() {}
}
