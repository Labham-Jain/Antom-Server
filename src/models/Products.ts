import mongoose from "mongoose";


// Reviews Type
const ReviewsType = [{
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  }
}]

// Product Schema


const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  rating: {
    type: [Number],
  },
})

const ProductsModel = mongoose.model("product", ProductsSchema);
export default ProductsModel;