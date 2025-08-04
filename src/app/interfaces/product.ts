import { Brands } from "./brands";
import { Category } from "./category";
import { SubCategory } from "./sub-category";

export interface Product {
    sold?:number,
    images?:string[],
    subcategory:SubCategory[],
    ratingQuantity?:number,
    _id:string,
    title:string,
    description:string,
    quantity:number,
    price?:number,
    imageCover:string,
    brand:Brands,
    category:Category,
    ratingsAverage:number
}
