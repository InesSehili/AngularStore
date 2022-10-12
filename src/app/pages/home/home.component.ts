import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html' 
})
export class HomeComponent implements OnInit {
  colsCount =3 ;
  category : string |undefined;
  constructor() { }

  ngOnInit(): void {
  }


  onColumnsChange(colsNum : number) : void {
    this.colsCount = colsNum;
  }
  onChangeCategory(cat : string) : void{
    this.category = cat;
  }

}
