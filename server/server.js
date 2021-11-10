const express = require("express");

const app = express();

// app is what we use to get routing middleware ect. all related to express
const authRoutes = require("./routes/auth.js");

//use use whenever applying middleware
app.use("/api", authRoutes);

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

//run with node server.js
