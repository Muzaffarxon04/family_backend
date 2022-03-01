const pg = require("../../utils/pg/pg");
const {
  allOrders,
  deleteOrder,
  newOrder,
  oneOrder,
  updateOrder,
} = require("./model");

class Orders {
  async allOrders(req, res) {
    try {
      const { rows } = await pg(allOrders);

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

  async oneOrder(req, res) {
    try {
      const { orderid } = req.params;
      const { rows } = await pg(oneOrder, orderid);

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

  async newOrder(req, res) {
    try {
      const { name, phone, course } = req.body;
      const { rows } = await pg(newOrder, name, phone, course);

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

  async deleteOrder(req, res) {
    try {
      const { orderid } = req.params;
      const rows = await pg(deleteOrder, orderid);

      res.status(200).json({
        message: `order ${orderid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Orders();
