import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  const { icon, name } = req.body;
  try {
    const createCategory = await Category.create({
      icon,
      name
    });

    return res.json(createCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal server error');
  }
}
