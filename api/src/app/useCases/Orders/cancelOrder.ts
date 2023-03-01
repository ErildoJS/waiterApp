

import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Order } from "../../entities/Order";
import { Product } from "../../entities/Product";

export async function cancelOrder(request: Request, response: Response) {
  try {
    const {orderId} = request.params

     await Order.findByIdAndDelete(orderId)

    response.sendStatus(204)
    
  } catch (error) {
    response.sendStatus(500)
  }
}