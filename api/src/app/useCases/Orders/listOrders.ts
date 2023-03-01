
import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Order } from "../../entities/Order";
import { Product } from "../../entities/Product";

export async function listOrders(request: Request, response: Response) {
  try {
    const orders = await Order.find()
    .sort({createdAt: 1})//os pedidos + antigos vao estar em primeiro
    .populate('products.product')

  return response.json(orders)
  } catch (error) {
    response.sendStatus(500)
  }
}