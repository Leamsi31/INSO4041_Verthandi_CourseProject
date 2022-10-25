import 'user';

class Student extends User {

    #coursingYear
    #major
    #tags

    constructor(userconfig) {
        // Super constructor will initialize all the account credentials
        super(userconfig);

        coursingYear = userconfig.coursingYear;
        major = userconfig.major;
        // Tags are initialized as empty array, will populate with questionnaire results.
        tags = [];
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