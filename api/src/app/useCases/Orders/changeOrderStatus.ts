

import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { Order } from "../../entities/Order";
import { Product } from "../../entities/Product";

export async function changeOrderStatus(request: Request, response: Response) {
  try {
    const {orderId} = request.params
    const {status} = request.body

     if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({
        error: 'Status should be one of theses: WAITING, IN_PRODUCTION DONE'
      })
     }
    
     await Order.findByIdAndUpdate(orderId, {status})

    response.sendStatus(204)
    
  } catch (error) {
    response.sendStatus(500)
  }
}