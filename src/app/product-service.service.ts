import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private product_URL = "http://localhost:4000/products";

  constructor(private HttpClient: HttpClient) { }

  getAllProducts() {
    return this.HttpClient.get(this.product_URL)
  }
}
