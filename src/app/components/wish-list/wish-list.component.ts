import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { Product } from '../../interfaces/product';
import { CartResponseData } from '../../interfaces/cart-response-data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {
  listOfwishListProduct!:Product[]
   constructor(private wishlistServise:WishListService, private cartService:CartService){}
   getwishList(){
     this.wishlistServise.getAllWishList().subscribe({
      next:(response)=>{
        this.listOfwishListProduct=response.data
        console.log(response);
        
        
      },
      error:(err) =>{
        console.log(err);
        
      },
    })
   }
   ngOnInit(){
   this.getwishList()
   }
    deleteItem(id:string){
       this.wishlistServise.removeFromWishList(id).subscribe({
         next:(response)=>{
          console.log(response);
          //notify wishlist product
          this.wishlistServise.wishListProduct.next(response.data)
          this.getwishList()
         }
       })
     }
  addProductTocart(id:string){
  console.log(id);
  
 this.cartService.addproductToCart(id).subscribe({
  next:(response)=>{
  console.log(response.data);
  
  }
 })
 }
}
