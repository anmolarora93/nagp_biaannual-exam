import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products, Product } from 'product';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  productsList: [Product]

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => this.processAllProducts(response))
  }

  processAllProducts(response) {
    response.forEach(function (product) {
      this.productsList.push(product)
    }, this)
  }

}
