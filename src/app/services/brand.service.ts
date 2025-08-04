import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private HttpClient:HttpClient) { }
   getAllBrands():Observable<any>{
     return this.HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
   }
    getProductByBrandID(id:string):Observable<any>{
     return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`)
   }
}
