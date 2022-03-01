const Router = require("express");
const router = new Router();
const home = require("./home");

router.get("/courseData", home.courseData);
router.get("/courseInner/:courseid", home.courseInner);

module.exports = router;
