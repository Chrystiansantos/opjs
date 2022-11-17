import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrders(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndRemove(orderId);
    return res.sendStatus(204);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

}
