// const express = require('express')
import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from './users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://adelcnenes:AdelaFeng2023@cluster0.fxco84z.mongodb.net/tuiter?retryWrites=true&w=majority"
);
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter-su1-23");

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    credentials: true,
    origin: "https://a6--admirable-kringle-708e3b.netlify.app",
    // origin: "http://localhost:3000",
  })
);
app.use(
    session({
      secret: "any string",
      resave: false,
      proxy: true,
      saveUninitialized: false,
      cookie: {
        sameSite: "none",
        secure: true,
      },
    })
);

// mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
// mongoose.connect(CONNECTION_STRING);


   
// // app.use(cors());
// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "https://a6--admirable-kringle-708e3b.netlify.app"];
//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//       res.header("Access-Control-Allow-Origin", origin);
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

app.use(express.json());

const port = process.env.PORT || 4000;

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
// app.get('/hello', (req, res) => {res.send('Life is wonderful!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);