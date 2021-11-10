const express = require("express");

const app = express();

// app is what we use to get routing middleware ect. all related to express

//get => with this url, do callback function
//req => the request data from this url
//res => send back to client
app.get("/api/signup", (req, res) => {
  res.json({
    data: "You hit signup endpoint",
  });
});

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

//run with node server.js
