import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
 @Input() fullwidthMode = false;
 product : Product | undefined = {
  id : 1,
title : "Snickrs" ,
price : 250,
category : "shoes",
description : "description",
image : "https://via.placeholder.com/150"
 };
 
 @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart() : void {
    console.log("product added to the cart");
    this.addToCart.emit(this.product);
    
  }
}
