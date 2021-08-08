const { Router } = require("express");
const resultController = require("../controllers/resultController");
const router = Router();

router.get("/", resultController.result_index);
router.get("/:id", resultController.result_detail);

module.exports = router;
