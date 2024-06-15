import mongoose from 'mongoose';
import {DB_NAME} from './constants.js'
import express from 'express';
import connectDB from './db/index.js'

import 'dotenv/config'


connectDB();



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