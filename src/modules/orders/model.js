module.exports = {
  allOrders: `select * from orders`,
  oneOrder: `select * from orders where order_id = $1`,
  newOrder: `insert into orders(order_name, order_phone, order_course) values($1, $2, $3) returning *`,
  updateOrder: `update orders set order_name = $1, order_phone =$2, order_course = $3 where order_id = $4`,
  deleteOrder: ` delete from orders where order_id = $1`,
};
