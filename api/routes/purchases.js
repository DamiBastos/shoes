var express = require("express");
var router = express.Router();
const controllerPurchase = require("../controllers/controllerPurchase");

/* GET users listing. */
router.get("/", controllerPurchase.list);
router.get("/:id", controllerPurchase.findByPk);
// router.get("/:id", controllerPurchase.findByUser);
router.post("/create", controllerPurchase.create);
router.put("/update/:id", controllerPurchase.edit);
router.delete("/delete/:id", controllerPurchase.delete);

module.exports = router;
