import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkRepassword } from '../../../CustomValidator/checkPasswods';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
constructor(private authService:AuthService, private router:Router){
  }
  // proprty to catch error massage
errorMessage:string="";
isloading=false;
signUpSubscription!:Subscription;
handleSubmit(){
    console.log(this.signUpObjectForm)
  //chek form validation before send request or subscribe
  if(this.signUpObjectForm.valid){
    //send request
  //after submitionEvent
  this.isloading=true;
  this.signUpSubscription= this.authService.signUp(this.signUpObjectForm.value).subscribe(
    {
      next:(response)=>{
        this.router.navigate(['/login'])
        this.isloading=false;//after get response or error
      },
      error:(err)=>{
        console.log(err.error.message);
        //update respnseErrormassage
        this.errorMessage=err.error.message;
        this.isloading=false; //after get response or error
      }
    }
  )
}
}
ngOnDestroy():void{
this.signUpSubscription.unsubscribe();
}
//key pairs controls
 signUpObjectForm:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
  email:new FormControl("",[Validators.required ,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{5,}$/)]),
  rePassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{5,}$/)]),
  phone:new FormControl("",[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
 },{validators:checkRepassword})
}
