const mongoose = require("mongoose");

const user = "udemoTodo";
const pass = "demoTodopwd";
const database = "todo_sample";
const serverName = "cluster0.m4yrx.mongodb.net";


//mongodb+srv://udemoTodo:<password>@cluster0.m4yrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

module.exports = {
    init: () => {
      mongoose
        .connect(
          `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };
  