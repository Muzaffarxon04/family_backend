const Router = require("express");
const router = new Router();
const benefits = require("./benefits");
const isadmin = require("../../middlewares/middlewares");

router.get("/benefits", benefits.allBenefits);
router.get("/benefits/:benefitid", benefits.oneBenefit);
router.post("/benefits", isadmin.AUTH, benefits.newBenefit);
router.delete("/benefits/:benefitid", isadmin.AUTH, benefits.deleteBenefit);
router.put("/benefits/:benefitid", isadmin.AUTH, benefits.updateBenefits);

module.exports = router;
