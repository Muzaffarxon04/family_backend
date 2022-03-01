const pg = require("../../utils/pg/pg");
const { course_data, course_inner } = require("./model");

class Courses {
  async courseData(req, res) {
    const { rows } = await pg(course_data);

    res.status(200).json({
      message: "ok",
      data: rows,
    });
  }

  async courseInner(req, res) {
    const { courseid } = req.params;
    const { rows } = await pg(course_inner, courseid);

    res.status(200).json({
      message: "ok",
      data: rows,
    });
  }
}

module.exports = new Courses();
