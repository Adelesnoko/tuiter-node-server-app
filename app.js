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
   
app.use(
    cors({
        credentials: true,
        origin: "*",
    })
);

app.use(express.json());
const port = process.env.PORT || 4000;

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
// app.get('/hello', (req, res) => {res.send('Life is wonderful!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);