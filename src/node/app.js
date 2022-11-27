import express from 'express';
import bodyParser from 'body-parser'

import parser from './parser.js';
import tag from './tag-rate.js';
import query from './query.js'

import Student from './student.js';
import Activity from './activity.js';
import axios from "axios"

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
//     username : "hoopla",
//     hash: "hoopla!!!",
//     coursingYear: 5,
//     major: "ICOM",
//     tags: ["Social", "Política"]
// };
// const dummy = new Student(dummyConfig);
// query.signUpStudent(dummy);

// const url = "/Auth"

// let getData = () => {
// axios.get(url)
//    .then(res => {
//     console.log("Entered then block");
//     query.signUpStudent(res.data);
//     console.log(res.data);
//   }
//    )
//    .catch(err => console.log(err.data))
// }
// getData()


// This receives the information sent from Auth.jsx via axios!!
app.post('/Auth', express.json(), function (req, res) {
  console.log(req.body);
  var student = new Student(req.body)
  query.signUpStudent(student)
  res.send('Hello POST');
}); 



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
