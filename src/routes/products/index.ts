import { Router } from 'express';
import addUserInfo from 'utils/addUserInfo';
import getProducts from './get';
import postProducts from './post';

const ProductsController = Router();

ProductsController.get('/', getProducts);
ProductsController.post('/', addUserInfo, postProducts);

export default ProductsController;
