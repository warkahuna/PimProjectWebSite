import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';


export const routes = [
  { path: '', component: ProductsListComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ProductsListComponent, ProductDialogComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class ProductsListModule { }
