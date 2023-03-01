import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";

export async function listProductsByCategory(request: Request, response: Response) {
  try {
    const {categoryId} = request.params
    const products = await Product.find().where('category').equals(categoryId)

  return response.json(products)
  } catch (error) {
    response.sendStatus(500)
  }
}
