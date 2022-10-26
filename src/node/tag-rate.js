const student = require('./student');
const activity = require('./activity');
const studentQualification = require("./studentQualification");

function tagRate(s, a) {
    // Takes a student and an activity, returns the number of tags they share.
    const studentTags = s.getTags();
    const activityTags = a.getTags();

    let count = 0;

    for (const st of studentTags.values()) {
        if (activityTags.findIndex((t) => t == st) != -1) {
            count ++;
        }
    }

    return count;
}

function questionnaireResults(u, as) {
    // Takes a student and a list of activities, returns a sorted list of activity, rating pairs they qualify for, in descending order of how relevant they are based on tags.
    const re = [];

    for (const a of as.values()) {
        if (studentQualification.qualifies(u, a)) {
            const rating = tagRate(u, a);
            const pair = {
                activity : a,
                rating : rating
            };
            re.push(pair);
        }
    }

    re.sort((a, b) => a.rating > b.rating);
    return re;
}

module.exports = {
    tagRate,
    questionnaireResults
};