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
}

module.exports = CommentsManager
