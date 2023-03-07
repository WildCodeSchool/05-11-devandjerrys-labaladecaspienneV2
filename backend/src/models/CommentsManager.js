const AbstractManager = require('./AbstractManager')

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: 'comments' })
  }

  insert(comment) {
    return this.database.query(
      `insert into ${this.table} (content, date_create, date_update) values (?, ?, ?)`,
      [comment.content, comment.date_create, comment.date_update]
    )
  }

  update(comment) {
    return this.database.query(
      `update ${this.table} set content = ?, date_create = ?, date_update = ? where id = ?`,
      [comment.content, comment.date_create, comment.date_update]
    )
  }

  findAllComments() {
    return this.database.query(
      `SELECT content, nickname, comments.date_create FROM ${this.table}
      JOIN orders ON comments_id = comments.id
      JOIN users ON users_id = users.id;`
    )
  }

  findOneComments(id) {
    return this.database.query(
      `SELECT c.id, content, nickname, c.date_create 
      FROM ${this.table} AS c
      JOIN orders AS o 
      ON o.comments_id = c.id
      JOIN users AS u 
      ON o.users_id = u.id
      HAVING id=?`,
      [id]
    )
  }

  deleteComments(id) {
    return this.database.query(`DELETE FROM comments WHERE id = ?`, [id])
  }
}

module.exports = CommentsManager
