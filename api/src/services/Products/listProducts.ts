import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:'Internal server error'});
  }
}
