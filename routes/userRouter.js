var express = require('express');
var router = express.Router();
const Users = require("../models/users")
const passport = require("passport")
const authenticate = require("../authenticate")
/* GET users listing. */
router.post("/signup", (req, res, next) => {
  Users.register(new Users({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
        res.statusCode = 500
        res.setHeader("Content-Type", "application/json")
      res.json({err: err})
    }
    else {
      if (req.body.firstname && req.body.lastname) {
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.save((err, user) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
            console.log(err)
          }
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            // res.setHeader("Content-Type", "application/json");
            // res.json({ success: true, status: "Registration Succesful" });
            res.redirect("/login")
          });
        })
      }
      
    }
  }
  )
})

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const token = authenticate.getToken({ _id: req.user._id})
  res.statusCode = 200
  //res.setHeader("Content-Type", "application/json")
  res.sendFile(__dirname + "/public/success.html")
})

router.get("/logout", (req, res, next) => {
})

module.exports = router;

