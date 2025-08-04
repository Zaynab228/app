import { CartResponseProduct } from "./cart-response-product";
import { Product } from "./product";

export interface CartResponseData {
cartowner:string,
products: CartResponseProduct[],
totalCartPrice:number,
id:string
}
