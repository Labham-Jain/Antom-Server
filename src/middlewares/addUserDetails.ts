import { RequestHandler } from "express";
import verifyToken from "./JWT/verifyToken";

const addUserDetails: RequestHandler = (req, res, next) => {
  const {authorization} = req.headers;
  // validate token existance.
  if(!authorization) return res.status(403).deliver("No login token found.");
  
  // verify
  const token = authorization.split(' ')[1];
  const userData = verifyToken(token);
  
  // save user info in state
  if(!req.state) req.state = {}
  
  req.state.user = userData
  next()
}

export default addUserDetails