const Router = require("express");
const router = new Router();
const author = require("./author");
const isadmin = require("../../middlewares/middlewares");

router.get("/author", author.allAuthors);
router.get("/author/:authorid", author.oneAuthor);
router.post("/author", isadmin.AUTH, author.newAuthor);
router.delete("/author/:authorid", isadmin.AUTH, author.deleteAuthor);
router.put("/author/:authorid", isadmin.AUTH, author.updateAuthor);

module.exports = router;
