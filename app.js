// const express = require('express')
import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from './users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import session from "express-session";
import AuthController from "./users/auth-controller.js";

const app = express();
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
);
   
// app.use(cors());
app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:3000", "https://a5--admirable-kringle-708e3b.netlify.app"];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
const port = process.env.PORT || 4000;

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
// app.get('/hello', (req, res) => {res.send('Life is wonderful!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);