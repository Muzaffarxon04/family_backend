const Router = require("express");
const router = new Router();
const course = require("./course");
const isadmin = require("../../middlewares/middlewares");

router.get("/courses", course.allCourses);
router.get("/courses/:courseid", course.oneCourse);
router.post("/courses", isadmin.AUTH, course.newCourse);
router.delete("/courses/:courseid", isadmin.AUTH, course.deleteCourse);
router.put("/courses/:courseid", isadmin.AUTH, course.updateCourse);

module.exports = router;
