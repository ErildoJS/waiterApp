
import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find()

  return response.json(products)
  } catch (error) {
    response.sendStatus(500)
  }
}