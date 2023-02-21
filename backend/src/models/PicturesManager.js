const AbstractManager = require('./AbstractManager')

class PicturesManager extends AbstractManager {
  constructor() {
    super({ table: 'pictures' })
  }

  insert(picture) {
    return this.database.query(
      picture.price,
      `insert into ${this.table} (name_img, url_img, is_active, artifacts_id) values (?, ?, ?, ?)`,
      [
        picture.name_img,
        picture.url_img,
        picture.is_active,
        picture.artifacts_id,
      ]
    )
  }

  update(picture) {
    return this.database.query(
      `update ${this.table} set name_img = ?, url_img = ?, is_active = ?, artifacts_id = ?, where id = ?`,
      [
        picture.name_img,
        picture.url_img,
        picture.is_active,
        picture.artifacts_id,
        picture.id,
      ]
    )
  }
}

module.exports = PicturesManager
