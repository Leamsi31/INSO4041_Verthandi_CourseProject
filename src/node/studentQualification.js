const student = require('./student');
const activity = require('./activity');;

function qualifies(s, a) {
    const yearSatisfied = s.getCoursingYear() >= a.getRequirementYear();
    
    const studentMajor = s.getMajor();
    let majorSatisfied = a.getRequirementCourses() == [];
    
    if (!majorSatisfied) {
        console.log(a);
        for (const m of a.getRequirementCourses().values()) {
            majorSatisfied = majorSatisfied || m == studentMajor;
        }
    }

    return yearSatisfied && majorSatisfied;
}

module.exports = {
    qualifies
}