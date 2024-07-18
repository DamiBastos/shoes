var express = require("express");
var router = express.Router();
const controllerCart = require("../controllers/controllerCart");

/* GET users listing. */
router.get("/:userId", controllerCart.getCart);
router.post("/add", controllerCart.addItem);
router.put("/empty", controllerCart.emptyCart);

module.exports = router;
