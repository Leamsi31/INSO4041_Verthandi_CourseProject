const path = require('path');
const http = require('http');
const fs = require('fs');

const parser = require('./parser');
const tag = require('./tag-rate');

const student = require('./student');
const activity = require('./activity');

const server = http.createServer((req, res) => {
    const activityConfigs = parser.parseActivities('..\\..\\data\\activities.csv\\');
    res.writeHead(200, { 'Content-Type': 'application/json'})

    const dummyConfig = {
        username : "Pepito Perez",
        hash: "kajpsoe",
        coursingYear: 4,
        major: "INSO",
        tags: ["Profesional", "Académica"]
    };
    const dummy = new student.Student(dummyConfig);

    const activities = activityConfigs.map((config) => new activity.Activity(config));

    const json = JSON.stringify(tag.questionnaireResults(dummy, activities));

    res.end(json);
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
