const express = require("express");

const router = express.Router();

const { signup } = require("../controllers/auth");

//get => with this url, do callback function
//req => the request data from this url
//res => send back to client
router.get("/signup", signup);

module.exports = router; // {}
