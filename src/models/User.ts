import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  admin:{
    type: Boolean,
    default: undefined
  }
})

const UserModel = mongoose.model('user', UserSchema);
export default UserModel;