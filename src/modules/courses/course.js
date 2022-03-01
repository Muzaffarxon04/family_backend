const pg = require("../../utils/pg/pg");
const {
  allCourses,
  newCourse,
  updateCourse,
  oneCourse,
  deleteCourse,
} = require("./model");

class Courses {
  async allCourses(req, res) {
    try {
      const { rows } = await pg(allCourses);

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

  async oneCourse(req, res) {
    try {
      const { courseid } = req.params;
      const { rows } = await pg(oneCourse, courseid);

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

  async newCourse(req, res) {
    try {
      const { img, teacher, title, info, duration, lessons, certificate } =
        req.body;
      const { rows } = await pg(
        newCourse,
        img,
        teacher,
        title,
        info,
        duration,
        lessons,
        certificate
      );

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

  async deleteCourse(req, res) {
    try {
      const { courseid } = req.params;
      const rows = await pg(deleteCourse, courseid);

      res.status(200).json({
        message: `course ${courseid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateCourse(req, res) {
    try {
      const { img, teacher, title, info, duration, lessons, certificate } =
        req.body;
      const { courseid } = req.params;
      const rows = await pg(
        updateCourse,
        img,
        teacher,
        title,
        info,
        duration,
        lessons,
        certificate,
        courseid
      );

      res.status(200).json({
        message: `course ${courseid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Courses();
