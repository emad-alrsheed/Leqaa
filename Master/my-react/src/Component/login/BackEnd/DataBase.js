const mongoose = require("mongoose");
const User = require("./User");
const Expenses = require("./Expenses");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb+srv://alorayb:ah123456@cluster0-qektw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;


db.on("error", function() {
    console.log("mongoose connection error");
    console.log("____________________________");
  });
  
  db.once("open", function() {
    console.log("mongoose connected successfully");
    console.log("____________________________");
  });
  