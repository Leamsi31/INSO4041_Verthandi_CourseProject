import 'user';

class Organizer extends User {

    #activities

    constructor(userconfig) {
        // Super constructor will initialize all the account credentials
        super(userconfig);

        activities = userconfig.organizerActivities;
    }

    getActivities() {
        return activities;
    }

    setActivities(activities) {
        this.activities = activities;
    }
};