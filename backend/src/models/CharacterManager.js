const AbstractManager = require('./AbstractManager')

class CharactersManager extends AbstractManager {
  constructor() {
    super({ table: 'characters' })
  }

  browseAll() {
    return this.database.query(
      `select * from  ${this.table} as ch INNER JOIN houses as h ON ch.houses_id = h.id `
    )
  }

  insert(character) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, imageUrl, houses_id) values (?,?,?,?)`,
      [
        character.firstname,
        character.lastname,
        character.imageUrl,
        character.houses_id,
      ]
    )
  }

  update(character) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [character.title, character.id]
    )
  }
}

module.exports = CharactersManager
