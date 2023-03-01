

import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";

export async function createProduct(request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename
    const {name, description, price, category, ingredients} = request.body

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    })

    response.status(201).json(product)
    
  } catch (error) {
    response.sendStatus(500)
  }
}