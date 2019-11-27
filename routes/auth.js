const express = require("express");
const router = express.Router();

// @route  GET api/auth
// @desc   get log in  user
// @access Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route  POST api/auth
// @desc   Auth user & get user
// @access Public
router.post("/", (req, res) => {
  res.send("Authorize user");
});

module.exports = router;
