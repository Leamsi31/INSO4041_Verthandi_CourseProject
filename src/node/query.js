import mongoose from 'mongoose';
import fs from 'fs';

import StudentModel from './dbmodels/studentModel.js';
import Student from './student.js';

const password = fs.readFileSync('dbpassword.txt', 'utf8');

const mongoURI = `mongodb+srv://node:${password}@rsea-uprm.17jghkh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
    .then((res) => {
        console.log("Database connection succesful!");

    })
    .catch((err) => console.error(err));

async function signUpStudent(s) {
    const config = s.getConfig();
    const student = new StudentModel(config);
    return student.save();
}

async function queryStudent(id) {
    const studentConfig = await StudentModel.findById(id);
    const student = new Student(studentConfig);
    return student;
}

export default {
    signUpStudent,
    queryStudent
};
