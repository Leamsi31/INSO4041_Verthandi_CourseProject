const user = require('./user');

class Student extends user.User {

    #coursingYear
    #major
    #tags

    constructor(userconfig) {
        // Super constructor will initialize all the account credentials
        super(userconfig);

        this.coursingYear = userconfig.coursingYear;
        this.major = userconfig.major;
        this.tags = userconfig.tags;
    }

    getCoursingYear() {
        return this.coursingYear;
    }

    getMajor() {
        return this.major;
    }

    getTags() {
        return this.tags;
    }

    setTags(tags) {
        this.tags = tags;
    }
};

module.exports = {
    Student
};