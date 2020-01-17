const express = require("express");
const cors = require("cors");
const mongo = require("./database");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/all", (req, res) => {
  mongo.getIniRepos(result => {
    res.json(result);
  });
});

// post the data entered by the user during signup to the data base
app.post("/register", (req, res) => {
    const user = req.body;
    mongo.addUser(user, result => {
      res.json(result);
    });
  });


// post the data entered by the user during the login in to the data base
app.post("/login", (req, res) => {
    const userSignIn = req.body;
    mongo.login(userlogin, result => {
      if (result.length < 1) res.json("password and email does not match");
      res.json(result);
    });
  });
  

// expenses are sent to the database after being entered by the user
app.post("/expenses", (req, res) => {
    mongo.createExpenses(req.body, result => {
      console.log("RESULT FROM POST EXPENSES", result);
      res.send(result);
    });
  });