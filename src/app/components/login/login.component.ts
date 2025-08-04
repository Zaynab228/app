import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private authService:AuthService ,private router:Router,private cartService:CartService){

  } 
isloading=false;
errorMessage:string="";
signInSubscribtion!:Subscription
logInFrom:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required ,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{5,}$/)])
})
ngOnDestroy(): void {
  if (this.signInSubscribtion) {
   
  this.signInSubscribtion?.unsubscribe();
  }
}

handleLogIn(){
if(this.logInFrom.valid){
  this.isloading=true
this.signInSubscribtion=this.authService.signIn(this.logInFrom.value).subscribe({
        next:(response:any)=>{
          console.log('Response:', response);
          this.cartService.updateNumberCatItems();
            const token = response.token || response.access_token || response.data?.token;
              localStorage.setItem('tokenApp', token);
              this.router.navigate(['/home']);
              this.isloading=false;
        },
        error:(error)=>{
          console.log('Error:', error);
          this.errorMessage=error.error?.message;
          this.isloading=false;
        }
      })
}
}
}
