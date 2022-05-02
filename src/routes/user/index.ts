import { Router } from "express";
import getUserInfo from "./get";

const UserController = Router();

UserController.get('/', getUserInfo)

export default UserController