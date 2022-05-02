import adminProtected from "@middlewares/adminProtected";
import { Router } from "express";
import MulterUpload from "utils/multer";
import uploadImages from "./post";

const ImagesController = Router();

ImagesController.post("/", adminProtected, MulterUpload.array("images"), uploadImages);

export default ImagesController