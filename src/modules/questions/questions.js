const pg = require("../../utils/pg/pg");
const {
  allQuestions,
  deleteQuestion,
  newQuestion,
  oneQuestion,
  updateQuestion,
} = require("./model");

class Questions {
  async allQuestions(req, res) {
    try {
      const { rows } = await pg(allQuestions);

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

  async oneQuestion(req, res) {
    try {
      const { questionid } = req.params;
      const { rows } = await pg(oneQuestion, questionid);

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

  async newQuestion(req, res) {
    try {
      const { title, info, course } = req.body;
      const { rows } = await pg(newQuestion, title, info, course);

      if (rows) {
        res.status(200).json({
          message: "ok",
          data: rows,
        });
      }
      res.status(400).json({
        message: `bad request`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async deleteQuestion(req, res) {
    try {
      const { questionid } = req.params;
      const rows = await pg(deleteQuestion, questionid);

      res.status(200).json({
        message: `question ${questionid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateQuestion(req, res) {
    try {
      const { title, info } = req.body;
      const { questionid } = req.params;
      const rows = await pg(updateQuestion, title, info, questionid);

      res.status(200).json({
        message: `question ${questionid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Questions();
