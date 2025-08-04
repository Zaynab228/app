import { CartResponseData } from "./cart-response-data";
import { CartResponseProduct } from "./cart-response-product";

export interface CartResponse {
cartId:string,
data:CartResponseData,
numOfCartItems:number,
status:string
}

