module.exports = {
  allAdmins: `select * from admin`,
  oneAdmin: `select from admin where admin_id = $1`,
  newAdmin: `insert into admin(admin_login, admin_password) values($1, $2) returning *`,
  updateAdmin: `update admin set admin_login = $1, admin_password = $2 where admin_id = $3`,
  deleteAdmin: `delete admin where admin_id = $1`,
  login: `select * from admin where admin_login = $1 AND admin_password=$2`,
};
