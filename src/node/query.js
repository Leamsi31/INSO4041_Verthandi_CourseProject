import mongoose from 'mongoose';
import StudentModel from './dbmodels/studentModel.js';
const password = '7ekWtN9UCnQAxSBK';

const mongoURI = `mongodb+srv://node:${password}@rsea-uprm.17jghkh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
    .then((res) => {
        console.log("Database connection succesful!");

    })
    .catch((err) => console.error(err));