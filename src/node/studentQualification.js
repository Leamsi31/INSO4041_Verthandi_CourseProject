function qualifies(s, a) {
    const yearSatisfied = s.getCoursingYear() >= a.getRequirementYear();
    
    const studentMajor = s.getMajor();
    const requirementMajors = a.getRequirementCourses();
    const majorSatisfied = requirementMajors.length == 0 || requirementMajors.includes(studentMajor);

    return yearSatisfied && majorSatisfied;
}

export default qualifies