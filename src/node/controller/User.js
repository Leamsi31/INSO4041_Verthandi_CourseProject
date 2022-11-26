require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("./dbmodels/StudentModel"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens

const { forwardAuthenticated } = require("./config/auth")
import query from './query.js'
import Student from './student.js';

const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// get front end from website
router.get("/Auth", forwardAuthenticated, (req, res) => res.render('Auth'));


// Signup route to create a new user
router.post("/Auth",   (req, res) => {
  const { loginUsername, loginPassword, sigupUsername, signupPassword, 
          signupPassword2, major, coursingYear } = req.body;
  let errors = [];
  // REGISTER STUFF
  if (!sigupUsername ||  !signupPassword || !signupPassword2
      ||  major || coursingYear ) 
  {
    errors.push({ msg: 'Please enter all fields' });
  }
  
  if (signupPassword != signupPassword2) {
  errors.push({ msg: 'Passwords do not match' });
  }
        
  if (signupPassword.length < 6) {
  errors.push({ msg: 'Password must be at least 6 characters' });
  }
  
  if (errors.length > 0 ){
    res.render("Auth"); 
    console.log("errors")
  } else {
    // all fields filled out correctly
    
    User.findOne({username: sigupUsername}).then( user => {

      if (user) {
        errors.push({msg: "User already exist"});
        res.render("Auth");
      }  else {
        
        signupPassword  =  bcrypt.hash(signupPassword, 10);

        studentConfig = {
          username: sigupUsername,
          hash: signupPassword, // Login route to verify a user and get a token
        }
        
        // save new user to database
        const newUser = new Student(studentConfig); 
        query.signUpStudent(newUser);


      }
    })
  }

  // LOGIN STUFF
  if (loginUsername && loginPassword) {

    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/Auth',
      failureFlash: true
    })(req, res, next);
  }
  
  
  //try {
    // hash the password
    //req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    //const user = await User.create(req.body);
    // send new user as response
    //res.json(user);
  //} catch (error) {
    //res.status(400).json({ error });
  //}
});

module.exports = router
