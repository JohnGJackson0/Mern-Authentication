const express = require("express");

const router = express.Router();

//get => with this url, do callback function
//req => the request data from this url
//res => send back to client
router.get("/signup", (req, res) => {
  res.json({
    data: "You hit signup endpoint",
  });
});

module.exports = router; // {}
