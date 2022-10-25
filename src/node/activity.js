class Activity {
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

};