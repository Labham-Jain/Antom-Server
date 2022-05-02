import UserModel from "@models/User";
import { RequestHandler } from "express";

const getUserInfo: RequestHandler = (req, res) => {
  const {id} = req.state.user;

  UserModel.findById(id).then((result) => {
    if(result) {
      res.deliver({
        name: result.name,
        phone: result.phone,
        id: result._id,
      })
    } else {
      res.deliver({})
    }
  })
}


export default getUserInfo