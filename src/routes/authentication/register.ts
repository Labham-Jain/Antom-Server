import { RequestHandler } from "express";
import UserModel from "@models/User";
import bcrypt from 'bcrypt';
import getToken from "@middlewares/JWT/getToken";

interface BodyPayload {
  name?: string,
  password?: string,
  phone?: number;
}

const registerHandle: RequestHandler = (req, res) => {
  
  if(!req.body) return res.status(400).deliver("Empty body!")
  const {phone, password, name}: BodyPayload = req.body;
  
  // find if user exists in database

  if(!phone || !password || !name) return res.status(400).deliver("Missing Payload.")

  if(phone.toString().length !== 10) return res.status(422).deliver("Invalid phone length.")

  UserModel.findOne({phone}).then((userDocument) => {
    if(userDocument){
      return res.status(400).deliver("User already exists.");
    }
    bcrypt.genSalt().then((salt) => {
      bcrypt.hash(password, salt).then((hashedPassword) => {
        UserModel.create({
          name,
          phone,
          password: hashedPassword,
        }).then((result) => {
          const token = getToken({id: result._id, name: result.name});
          res.deliver({token})
        }).catch(() => {
          res.status(500).deliver("Unable to create user.")
        })
      }).catch(() => {
        res.status(500).deliver("Cannot generate salt! User not created!")
      })
    }).catch(() => {
      res.status(500).deliver("Server Error! User not created.")
    })
  });
}


export default registerHandle;