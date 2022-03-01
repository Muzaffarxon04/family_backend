const Router = require("express");
const router = new Router();
const question = require("./questions");
const isadmin = require("../../middlewares/middlewares");

router.get("/questions", question.allQuestions);
router.get("/questions/:questionid", question.oneQuestion);
router.post("/questions", isadmin.AUTH, question.newQuestion);
router.delete("/questions/:questionid", isadmin.AUTH, question.deleteQuestion);
router.put("/questions/:questionid", isadmin.AUTH, question.updateQuestion);

module.exports = router;
