const AbstractManager = require('./AbstractManager')

class CartManager extends AbstractManager {
  constructor() {
    super({ table: 'cart' })
  }

  createCartUser(idUser) {
    return this.database.query(
      `insert into ${this.table} (id, users_id) values (?, ?)`,
      [idUser, idUser]
    )
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

  findOneHasCart(id) {
    return this.database.query(
      `SELECT ha.cart_id, ha.artifacts_id, ha.quantity, orders.id
      FROM cart_has_artifacts AS ha 
      JOIN cart 
      ON ha.cart_id=cart.id
      JOIN orders
      ON orders.users_id=cart.users_id
      WHERE (id_cart_has_artifacts = ?)`,
      [id]
    )
  }

  updateHasCart(cart) {
    const result = this.database.query(
      `UPDATE cart_has_artifacts SET quantity = ? WHERE (id_cart_has_artifacts = ?)`,
      [cart.quantity, cart.id]
    )
    return result
  }

  deleteHasCart(id) {
    return this.database.query(
      `delete from cart_has_artifacts WHERE (id_cart_has_artifacts = ?)`,
      [id]
    )
  }

  deleteAllHasCart(id) {
    return this.database.query(
      `delete from cart_has_artifacts WHERE (cart_id = ?)`,
      [id]
    )
  }

  findOneCart(id) {
    return this.database.query(
      `SELECT ha.id_cart_has_artifacts, a.id, name_arti, price, quantity, (price * quantity) AS total, MAX(url_img) AS url_img
      FROM cart_has_artifacts AS ha 
      LEFT JOIN artifacts AS a ON ha.artifacts_id=a.id
      LEFT JOIN pictures AS p ON p.artifacts_id = a.id
      WHERE ha.cart_id=?
      GROUP BY ha.artifacts_id, name_arti, price, quantity, total, ha.id_cart_has_artifacts`,
      [id]
    )
  }

  update(cart) {
    return this.database.query(
      `update ${this.table} set users_id = ?, date = ? where id = ?`,
      [cart.users_id, cart.date]
    )
  }
}

module.exports = CartManager
