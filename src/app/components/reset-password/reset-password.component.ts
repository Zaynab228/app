import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
 constructor(private route:Router, private authService:AuthService){

  }
 resetPassordForm:FormGroup=new FormGroup({
  newPassword:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.email,Validators.required])
 })
 isloading=false;
 errorMessage="";
 ResetSubSubcription!:Subscription
 handleResetPassword(){
if(this.resetPassordForm.valid){
this.isloading=true;
 this.ResetSubSubcription=this.authService.ResetPassword(this.resetPassordForm.value).subscribe({
  next:(response)=>{
this.isloading=false;
  this.route.navigate(['/home'])
  },
  error:(error)=>{
this.isloading=false;
    console.log(error);
    
    this.errorMessage=error.error.message
  }
 })
}
 }
  ngOnDestroy(): void {
    if(this.ResetSubSubcription){
this.ResetSubSubcription.unsubscribe();
    }
  }
}
