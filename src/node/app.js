import express from 'express';
import bodyParser from 'body-parser'

import parser from './parser.js';
import tag from './tag-rate.js';
import query from './query.js'

import Student from './student.js';
import Activity from './activity.js';

const app = express();
const jsonParser = bodyParser.json();

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
