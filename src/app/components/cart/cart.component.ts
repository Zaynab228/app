import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartResponse } from '../../interfaces/cart-response';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartDetials!:CartResponse|null
numOfCartItem!:number
  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
   this.cartService.getLoggedUserCart().subscribe({
    next:(response)=>{
     this.cartDetials=response
     console.log(response);
    }
   })
  }
  deletItem(id:string){
    this.cartService.deleteFromCartItem(id).subscribe({
      next:(response:CartResponse)=>{
       this.cartDetials=response
       this.cartService.numberOfCartItems.next(response.numOfCartItems)
      }
    })
  }
  updateQuanity(id:string ,count:number){
    this.cartService.updateQuantity(id,count).subscribe({
        next:(response)=>{
          console.log(response);
          
         this.cartDetials=response
         this.cartService.numberOfCartItems.next(response.numOfCartItems)
        },
        error:(err) =>{
          console.log(err);
          
        },
    })
  }
  RemoveAllItem(){
    this.cartService.removeAllItem().subscribe({
      next:(response)=>{
      console.log(response);
        this.cartDetials=null
           this.cartService.numberOfCartItems.next(response.numOfCartItems)

      }
    })
  }
}
