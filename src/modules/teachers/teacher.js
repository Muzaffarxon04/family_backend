const pg = require("../../utils/pg/pg");

const {
  newTeach,
  allTeachers,
  oneTeacher,
  updateTeacher,
  deleteTeacher,
} = require("./model");

class Teachers {
  async newTeacher(req, res) {
    try {
      const { name, info, image } = req.body;

      const { rows } = await pg(newTeach, name, image, info);

      res.status(200).json({
        message: "ok",
        data: rows[0],
      });
    } catch (error) {
      res.status(400).json({
        message: "errored",
        data: rows[0],
      });
    }
  }

  async allTeachers(req, res) {
    try {
      const { rows } = await pg(allTeachers);
      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: "errored",
      });
    }
  }

  async oneTeacher(req, res) {
    try {
      const { teacherid } = req.params;
      const { rows } = await pg(oneTeacher, teacherid);

      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: "errored",
      });
    }
  }

  async updateTeacher(req, res) {
    try {
      const { name, image, info } = req.body;
      const { teacherid } = req.params;

      const rows = await pg(updateTeacher, name, image, info, teacherid);

      res.status(200).json({
        message: "ok, data updated",
      });
    } catch (error) {
      res.status(400).json({
        message: "errored",
      });
    }
  }

  async deleteTeacher(req, res) {
    try {
      const { teacherid } = req.params;

      const rows = await pg(deleteTeacher, teacherid);

      res.status(200).json({
        message: `ok, teacher ${teacherid} deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: "errored",
      });
    }
  }
}

module.exports = new Teachers();
