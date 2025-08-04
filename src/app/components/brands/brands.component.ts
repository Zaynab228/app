import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brands } from '../../interfaces/brands';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit{
constructor(private BrandService:BrandService ){}
  listOfBrands!:Brands[]
  listOfProduct!:Product[]
  ngOnInit(): void {
    this.BrandService.getAllBrands().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.listOfBrands=response.data
      }
    })
  }
 getProductBybrandId(id:string){
  this.BrandService.getProductByBrandID(id).subscribe({
    next:(response)=> {
      console.log(response.data);
      this.listOfProduct=response.data;
    },
  })
 }
}
