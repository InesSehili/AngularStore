import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.component.html`
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort= 'desc';
  itemShowCount = 3;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSortupdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemShowupdated(numberOfItem : number) : void {
  this.itemShowCount = numberOfItem;
  }

  onColumnUpdated(colsNum : number) : void {
    this.columnsCountChange.emit(colsNum);
  }
}
