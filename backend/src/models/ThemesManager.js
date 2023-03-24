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
    const fields = []
    const values = []

    if (theme.name_theme !== undefined) {
      fields.push('name_theme = ?')
      values.push(theme.name_theme)
    }

    if (theme.description_theme !== undefined) {
      fields.push('description_theme = ?')
      values.push(theme.description_theme)
    }

    if (theme.picture_theme !== undefined) {
      fields.push('picture_theme = ?')
      values.push(theme.picture_theme)
    }

    if (theme.archive_theme !== undefined) {
      fields.push('archive_theme = ?')
      values.push(theme.archive_theme)
    }

    if (fields.length === 0) {
      throw new Error('No fields to update')
    }

    values.push(theme.id)

    const sql = `UPDATE ${this.table} SET ${fields.join(', ')} WHERE id = ?`

    return this.database.query(sql, values)
  }
}

module.exports = ThemesManager
