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

  insertHasCart(cart) {
    return this.database.query(
      `INSERT INTO cart_has_artifacts (cart_id, artifacts_id, quantity) VALUES (?, ?, ?);`,
      [cart.cart_id, cart.artifacts_id, cart.quantity]
    )
  }

  findOneCart(id) {
    return this.database.query(
      `SELECT name_arti, price, quantity, (price * quantity) AS total 
      FROM cart_has_artifacts AS ha 
      LEFT JOIN artifacts AS a ON ha.artifacts_id=a.id
      WHERE ha.cart_id=?`,
      [id]
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
