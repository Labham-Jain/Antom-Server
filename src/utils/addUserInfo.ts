import verifyToken from "@middlewares/JWT/verifyToken";
import { RequestHandler } from "express";

const addUserInfo: RequestHandler = (req, res, next) => {
  const {authorization} = req.headers;
  if(!authorization || authorization == '') return res.status(403).deliver("Authentication credentials not found. Please login.");
  const token = authorization.split(' ')[1];
  const data = verifyToken(token);
  if(data) {
    if(!req.state) req.state = {};
    
    req.state.user = data;
  }
  next()
}
export default addUserInfo