const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// app is what we use to get routing middleware ect. all related to express
const authRoutes = require("./routes/auth.js");

//use use whenever applying middleware
app.use("/api", authRoutes);
//this is a console.log() er and it logs relevant req/res info
app.use(morgan("dev"));

//this is for development we run a different port on the react side
//cors connects the two ports and makes them compatiable
//apply everywhere, except we don't want it because on production
//it is not needed because the "ports" will be domain instead
//app.use(cors());

if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `http://localhost:3000` }));
}

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

/*
Note MVC:  
 React -> View 
 Model -> UserModel (soon)
 Controller -> controllers/Auth.js
*/
