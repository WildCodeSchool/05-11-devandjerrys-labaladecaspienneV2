const AbstractManager = require('./AbstractManager')

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: 'orders' })
  }

  insert(order) {
    return this.database.query(
      order.price,
      `insert into ${this.table} (num_cmd, comments_id, users_id) values (?, ?, ?)`,
      [order.num_cmd, order.comments_id, order.users_id]
    )
  }

  update(order) {
    return this.database.query(
      `update ${this.table} set num_cmd = ?, comments_id = ?, users_id = ?,  where id = ?`,
      [order.num_cmd, order.comments_id, order.users_id, order.id]
    )
  }
}

module.exports = OrdersManager
