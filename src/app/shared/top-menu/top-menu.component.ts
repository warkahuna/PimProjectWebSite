import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data, MejdaService } from '../../Services/mejda.service';
import { Product } from '../../Models/product';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public mejdaService:MejdaService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
