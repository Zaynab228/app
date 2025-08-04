import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Route, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.css'
})
export class ShippingAddressComponent {
  @Input() id!:string
   @Input() type!:string

  constructor(private orderservice:OrderService,private router:Router ,private cartservice:CartService){

  }
 sippingAddressForm=new FormGroup({
    details:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),  
    city:new FormControl('',Validators.required)
 })
 RedirectUserToPaymentBage(url:string){
  window.location.href=url
 }
 OnlinePayment(){
  console.log(this.sippingAddressForm.value);
   if(this.type=="cash"){
   this.orderservice.cashOrder(this.sippingAddressForm.value,this.id).subscribe({
    next:(response)=>{
      console.log(response);
          this.cartservice.numberOfCartItems.next(0)
         this.router.navigate(['/allorders'])
    }
    ,error:(err)=> {
      console.log(err);
         this.router.navigate(['/cart'])
    },
  })
   }else{
    this.orderservice.CheckoutSession(this.sippingAddressForm.value,this.id).subscribe({
    next:(response)=>{
      console.log(response);
      this.RedirectUserToPaymentBage(response.session.url)
    }
    ,error:(err)=> {
      console.log(err);
      
    },
  })}
  
 }
}
