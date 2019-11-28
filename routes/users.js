const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
// @route  POST api/users
// @desc   Register a user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter co`rrect password").isLength({ min: 6 })
  ],
   async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password} = req.body;

    try {
      let user = await User.findOne({email});
      if(user) return res.status(400).json({msg: 'User already exists'})

      user = new User({name, email, password}); 

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User Save');

    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error')
    }
  }
);

module.exports = router;
