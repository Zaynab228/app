import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartResponse } from '../interfaces/cart-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   numberOfCartItems=new BehaviorSubject<number>(0)
   httpClient=inject(HttpClient)
  addproductToCart(id: string): Observable<any> {
   
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart", { productId: id });
  }

  getLoggedUserCart(): Observable<any> {
  
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart", );
  }
  deleteFromCartItem(id:string): Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`);
  }
   updateQuantity(id:string,count:number): Observable<any> {
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count});
  }
   removeAllItem(): Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`);
  }
  updateNumberCatItems()
  {
    return this.getLoggedUserCart().subscribe({
      next:(response:CartResponse)=>{
          //notify with cartnumberitems
          this.numberOfCartItems.next(response.numOfCartItems)
      }
    })
  }
}
