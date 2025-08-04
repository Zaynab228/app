import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
listOfProduct!:Product[]
 searchTerm:string=""
constructor(private productService:ProductService){

}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(response) =>{
        console.log(response.data);
        this.listOfProduct=response.data
        
      },
    })
  }

}
