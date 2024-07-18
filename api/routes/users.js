var express = require("express");
var router = express.Router();
const controllerUser = require("../controllers/controllerUser");

/* GET users listing. */
router.get("/", controllerUser.list);
router.post("/register", controllerUser.register);
router.post("/login", controllerUser.login);

module.exports = router;
