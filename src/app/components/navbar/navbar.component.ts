import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  number!:number
islogedInUer=false
  constructor(private authService:AuthService ,private cartService:CartService){

  }
  ngOnInit(): void {
    this.cartService.updateNumberCatItems()
   this.authService.Islogin.subscribe({
    next:(value)=>{
  this.islogedInUer=value
      this.cartService.numberOfCartItems.subscribe({
        next:(value) =>{
          this.number=value
        }
      })
    },
   });
  }
  handleLogout(){
    this.authService.signOut()
  }
}
