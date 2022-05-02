import ProductsModel from '@models/Products';
import { RequestHandler } from 'express';

const getProducts: RequestHandler = (req, res) => {
  const gender = req.query.gender;
  if(gender && gender !== 'all') {
    ProductsModel.find({gender}).limit(10).then((result) => {
      res.deliver(result)
    })
  } else {
    ProductsModel.aggregate([{$sample: {size: 20}}]).then((result) => {
      res.deliver(result)
    })
  }
};

export default getProducts;
