import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
const STORE_BASE_URL = "https://fakestoreapi.com";
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpCliet : HttpClient) { }


  getAllProduct(limit = '12', sore='desc'): Observable<Array <Product>> {
    return this.httpCliet.get<Array<Product>>(

      `${STORE_BASE_URL}/products?$sort=${sore}&limit=${limit}`
    )
  }
}
