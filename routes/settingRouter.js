const { Router } = require("express");
const settingController = require("../controllers/settingController");
const router = Router();

router.get("/", settingController.setting_index);

module.exports = router;
