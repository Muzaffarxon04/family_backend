const pg = require("../../utils/pg/pg");
const {
  allAuthors,
  deleteAuthor,
  newAuthor,
  oneAuthor,
  updateAuthor,
} = require("./model");

class Authors {
  async allAuthors(req, res) {
    try {
      const { rows } = await pg(allAuthors);

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

  async oneAuthor(req, res) {
    try {
      const { authorid } = req.params;
      const { rows } = await pg(oneAuthor, authorid);

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

  async newAuthor(req, res) {
    try {
      const { info, video } = req.body;
      const { rows } = await pg(newAuthor, info, video);

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

  async deleteAuthor(req, res) {
    try {
      const { authorid } = req.params;
      const rows = await pg(deleteAuthor, authorid);

      res.status(200).json({
        message: `author ${authorid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateAuthor(req, res) {
    try {
      const { info, video } = req.body;
      const { authorid } = req.params;
      const rows = await pg(updateAuthor, info, video, authorid);

      res.status(200).json({
        message: `topic ${authorid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Authors();
