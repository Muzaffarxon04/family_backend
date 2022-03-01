const Router = require("express");
const router = new Router();
const courses = require("./modules/courses/router");
const teacher = require("./modules/teachers/router");
const topics = require("./modules/topics/router");
const questions = require("./modules/questions/router");
const blogs = require("./modules/blogs/router");
const author = require("./modules/author/router");
const order = require("./modules/orders/router");
const login = require("./modules/admin/router");
const benefits = require("./modules/benefits/router");
const home = require("./modules/home/router");
const auditory = require("./modules/auditory/router");

router.use(teacher);
router.use(courses);
router.use(topics);
router.use(questions);
router.use(blogs);
router.use(benefits);
router.use(author);
router.use(order);
router.use(login);
router.use(home);
router.use(auditory);

module.exports = router;
