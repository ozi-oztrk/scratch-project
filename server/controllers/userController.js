
const bcrypt = require("bcryptjs");
const db = require("../models/libraryModel");
const userController = {};

userController.registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  // hashing password
  const hashedPassword = await bcrypt.hash(password, 10);

 try {
   // declare query params array for insertion
   const params = [email, hashedPassword];
   const queryString = `
   INSERT INTO accounts (email, password)
   VALUES ($1, $2)`
   // calling query method to insert user
   await db.query(queryString, params, (err, res) => {
    if (err) {
      console.log('error creating user', err);
      return next();
    } else {
      console.log('successfully inserted new registered user row');
      console.log(params[0])
      return next();
    }
   })
 }
 catch(e){
   return next(JSON.stringify({Message: 'Error in userController.registerUser:' + e}));
 }
}




module.exports = userController;

// mongodb+srv://rschelly:mongopassword@cluster0.b5qc7.mongodb.net/BetterReads?retryWrites=true&w=majority
