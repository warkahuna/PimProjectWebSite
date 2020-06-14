import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


export const routes = [
  { path: '', component: WishlistComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [WishlistComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class WishlistModule { }
