import express from 'express';
import bodyParser from 'body-parser'

import parser from './parser.js';
import tag from './tag-rate.js';
import query from './query.js'

import Student from './student.js';
import Activity from './activity.js';
const express = require('express');


const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const UserRouter = require("./controller/User")
const app = express();
const jsonParser = bodyParser.json();

const path = require("path");

// Passport Config
require('./config/passport')(passport);

// react setup?
app.set('view engine', 'html');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

// handle all user login / register stuff 
app.use("/Auth", UserRouter);

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

 const dummyConfig = {
    username : "pee Jones",
    hash: "graciaskiara",
    coursingYear: 5,
    major: "FINA",
    tags: ["Social", "Política"]
}; 
const dummy = new Student(dummyConfig); 
query.signUpStudent(dummy);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
