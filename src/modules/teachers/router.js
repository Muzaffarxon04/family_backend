const Router = require("express");
const router = new Router();
const teacher = require("./teacher");
const isadmin = require("../../middlewares/middlewares");

router.post("/teachers", isadmin.AUTH, teacher.newTeacher);
router.get("/teachers", teacher.allTeachers);
router.get("/teachers/:teacherid", teacher.oneTeacher);
router.delete("/teachers/:teacherid", isadmin.AUTH, teacher.deleteTeacher);
router.put("/teachers/:teacherid", isadmin.AUTH, teacher.updateTeacher);

module.exports = router;
