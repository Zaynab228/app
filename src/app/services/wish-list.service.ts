import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishListProduct=new BehaviorSubject<string[]>([])
  constructor(private httpClient:HttpClient) { 
    this.getAllWishList().subscribe({
      next:(response)=>{

        console.log(response.data);//array of productInterface but i need array of 
        
      this.wishListProduct.next((response.data as Product[]).map((product)=>{return product._id} ))
      },
      error:(err) =>{
        console.log(err);
        
      },
    })
  }
  addToWishList(productId:string):Observable<any>
  {
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:productId})
  }
  getAllWishList():Observable<any>
  {
   return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist")
  }
   removeFromWishList(productId:string):Observable<any>
  {
   return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`)
  }
}
