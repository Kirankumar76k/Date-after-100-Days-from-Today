const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  let today = new Date();
  const result = addDays(today, 100);
  const final_date = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(final_date);
});

app.listen(3000);
module.exports = app;
