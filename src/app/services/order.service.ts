import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclint:HttpClient) { }
CheckoutSession(form:any,cartId:string):Observable<any>
 {
  return this.httpclint.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAddress:form})
  }
cashOrder(form:any,cartId:string):Observable<any>
 {
  return this.httpclint.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{shippingAddress:form})
  }
}
