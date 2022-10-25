import 'user';

class Student extends User {
    constructor(userconfig) {
        // Super constructor will initialize all the account credentials
        super(userconfig);

        coursingYear = userconfig.coursingYear;
        major = userconfig.major;
        // Tags are initialized as empty array, will populate with questionnaire results.
        tags = [];

    }
};