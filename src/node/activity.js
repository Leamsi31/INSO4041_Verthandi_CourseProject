class Activity {
    
    #name
    #id 
    #requirementCourses
    #requirementYear
    #tags

    constructor(activityConfig) {
        this.name = activityConfig.name;
        this.id = activityConfig.id;
        this.requirementCourses = activityConfig.requirementCourses;
        this.requirementYear = activityConfig.requirementYear;
        this.tags = activityConfig.tags;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getRequirementCourses() {
        return this.requirementCourses;
    }

    getRequirementYear() {
        return this.requirementYear;
    }

    getTags() {
        return this.tags;
    }

    setRequirementCourses(requirementCourses) {
        this.requirementCourses = requirementCourses;
    }

    setRequirementYear() {
        this.requirementYear = requirementYear;
    }

    setTags(tags) {
        this.tags = tags;
    }


};

export default Activity