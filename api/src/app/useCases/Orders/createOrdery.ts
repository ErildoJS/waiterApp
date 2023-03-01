

import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Order } from "../../entities/Order";
import { Product } from "../../entities/Product";

export async function createOrdery(request: Request, response: Response) {
  try {
    const {table, products} = request.body

    const order = await Order.create({
      table,
      products
    })

    response.status(201).json(order)
    
  } catch (error) {
    response.sendStatus(500)
  }
}