import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private HttpClient:HttpClient) { }
  getAllcategory():Observable<any>{
    return this.HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
  }
   getProductByCategoryID(id:string):Observable<any>{
    return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`)
  }
}
