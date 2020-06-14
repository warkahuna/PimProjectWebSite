import { Component, ViewEncapsulation, OnInit, Inject} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Product } from '../../../Models/product';
import { Data, MejdaService } from '../../../Services/mejda.service';
import {  MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  public config: SwiperConfigInterface = {};
  constructor(public mejdaService:MejdaService,
              public dialogRef: MatDialogRef<ProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product) { }


  ngOnInit(): void {
  }



  public close(): void {
    this.dialogRef.close();
  }

}


