import { Router } from "express";
import loginHandler from "./login";
import registerHandle from "./register";

const AuthenticationController = Router();

AuthenticationController.post('/login', loginHandler);
AuthenticationController.post('/register', registerHandle);

export default AuthenticationController;