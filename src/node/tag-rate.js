const student = require('./student')
const activity = require('./activity')

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

    return tagRate();
}