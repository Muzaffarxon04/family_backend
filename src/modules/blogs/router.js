const Router = require("express");
const router = new Router();
const blogs = require("./blogs");
const isadmin = require("../../middlewares/middlewares");

router.get("/blogs", blogs.allBlogs);
router.get("/blogs/:blogid", blogs.oneBlog);
router.post("/blogs", isadmin.AUTH, blogs.newBlog);
router.delete("/blogs/:blogid", isadmin.AUTH, blogs.deleteBlog);
router.put("/blogs/:blogid", isadmin.AUTH, blogs.updateBlog);

module.exports = router;
