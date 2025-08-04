import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
 isloading=false;
 errorMessage:string=""
forgetPaawordSubscribtion!:Subscription
  constructor(private authService:AuthService ,private router:Router){

  }
  ngOnDestroy(): void {
    if(this.forgetPaawordSubscribtion){
      this.forgetPaawordSubscribtion.unsubscribe();
    }
  }
 forgetPasswordFrom=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email])
 })
 handleForgetPassword(){
  if(this.forgetPasswordFrom.valid){
    this.isloading=true;
        this.authService.forgetPassword(this.forgetPasswordFrom.value).subscribe({
          next:(response)=>{
            this.isloading=false;
            this.router.navigate(['/verifycode'])
            
          },
          error:(error)=>{
            this.isloading=false;
            this.errorMessage=error.error.message
          }
        })
  }
}
}
