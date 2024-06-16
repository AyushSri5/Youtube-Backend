import mongoose from 'mongoose';
import {DB_NAME} from './constants.js'
import express from 'express';
import connectDB from './db/index.js'

import 'dotenv/config'

import { app } from './app.js';


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server listening on ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed: " ,err.message);
})



// const app=express();

// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",(error) => {
//             console.log("Error: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`App listening on ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error"+error.message);
//         throw error;
//     }
// })()