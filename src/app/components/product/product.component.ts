import { Component, Input, input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private cartservice:CartService){

  }
 @Input()product!:Product
 addProductTocart(id:string){
  console.log(id);
  
 this.cartservice.addproductToCart(id).subscribe({
  next:(response)=>{
    this.cartservice.updateNumberCatItems()
  console.log(response.data);
  
  }
 })
 }
}
