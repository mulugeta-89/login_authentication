var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.sendFile(__dirname+ "/public/register.html");
});
router.get("/login", function (req, res, next) {
  res.sendFile(__dirname + "/public/login.html")
})

module.exports = router;
