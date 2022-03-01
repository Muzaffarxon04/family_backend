const pg = require("../../utils/pg/pg");
const {
  allTopics,
  deleteTopic,
  newTopic,
  updateTopic,
  oneTopic,
} = require("./model");

class Topics {
  async allTopics(req, res) {
    try {
      const { rows } = await pg(allTopics);

      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async oneTopic(req, res) {
    try {
      const { topicid } = req.params;
      const { rows } = await pg(oneTopic, topicid);

      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async newTopic(req, res) {
    try {
      const { title, info, course } = req.body;
      const { rows } = await pg(newTopic, title, info, course);

      if (rows) {
        res.status(200).json({
          message: "ok",
          data: rows,
        });
      } else {
        res.status(400).json({
          message: `bad request`,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async deleteTopic(req, res) {
    try {
      const { topicid } = req.params;
      const rows = await pg(deleteTopic, topicid);

      res.status(200).json({
        message: `course ${topicid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateTopic(req, res) {
    try {
      const { title, info } = req.body;
      const { topicid } = req.params;
      const rows = await pg(updateTopic, title, info, topicid);

      res.status(200).json({
        message: `topic ${topicid} successfully updated`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Topics();
