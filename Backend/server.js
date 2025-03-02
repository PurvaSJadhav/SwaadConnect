const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRouter = require("./routes/user"); 
const recipeRouter = require("./routes/recipe"); 

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1 align=center>Welcome to SwaadConnect</h1>");
});

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port:", PORT);
});
