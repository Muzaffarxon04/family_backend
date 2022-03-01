const Router = require("express");
const router = new Router();
const topic = require("./topics");
const isadmin = require("../../middlewares/middlewares");

router.get("/topics", topic.allTopics);
router.get("/topics/:topicid", topic.oneTopic);
router.post("/topics", isadmin.AUTH, topic.newTopic);
router.delete("/topics/:topicid", isadmin.AUTH, topic.deleteTopic);
router.put("/topics/:topicid", isadmin.AUTH, topic.updateTopic);

module.exports = router;
