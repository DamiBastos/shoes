var express = require("express");
var router = express.Router();
const controllerPurchase = require("../controllers/controllerPurchase");
const { list, get, post, getByUser, put } = require("../controllers/purchase");

/* GET users listing. */
router.get("/", list);
router.get("/:id", get);
router.get("/user/:userId", getByUser);
router.post("/create", post);
router.put("/update/:id", put);
router.delete("/delete/:id", controllerPurchase.delete);

module.exports = router;
