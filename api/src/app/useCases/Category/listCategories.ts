import { Request, Response } from "express";
import { Category } from "../../entities/Category";

export async function listCategories(request: Request, response: Response) {
  try {
    const categories = await Category.find()

  return response.json(categories)
  } catch (error) {
    response.sendStatus(500)
  }
}