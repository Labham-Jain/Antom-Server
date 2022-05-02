import { NextFunction, Request, Response } from "express";

const adminProtected = (req: Request, res: Response, next: NextFunction) => {
  const adminPassword = (req.body && req.body.admin_password);

  if(adminPassword === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    res.status(403).deliver("Failed to authenticate as an admin user!");
  }
}

export default adminProtected