import ProductsModel from '@models/Products';
import UserModel from '@models/User';
import { RequestHandler } from 'express';
import validateFields from 'utils/validateFields';

const postProducts: RequestHandler = async (req, res) => {
  // validate as admin
  const {user: {id}} = req.state;
  try {
    const userData = await UserModel.findById(id);
    if(userData.admin){
      // validate fields
      const result = validateFields(req.body);
      if(!result) return res.status(400).deliver("Missing payload!");
    
      // create product
      ProductsModel.create(result).then(() => {
        res.deliver("Product Added!")
      }).catch((error) => {
        console.log(error)
        res.status(500).deliver("Some Error Occurred!");
      })
    } else {
      res.status(403).deliver("You are not an admin!")
    }
  } catch (error) {
    res.status(500).deliver("Error Occurred!")
  }
};

export default postProducts;
