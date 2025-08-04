import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService:CategoryService ){}
  listOfCategories!:Category[]
  listOfProduct!:Product[]
  ngOnInit(): void {
    this.categoryService.getAllcategory().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.listOfCategories=response.data
      }
    })
  }
 getProductByCategoryId(id:string){
  this.categoryService.getProductByCategoryID(id).subscribe({
    next:(response)=> {
      console.log(response.data);
      this.listOfProduct=response.data
    },
  })
 }
}
