import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


export const routes = [
  { path: '', component: CreateProductComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CreateProductModule { }
