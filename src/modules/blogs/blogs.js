const pg = require("../../utils/pg/pg");
const {
  allBlogs,
  deleteBlog,
  newBlog,
  oneBlog,
  updateBlog,
} = require("./model");

class Blogs {
  async allBlogs(req, res) {
    try {
      const { rows } = await pg(allBlogs);

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

  async oneBlog(req, res) {
    try {
      const { blogid } = req.params;
      const { rows } = await pg(oneBlog, blogid);

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

  async newBlog(req, res) {
    try {
      const { img, title, date, text, time, type } = req.body;
      const { rows } = await pg(newBlog, img, title, date, text, time, type);

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

  async deleteBlog(req, res) {
    try {
      const { blogid } = req.params;
      const rows = await pg(deleteBlog, blogid);

      res.status(200).json({
        message: `blog ${blogid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateBlog(req, res) {
    try {
      const { img, title, date, text, time, type } = req.body;

      const { blogid } = req.params;
      const rows = await pg(
        updateBlog,
        img,
        title,
        date,
        text,
        time,
        type,
        blogid
      );

      res.status(200).json({
        message: `blog ${blogid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Blogs();
