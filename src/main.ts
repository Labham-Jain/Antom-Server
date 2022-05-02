import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// file imports
import routeHandler from '@middlewares/routeHandlers';
import adminRouter from '@routes/admin';
import adminProtected from '@middlewares/adminProtected';
import UserController from '@routes/user';
import AuthenticationController from '@routes/authentication';
import ProductsController from '@routes/products';
import addUserDetails from '@middlewares/addUserDetails';
import ImagesController from '@routes/images';

// initialization

const app = express();
dotenv.config()

// middlewares 

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Add custom "deliver" method
app.use(routeHandler);

// Connect with MongoDB

const MongoURI = process.env.MongoURI || '';

mongoose.connect(MongoURI).then(() => console.log('mongodb connected')).catch((error) =>  console.log(error))

// Image upload
app.use('/images', ImagesController);


// Manage Products | GET public, Others Private (Admin Only)
app.use('/products', ProductsController);

// Manage User Authentication
app.use('/', AuthenticationController);

// Manage User Routes
app.use('/user', addUserDetails, UserController);

// Admin routes
app.use('/admin', adminProtected, adminRouter);


app.listen(3000, () => console.log('server running...'));
