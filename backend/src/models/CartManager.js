const AbstractManager = require('./AbstractManager')

class CartManager extends AbstractManager {
  constructor() {
    super({ table: 'cart' })
  }

  insert(cart) {
    return this.database.query(
      `insert into ${this.table} (users_id, date) values (?, ?)`,
      [cart.num_cmd, cart.comments_id, cart.users_id]
    )
  }

  update(cart) {
    return this.database.query(
      `update ${this.table} set users_id = ?, date = ? where id = ?`,
      [cart.num_cmd, cart.comments_id, cart.users_id]
    )
  }
}

module.exports = CartManager
