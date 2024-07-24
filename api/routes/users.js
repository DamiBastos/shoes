var express = require("express");
var router = express.Router();
const controllerUser = require("../controllers/controllerUser");
const controllerPurchase = require("../controllers/controllerPurchase");

/* GET users listing. */
router.get("/", controllerUser.list);
router.post("/register", controllerUser.register);
router.post("/login", controllerUser.login);
router.get("/shops/:id", controllerPurchase.findByUser);


module.exports = router;
