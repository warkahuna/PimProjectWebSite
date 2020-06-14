import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../../Models/product'
import { MejdaService } from '../../Services/mejda.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ProductDialogComponent } from './product-dialog/product-dialog.component';


import { FileUploadService } from "../../Services/file-upload.service";
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {



  @Input('products') products: Array<Product> = [];

  public quantity:number = 1;
  Products: any = [];

  constructor(public fileUploadService: FileUploadService, public mejdaService:MejdaService,
    public snackBar: MatSnackBar ,  public dialog: MatDialog, private router: Router) {
    this.getProducts();
  }

  ngOnInit() { }

  getProducts() {
    this.fileUploadService.getProducts().subscribe((res) => {
      this.Products = res['products'];
    })
  }


  public getQuantity(val){
    this.quantity = val.soldQuantity;
  }



  public openProductDialog(product){
    let dialogRef = this.dialog.open(ProductDialogComponent, {
        data: product,
        panelClass: 'product-dialog',
    });
    dialogRef.afterClosed().subscribe(product => {
      if(product){
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }



}

