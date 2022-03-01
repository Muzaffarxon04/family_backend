const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://postgres:parolsiz@localhost:5432/family",
});

module.exports = pool;
