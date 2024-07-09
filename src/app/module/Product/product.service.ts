import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProduct=async(payload:TProduct)=>{
const result =await Product.create(payload)
}
export const ProductServices ={
    createProduct
}