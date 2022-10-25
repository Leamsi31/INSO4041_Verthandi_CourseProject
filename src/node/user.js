/*
User class provides the basic structure of a user, organizer and student class will inherit from user.
*/
class User {
    
    #username
    #hash

    constructor(userconfig) {
        this.username = userconfig.username;
        this.hash = userconfig.hash;
    }

    getConfig() {
        const config = {
            username: this.username,
            hash: this.hash
        }

        return config;
    }

    getUsername() {
        return this.username;
    }

    getHash() {
        return this.hash;
    }

    // We deliberately leave out a setter method for the username field because it is an immutable field.

    setHash(hash) {
        this.hash = hash;
    }
};