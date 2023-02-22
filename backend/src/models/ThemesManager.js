const AbstractManager = require('./AbstractManager')

class ThemesManager extends AbstractManager {
  constructor() {
    super({ table: 'themes' })
  }

  insert(theme) {
    return this.database.query(
      `insert into ${this.table} ( name_theme, description_theme, picture_theme, archive_theme) values (?, ?, ?, ? )`,
      [
        theme.name_theme,
        theme.description_theme,
        theme.picture_theme,
        theme.archive_theme,
      ]
    )
  }

  update(theme) {
    return this.database.query(
      `update ${this.table} set name_theme = ?, description_theme = ?, picture_theme = ?, archive_theme = ?,  where id = ?`,
      [
        theme.name_theme,
        theme.description_theme,
        theme.picture_theme,
        theme.archive_theme,
        theme.id,
      ]
    )
  }
}

module.exports = ThemesManager
