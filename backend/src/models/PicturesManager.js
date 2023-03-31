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

  async delete(id) {
    // Récupérer les images liées à l'artifact
    const images = await this.database.query(
      `SELECT * FROM pictures WHERE artifacts_id = ?`,
      [id]
    )

    // Supprimer les images liées à l'artifact

    // eslint-disable-next-line no-unused-vars
    for (const image of images) {
      await this.database.query(`DELETE FROM pictures WHERE id = ?`, [id])
    }

    // Supprimer l'artifact
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id])
  }
}

module.exports = PicturesManager
