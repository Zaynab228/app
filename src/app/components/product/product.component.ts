import { Component, Input, input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { WishListService } from '../../services/wish-list.service';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  wishListProduct!:string[]
  constructor(private cartservice:CartService,private wishlistServise:WishListService){

  }
  ngOnInit(): void {
    this.wishlistServise.wishListProduct.subscribe({
      next:(wishList)=>{
        this.wishListProduct=wishList
      }
    })
  }
 @Input()product!:Product
isInwishlist(id:string){
  return this.wishListProduct.includes(id)
}
 addProductTocart(id:string){
  console.log(id);
  
 this.cartservice.addproductToCart(id).subscribe({
  next:(response)=>{
    this.cartservice.updateNumberCatItems()
  console.log(response.data);
  
  }
 })
 }
 addtoWishListProduct(prooductId:string){
    this.wishlistServise.addToWishList(prooductId).subscribe({
      next:(response)=>{
         console.log(response);
        //notify wishlist product
          this.wishlistServise.wishListProduct.next(response.data)
      }
    })
   }
}
