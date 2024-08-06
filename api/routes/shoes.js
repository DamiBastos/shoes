var express = require("express");
var router = express.Router();
const controllerShoe = require("../controllers/controllerShoe");
const { schemaValidator } = require("../middlewares/validator");
const { shoe } = require("../schemas/shoe");
const { post, get, findById, put, destroy } = require("../controllers/shoe");
// const { post } = require("../controllers/shoe")

/* GET users listing. */
router.get("/", get);
router.get("/:id", findById);
router.post("/create", 
    schemaValidator(shoe),
    post);
router.put("/update/:id", put);
router.delete("/delete/:id", destroy);

module.exports = router;
