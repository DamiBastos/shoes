var express = require("express");
var router = express.Router();
const controllerShoe = require("../controllers/controllerShoe");

/* GET users listing. */
router.get("/", controllerShoe.list);
router.get("/:id", controllerShoe.findByPk);
router.post("/create", controllerShoe.create);
router.put("/update/:id", controllerShoe.edit);
router.delete("/delete/:id", controllerShoe.delete);

module.exports = router;
