import express from 'express';
import bodyParser from 'body-parser'

import parser from './parser.js';
import tag from './tag-rate.js';
import query from './query.js'

import Student from './student.js';
import Activity from './activity.js';
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const UserRouter = require("./controller/User")
const app = express();
const jsonParser = bodyParser.json();

// Passport Config
require('./config/passport')(passport);




app.post('/questionnaire', jsonParser, (req, res) => {
    const { id } = req.body;
    const activityConfigs = parser('..\\..\\data\\activities.csv\\');
    const activities = activityConfigs.map((config) => new Activity(config));
    query.queryStudent(id).then((s) => {
        const questionnaireRes = tag(s, activities);
        res.json(questionnaireRes);
    });
});

app.get('/tags', (req, res) => {
    const tags = [
        'Profesional',
        'Académica',
        'Cívica',
        'Religiosa',
        'Social',
        'Artes',
        'Deportiva',
        'Política'
    ];

    res.json(tags);
});
// handle all user login / register stuff 
app.use("/Auth", UserRouter);

// const dummyConfig = {
//     username : "Queko Jones",
//     hash: "graciaskiara",
//     coursingYear: 5,
//     major: "FINA",
//     tags: ["Social", "Política"]
// };
// const dummy = new Student(dummyConfig);
// query.signUpStudent(dummy);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
