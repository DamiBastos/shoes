var express = require("express");
var router = express.Router();
const { schemaValidator } = require("../middlewares/validator");
const { get, findById, post, put, destroy } = require("../controllers/color");

router.get("/", get);
router.get("/:id", findById);
router.post("/create", post);
router.put("/update/:id", put);
router.delete("/delete/:id", destroy);

module.exports = router;
