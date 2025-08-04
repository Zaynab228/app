import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(listOfProduct: Product[],term:string): Product[] {
    return listOfProduct.filter((product)=>{ return product.title.toLowerCase().includes(term.toLowerCase())});
  }

}
