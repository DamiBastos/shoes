var express = require("express");
var router = express.Router();
const { add, get, empty } = require("../controllers/cart");

/* GET carts listing. */
router.get("/:userId", get);
router.post("/add", add);
router.put("/empty", empty);

module.exports = router;
