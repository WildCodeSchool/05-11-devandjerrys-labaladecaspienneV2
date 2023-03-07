const AbstractManager = require('./AbstractManager')

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: 'orders' })
  }

  insert(order) {
    return this.database.query(
      order.price,
      `insert into ${this.table} (num_cmd, comments_id, users_id, order_amount) values (?, ?, ?, ?)`,
      [order.num_cmd, order.comments_id, order.users_id, order.order_amount]
    )
  }

  insertOrderHasArtifact(order) {
    return this.database.query(
      order.price,
      `INSERT INTO orders_has_artifacts (orders_id, artifact_id, quantity) values (?, ?, ?)`,
      [order.orders_id, order.artifact_id, order.quantity]
    )
  }

  findAllOrder() {
    return this.database.query(
      `SELECT  u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.num_cmd, o.order_amount, a.name_arti ,oha.quantity
      FROM orders AS o
      JOIN users AS u ON o.users_id = u.id
      JOIN orders_has_artifact AS oha ON oha.orders_id = o.id
      JOIN artifacts AS a ON oha.artifact_id = a.id`
    )
  }

  findOneOrder(id) {
    return this.database.query(
      `SELECT  u.lastname, u.firstname, u.email, u.phone, u.number_delivery, u.adress_delivery, u.zip_delivery, u.town_delivery, o.order_amount, a.name_arti ,oha.quantity
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

  deleteOrder(id) {
    return this.database.query(`delete from orders WHERE id = ?`, [id])
  }

  update(order) {
    return this.database.query(
      `update ${this.table} set num_cmd = ?, comments_id = ?, users_id = ? where id = ?`,
      [
        order.num_cmd,
        order.comments_id,
        order.users_id,
        order.id,
        order.order_amount,
      ]
    )
  }
}

module.exports = OrdersManager
