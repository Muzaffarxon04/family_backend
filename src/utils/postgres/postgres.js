const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    "postgres://yxgzaudi:WAxRgdujeti_k3SZqqD4XS9aLDmDlxQY@castor.db.elephantsql.com/yxgzaudi",
});

module.exports = pool;
