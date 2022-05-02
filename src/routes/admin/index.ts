import { Router } from "express";
import updateAdminHandler from "./update";

const adminRouter = Router();

adminRouter.post('/update', updateAdminHandler);

export default adminRouter;