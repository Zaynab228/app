import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent implements OnDestroy {
 constructor(private route:Router, private authService:AuthService){

  }
  verfiySubSubcription!:Subscription
   errorMessage!:string
  isloading=false;
  verifyCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl("",Validators.required)
  })
  ngOnDestroy(): void {
    if(this.verfiySubSubcription){
      this.verfiySubSubcription.unsubscribe();
    }
  }
 
handleVerfyCodeForm(){
if(this.verifyCodeForm.valid){
this.isloading=true;
 this.verfiySubSubcription=this.authService.Verifycode(this.verifyCodeForm.value).subscribe({
  next:()=>{
this.isloading=false;
  this.route.navigate(['/resetpassword'])
  },
  error:(error)=>{
    this.isloading=false;
    console.log(error);
    this.errorMessage=error.error.message    
  }
})
}}}
