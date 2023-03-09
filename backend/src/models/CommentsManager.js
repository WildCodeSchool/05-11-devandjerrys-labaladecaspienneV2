const AbstractManager = require('./AbstractManager')

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: 'comments' })
  }

  // Route POST testée ok
  insert(comment) {
    return this.database.query(
      `insert into ${this.table} (content, date_create) values (?, ?)`,
      [comment.content, comment.date_create]
    )
  }

  // Route UPDATE testée ok
  update(comment) {
    return this.database.query(
      `update ${this.table} set content = ?, date_update = ?, where id = ?`,
      [comment.content, comment.date_update]
    )
  }

  // Route GET findAllComments testée ok
  findAllComments() {
    return this.database.query(
      `SELECT content, nickname, comments.date_create FROM ${this.table}
      JOIN orders ON comments_id = comments.id
      JOIN users ON users_id = users.id;`
    )
  }

  // Route GET findOneComments testée ok
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

  // deleteComments(id) {
  //   return this.database.query(`DELETE FROM comments WHERE id = ?`, [id])
  // }
}

module.exports = CommentsManager
