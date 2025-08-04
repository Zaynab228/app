import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient ,private router:Router) {

   }
   
    x=localStorage.getItem('tokenApp')?true:false;
 

   

  Islogin=new BehaviorSubject<boolean> (this.x)
  signUp(singupRequestBody:any):Observable<any>{
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",singupRequestBody)////////returm observable
  }
  signIn(singinRequestBody:any):Observable<any>{
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",singinRequestBody)////////returm observable
  }
  signOut(){
    ////remove Tocken
    ////return to logIn Bage
    localStorage.removeItem('tokenApp');
    this.router.navigate(['/login'])
    this.Islogin.next(false)
  }
  forgetPassword(ForgetRequestBody:any):Observable<any>{
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",ForgetRequestBody)
  }
  Verifycode(verfyCodeForm:any):Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",verfyCodeForm)
  }
  ResetPassword(resetPasswordForm:any):Observable<any>{
   return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",resetPasswordForm)
  }
}
