module.exports = {
  allTopics: `select * from topics`,
  oneTopic: `select * from topics where topic_id = $1`,
  newTopic: `insert into topics(topic_title, topic_info, topic_course) values($1, $2, $3) returning *`,
  updateTopic: `update topics set topic_title = $1, topic_info =$2 where topic_id = $3`,
  deleteTopic: ` delete from topics where topic_id = $1`,
};
