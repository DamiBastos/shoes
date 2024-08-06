var express = require("express");
var router = express.Router();
const controllerUser = require("../controllers/controllerUser");
const controllerPurchase = require("../controllers/controllerPurchase");
const { register, login } = require("../controllers/user");

/* GET users listing. */
router.get("/", controllerUser.list);
// router.post("/register", controllerUser.register);
router.post("/register", register);
router.post("/login", login);
router.get("/shops/:id", controllerPurchase.findByUser);


module.exports = router;
