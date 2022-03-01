const pg = require("../../utils/pg/pg");
const { sign, verify } = require("../../utils/jwt/jwt");
const {
  allAdmins,
  deleteAdmin,
  login,
  newAdmin,
  oneAdmin,
  updateAdmin,
} = require("./model");

class Admin {
  async allAdmins(req, res) {
    try {
      const { rows } = await pg(allAdmins);

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

  async oneAdmin(req, res) {
    try {
      const { adminid } = req.params;
      const { rows } = await pg(oneAdmin, adminid);

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

  async newAdmin(req, res) {
    try {
      const { login, password } = req.body;
      const { rows } = await pg(newAdmin, login, password);

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

  async deleteAdmin(req, res) {
    try {
      const { adminid } = req.params;
      const rows = await pg(deleteAdmin, adminid);

      res.status(200).json({
        message: `admin ${adminid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateAdmin(req, res) {
    try {
      const { title } = req.body;
      const { adminid } = req.params;
      const rows = await pg(updateAdmin, title, adminid);

      res.status(200).json({
        message: `admin ${adminid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async Login(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username, password);

      const { rows } = await pg(login, username, password);

      if (rows[0]) {
        const token = sign(rows[0].admin_id);

        res.status(200).json({
          message: `ok`,
          data: token,
        });
      } else {
        res.status(400).json({
          message: `errored ${error.message}`,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Admin();
