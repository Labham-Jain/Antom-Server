import { Router } from 'express';
import addUserInfo from 'utils/addUserInfo';
import MulterUpload from 'utils/multer';
import getProducts from './get';
import postProducts from './post';

const ProductsController = Router();

ProductsController.get('/', getProducts);
ProductsController.post('/', addUserInfo, MulterUpload.array("images"), postProducts);

export default ProductsController;
