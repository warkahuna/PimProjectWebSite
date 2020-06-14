import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


export const routes = [
  { path: '', component: CartComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
