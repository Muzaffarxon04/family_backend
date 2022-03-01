const pg = require('../utils/pg/pg')

const { admin } = require("./model");

const { verify } = require("../utils/jwt/jwt");

module.exports = {
  AUTH: async (req, res, next) => {
    try {
      const { token } = req.headers;
      console.log(token);
      const admin_id = verify(token);

      if (!admin_id) {
        return res.status(400).json({ message: "Bad request" });
      }

      const adminid = await pg(admin, admin_id);

      if (adminid.rows[0]) {
        next();
      } else {
        console.log("2");
        res.status(400).json({ message: "Bad request" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "Bad request" });
    }
  },
};