import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 productList:Product[]=[]
  prouductServices=inject(ProductService);
  cartService=inject(CartService);

 ngOnInit(): void {
    this.prouductServices.getAllProducts().subscribe({
      next:(response)=>{        
       this.productList=response.data
      },error:(error)=>{
        console.log(error);
        
      }
    })
  }
}
