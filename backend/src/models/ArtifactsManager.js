const AbstractManager = require('./AbstractManager')

class ArtifactsManager extends AbstractManager {
  constructor() {
    super({ table: 'artifacts' })
  }

  // INNER JOIN pictures ON pictures.artifacts_id = ${this.table}.id

  findArtifact(id) {
    return this.database.query(
      `select * from  ${this.table}
      INNER JOIN artifacts_has_themes AS at ON at.artifacts_id = ${this.table}.id
      INNER JOIN themes ON at.themes_id = themes.id`,
      [id]
    )
  }

  findAllArtifact(id) {
    return this.database.query(
      `SELECT a.*,  GROUP_CONCAT(CONCAT(p.url_img) SEPARATOR ',\n') AS images
      FROM ${this.table} as a
      INNER JOIN pictures as p ON a.id = p.artifacts_id
      GROUP BY  a.id
      HAVING a.id=a.id`,
      [id]
    )
  }

  insert(artifact) {
    return this.database.query(
      `insert into ${this.table} (name_arti, description_arti, price, stock, discount) values (?, ?, ?, ?, ?)`,
      [
        artifact.name_arti,
        artifact.description_arti,
        artifact.price,
        artifact.stock,
        artifact.discount,
      ]
    )
  }

  update(artifact) {
    return this.database.query(
      `update ${this.table} set name_arti = ?, description_arti = ?, price = ?, stock = ?, discount = ? where id = ?`,
      [
        artifact.name_arti,
        artifact.description_arti,
        artifact.price,
        artifact.stock,
        artifact.discount,
        artifact.id,
      ]
    )
  }
}

module.exports = ArtifactsManager
