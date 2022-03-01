const Router = require("express");
const router = new Router();
const admin = require("./admin");
const isadmin = require("../../middlewares/middlewares");

router.get("/admin", isadmin.AUTH, admin.allAdmins);
router.get("/admin/:adminid", isadmin.AUTH, admin.oneAdmin);
router.post("/admin", isadmin.AUTH, admin.newAdmin);
router.delete("/admin/:adminid", isadmin.AUTH, admin.deleteAdmin);
router.put("/admin/:adminid", isadmin.AUTH, admin.updateAdmin);
router.post("/login", admin.Login);

module.exports = router;
