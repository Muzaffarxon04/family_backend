const Router = require("express");
const router = new Router();
const auditory = require("./auditory");
const isadmin = require("../../middlewares/middlewares");

router.get("/auditory", auditory.allAuditory);
router.get("/auditory/:auditoryid", auditory.oneAuditory);
router.post("/auditory", isadmin.AUTH, auditory.newAuditory);
router.delete("/auditory/:auditoryid", isadmin.AUTH, auditory.deleteAuditory);
router.put("/auditory/:auditoryid", isadmin.AUTH, auditory.updateAuditory);

module.exports = router;
