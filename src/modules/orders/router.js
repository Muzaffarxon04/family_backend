const Router = require("express");
const router = new Router();
const orders = require("./orders");
const isadmin = require("../../middlewares/middlewares");

router.get("/orders", isadmin.AUTH, orders.allOrders);
router.get("/orders/:orderid", isadmin.AUTH, orders.oneOrder);
router.post("/orders", orders.newOrder);
router.delete("/orders/:orderid", isadmin.AUTH, orders.deleteOrder);

module.exports = router;
