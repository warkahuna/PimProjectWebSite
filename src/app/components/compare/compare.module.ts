import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


export const routes = [
  { path: '', component: CompareComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [CompareComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class CompareModule { }
