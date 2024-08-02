import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-navigation-bar',
  templateUrl: './nav-navigation-bar.component.html',
  styleUrl: './nav-navigation-bar.component.css'
})
export class NavNavigationBarComponent {
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Product',
        icon: 'pi pi-fw pi-file',
        routerLink: '/product'
      },
      {
        label: 'Category',
        icon: 'pi pi-fw pi-tags',
        routerLink: '/category'
      },
      {
        label: 'Brand',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/brand'
      },
      {
        label: 'Sub Brand',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/sub-brand'
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/login'
      }
    ];
  }

}
