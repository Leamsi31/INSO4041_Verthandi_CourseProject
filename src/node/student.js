import User from './user.js';

class Student extends User {

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

    getConfig() {
        return {
            username: this.username,
            hash: this.hash,
            tags: this.tags,
            coursingYear: this.coursingYear,
            major: this.major,

        };
    }
};

export default Student