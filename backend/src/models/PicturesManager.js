const AbstractManager = require('./AbstractManager')

class PicturesManager extends AbstractManager {
  constructor() {
    super({ table: 'pictures' })
  }

  insert(picture) {
    return this.database.query(
      `insert into ${this.table} (name_img, url_img, artifacts_id) values (?, ?, ?)`,
      [picture.name_img, picture.url_img, picture.artifacts_id]
    )
  }

  update(picture) {
    return this.database.query(
      `update ${this.table} set name_img = ?, url_img = ?, artifacts_id = ? where id = ?`,
      [picture.name_img, picture.url_img, picture.artifacts_id, picture.id]
    )
  }
}

module.exports = PicturesManager
