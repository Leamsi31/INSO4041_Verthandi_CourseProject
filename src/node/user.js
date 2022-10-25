/*
User class provides the basic structure of a user, organizer and student class will inherit from user.
*/
class User {
    constructor(userconfig) {
        this.username = userconfig.username;
        this.hash = userconfig.hash;
    }
}