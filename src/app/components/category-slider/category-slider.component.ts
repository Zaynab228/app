import { Component, inject } from '@angular/core';
import { Category } from '../../interfaces/category';
import { SwiperOptions } from 'swiper/types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.css'
})
export class CategorySliderComponent {

  allCategory: Category[] = [];
  
  swiperOptions: SwiperOptions = {
    loop: true,
    allowTouchMove: false,
    speed: 700,
    pagination: {
      enabled: true,
      clickable: true
    },
    navigation: {
      nextEl: '.custom-next', // ربط الزر المخصص
      prevEl: '.custom-prev' // ربط الزر المخصص
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      940: {
        slidesPerView: 8,
        spaceBetween: 20
      }
    }
  };
  swiperRef: any;

  ngAfterViewInit() {
    if (this.swiperRef) {
      this.swiperRef.swiperRef.update();
    }
  }

  nextSlide() {
    this.swiperRef.swiperRef.slideNext();
  }

  prevSlide() {
    this.swiperRef.swiperRef.slidePrev();
  }
  ngOnInit(): void {
 this.productService.getAllCategories().subscribe({
  next:(response)=>{
   this.allCategory=response.data
  }
 })
}
productService=inject(ProductService)
}


