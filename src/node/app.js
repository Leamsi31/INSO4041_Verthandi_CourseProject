import express from 'express';
import parser from './parser.js';
import tag from './tag-rate.js';

import Student from './student.js';
import Activity from './activity.js';

const app = express();
app.get('/questionnaire', (req, res) => {
    const activityConfigs = parser('..\\..\\data\\activities.csv\\');

    const dummyConfig = {
        username : "Pepito Perez",
        hash: "kajpsoe",
        coursingYear: 4,
        major: "INSO",
        tags: ["Profesional", "Académica"]
    };
    const dummy = new Student(dummyConfig);

    const activities = activityConfigs.map((config) => new Activity(config));

    const questionnaireRes = tag(dummy, activities);

    res.json(questionnaireRes);
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
