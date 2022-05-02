import { RequestHandler } from "express";

const uploadImages: RequestHandler = (req, res) => {
  const files = req.file
  if(!files) return res.status(400).deliver("No images were found!");
  console.log(files)
  res.deliver('running test code')
}

export default uploadImages