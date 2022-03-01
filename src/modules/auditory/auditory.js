const pg = require("../../utils/pg/pg");
const {
  allAuditories,
  deleteAuditory,
  newAuditory,
  oneAuditory,
  updateAuditory,
} = require("./model");

class Auditory {
  async allAuditory(req, res) {
    try {
      const { rows } = await pg(allAuditories);

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

  async oneAuditory(req, res) {
    try {
      const { auditoryid } = req.params;
      const { rows } = await pg(oneAuditory, auditoryid);

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

  async newAuditory(req, res) {
    try {
      const { title, course } = req.body;
      const { rows } = await pg(newAuditory, title, course);

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

  async deleteAuditory(req, res) {
    try {
      const { auditoryid } = req.params;
      const rows = await pg(deleteAuditory, auditoryid);

      res.status(200).json({
        message: `auditory ${auditoryid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateAuditory(req, res) {
    try {
      const { title } = req.body;
      const { auditoryid } = req.params;
      const rows = await pg(updateAuditory, title, auditoryid);

      res.status(200).json({
        message: `auditory ${auditoryid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Auditory();
