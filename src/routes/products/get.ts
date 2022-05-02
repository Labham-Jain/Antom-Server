import ProductsModel from '@models/Products';
import { RequestHandler } from 'express';

const getProducts: RequestHandler = (req, res) => {
  ProductsModel.aggregate([{$sample: {size: 20}}]).then((result) => {
    res.deliver(result)
  })
};

export default getProducts;
