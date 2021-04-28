const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const passport = require("passport");
require("./passport");

const userController = require("./controllers/userController");
// const cookieController = require("./controllers/cookieController");
// const sessionController = require("./controllers/sessionController");

const app = express();
const PORT = 3000;

//Configure Session Storage
app.use(
  cookieSession({
    name: "session-name",
    keys: ["key1", "key2"],
  })
);

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const apiRouter = require("./api/api_router.js");
const libraryRouter = require("./api/libraryRouter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/home");
});

//paths for static files
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../html-scss/login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../html-scss/signup.html"));
});

//signup and login paths
app.post("/signup", userController.registerUser, (req, res) => {
  console.log("clicked signup button");
  res.redirect("/home");
  //res.sendFile(path.join(__dirname, "../html-scss/index.html"));
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/home");
  }
);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../html-scss/index.html"));
});

//router paths
app.use("/api/", apiRouter);

app.use("/db/", libraryRouter);

//signup and login paths
// app.post(
//   "/signup",
//   userController.createUser,
//   userController.addToSQL,
//   (req, res) => {
//     res.redirect("/home");
//   }
// );

// app.post("/login", userController.verifyUser, (req, res) => {
//   res.redirect("home");
// });

// catch all for requests to unknown route

app.use("*", (req, res) => res.status(400).send("Page Not Found"));

// global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };

  const errObj = Object.assign({}, defaultErr, err);

  console.log(errObj.log);

  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
