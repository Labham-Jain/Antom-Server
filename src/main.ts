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
import path from 'path';

// initialization

const app = express();
dotenv.config()

// middlewares 

app.use(cors());
app.use(express.urlencoded({extended: true, limit: '50mb'}))
app.use(express.json({limit: '50mb'}));
app.use('/', express.static(path.join(__dirname, "./public")))

// Add custom res.deliver method

app.use(routeHandler);

// Connect with MongoDB

const MongoURI = process.env.MongoURI || '';

mongoose.connect(MongoURI).then(() => console.log('mongodb connected')).catch((error) =>  console.log(error))

// Manage Products | GET public, Others Private (Admin Only)
app.use('/products', ProductsController);

// Manage User Authentication
app.use('/', AuthenticationController);

// Manage User Routes
app.use('/user', addUserDetails, UserController);

// Admin routes
app.use('/admin', adminProtected, adminRouter);


app.listen(3000, () => console.log('server running...'));
