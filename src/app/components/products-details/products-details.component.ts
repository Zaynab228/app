import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
 @Input() id!:string ;
productDetails!:Product;
constructor(private productsevices:ProductService ,private activatedRoute:ActivatedRoute){

}
ngAfterViewInit() {
    // تهيئة Swiper بعد تحميل العناصر
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true, // تفعيل الـ loop
      slidesPerView: 1, // عدد الشرائح في العرض
      spaceBetween: 10, // المسافة بين الشرائح
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.activatedRoute.paramMap.subscribe({
    //   next:(params) =>{
    //    this.protectedId= params.get('id')
    //    if(this.protectedId!=null)
    //    this.productsevices.getProductDetails(this.protectedId).subscribe({
    //     next:(response)=>{
    //       if(response.data!=null){
    //       this.productDetails=response.data
    //       }
    //     }
    //     ,
    //     error:(error)=>{console.log(error) }
    //    })
    //   },
    // }
    if(changes['id'].previousValue!=changes['id'].currentValue)
    this.productsevices.getProductDetails(this.id).subscribe({
          next:(response)=>{
            console.log("zaynab");
            
            if(response.data!=null){
           this.productDetails=response.data
           }
          },
          error:(error)=>{
          console.log(error);
          
          }
    })
  }
}
