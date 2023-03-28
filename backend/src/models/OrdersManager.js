const AbstractManager = require('./AbstractManager')

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: 'orders' })
  }

  insert(order) {
    return this.database.query(
      `insert into ${this.table} (num_cmd, comments_id, users_id, orderAmount) values (?, ?, ?, ?)`,
      [order.num_cmd, order.comments_id, order.users_id, order.orderAmount]
    )
  }

  // insertOrderHasArtifact(order, id) {
  insertOrderHasArtifact(values) {
    return this.database.query(
      // order.price,
      `INSERT INTO orders_has_artifact (orders_id, artifact_id, quantity) values ?`,
      [values] // Version inititale// [id, order.artifact_id, order.quantity]
    )
  }

  findAllOrder() {
    return this.database.query(
      `SELECT  u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.num_cmd, o.orderAmount, a.name_arti ,oha.quantity
      FROM orders AS o
      JOIN users AS u ON o.users_id = u.id
      JOIN orders_has_artifact AS oha ON oha.orders_id = o.id
      JOIN artifacts AS a ON oha.artifact_id = a.id
      ORDER BY o.num_cmd DESC`
    )
  }

  findOneOrder(id) {
    return this.database.query(
      `SELECT  u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.orderAmount, a.name_arti ,oha.quantity
      FROM orders AS o
      JOIN users AS u ON o.users_id = u.id
      JOIN orders_has_artifact AS oha ON oha.orders_id = o.id
      JOIN artifacts AS a ON oha.artifact_id = a.id
      WHERE o.id = ?
      `,
      [id]
    )
  }

  findAllOrderHasArtifact() {
    return this.database.query(
      `SELECT u.id, u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.num_cmd
      FROM orders_has_artifact AS oha 
      JOIN orders AS o ON oha.orders_id = o.id
      JOIN users AS u ON o.users_id = u.id
      JOIN artifacts AS a ON oha.artifact_id=a.id`
    )
  }

  findOneOrderHasArtifact(id) {
    return this.database.query(
      `SELECT u.id, u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.num_cmd
      FROM orders_has_artifact AS oha 
      JOIN orders AS o ON oha.orders_id = o.id
      JOIN users AS u ON o.users_id = u.id
      JOIN artifacts AS a ON oha.artifact_id=a.id
      WHERE o.id = ?`,
      [id]
    )
  }

  findOrderByUser(id) {
    return this.database.query(
      `SELECT id, num_cmd, comments_id, users_id, orderAmount 
      FROM ${this.table} WHERE   users_id = ?`,
      [id]
    )
  }

  deleteOrder(id) {
    return this.database.query(`delete from orders WHERE id = ?`, [id])
  }

  update(order) {
    return this.database.query(
      `update ${this.table} set num_cmd = ?, comments_id = ?, users_id = ?, order_amount = ?, where id = ?`,
      [
        order.num_cmd,
        order.comments_id,
        order.users_id,
        order.id,
        order.orderAmount,
      ]
    )
  }
}

module.exports = OrdersManager
