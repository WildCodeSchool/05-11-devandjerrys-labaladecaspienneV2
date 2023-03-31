const AbstractManager = require('./AbstractManager')

class ArtifactsManager extends AbstractManager {
  constructor() {
    super({ table: 'artifacts' })
  }

  findAllArtifact() {
    return this.database.query(
      `SELECT a.*, 
      GROUP_CONCAT(DISTINCT CONCAT(themes.name_theme) SEPARATOR ',') AS themesAll, 
      GROUP_CONCAT(DISTINCT CONCAT(p.url_img) SEPARATOR ',') AS images 
      FROM ${this.table} as a 
      LEFT JOIN artifacts_has_themes AS at ON at.artifacts_id = a.id 
      LEFT JOIN themes ON at.themes_id = themes.id 
      LEFT JOIN pictures as p ON a.id = p.artifacts_id 
      GROUP BY a.id`
    )
  }

  findOneArtifact(id) {
    return this.database.query(
      `SELECT a.*, 
      GROUP_CONCAT(DISTINCT CONCAT(themes.name_theme) SEPARATOR ',') AS themesAll, 
      GROUP_CONCAT(DISTINCT CONCAT(p.url_img) SEPARATOR ',') AS images 
      FROM ${this.table} as a 
      LEFT JOIN artifacts_has_themes AS at ON at.artifacts_id = a.id 
      LEFT JOIN themes ON at.themes_id = themes.id 
      LEFT JOIN pictures as p ON a.id = p.artifacts_id 
      GROUP BY a.id
      HAVING a.id=?`,
      [id]
    )
  }

  insert(artifact) {
    return this.database.query(
      `insert into ${this.table} (name_arti, description_arti, price, stock, discount, pictures_id) values (?, ?, ?, ?, ?, ?)`,
      [
        artifact.name_arti,
        artifact.description_arti,
        artifact.price,
        artifact.stock,
        artifact.discount,
        artifact.pictures_id,
      ]
    )
  }

  update(artifact) {
    return this.database.query(
      `update ${this.table} set name_arti = ?, description_arti = ?, price = ?, stock = ?, discount = ?, pictures_id = ? where id = ?`,
      [
        artifact.name_arti,
        artifact.description_arti,
        artifact.price,
        artifact.stock,
        artifact.discount,
        artifact.pictures_id,
        artifact.id,
      ]
    )
  }
}

module.exports = ArtifactsManager
