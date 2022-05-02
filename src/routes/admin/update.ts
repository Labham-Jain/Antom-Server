import UserModel from "@models/User";
import { RequestHandler } from "express";

interface BodyPayload {
  phone?: string;
  access?: boolean;
}

const updateAdminHandler: RequestHandler = (req, res) => {
  const {phone, access}: BodyPayload = req.body;
  if(!phone && !access) return res.status(400).deliver("Missing Payload.");

  UserModel.findOne({phone}).then((result) => {
    if(!result) return res.status(400).deliver("Incorrect phone number!");
    
    UserModel.findOneAndUpdate({phone}, {admin: access}).then(() => {
      res.deliver("Updated settings successfully!")
    }).catch(() => res.status(500).deliver("Some Error Occurred!"))
  })
}

export default updateAdminHandler