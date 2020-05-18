import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import {MatStepperModule} from '@angular/material/stepper';



import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};


@NgModule({
imports: [
CommonModule,
RouterModule,
SwiperModule,
FlexLayoutModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatSidenavModule,
MatBadgeModule,
MatListModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatRadioModule,
MatDatepickerModule,
MatChipsModule,
MatTooltipModule,
MatSnackBarModule,
MatTableModule,
MatPaginatorModule,
ReactiveFormsModule,
MatDialogModule,
MatCardModule,
MatStepperModule
],
exports: [
RouterModule,
SwiperModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatSidenavModule,
MatBadgeModule,
MatListModule,
MatGridListModule,
MatInputModule,
MatFormFieldModule,
MatSelectModule,
MatRadioModule,
MatDatepickerModule,
MatChipsModule,
MatTooltipModule,
MatSnackBarModule,
MatTableModule,
MatPaginatorModule,
PerfectScrollbarModule,
ReactiveFormsModule,
MatDialogModule,
MatCardModule,
MatStepperModule

],
providers: [
  { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
MatDatepickerModule,
],
declarations: []
})
export class SharedModule { }
