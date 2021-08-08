const { Router } = require("express");
const quesionerController = require("../controllers/quesionerController");
const router = Router();

router.get("/add", quesionerController.quesioner_add_get);
router.get("/", quesionerController.quesioner_index);
router.post("/", quesionerController.quesioner_add_post);
router.get("/:id", quesionerController.quesioner_detail);
router.delete("/:id", quesionerController.quesioner_delete);

module.exports = router