const AbstractManager = require('./AbstractManager')

class EventsManager extends AbstractManager {
  constructor() {
    super({ table: 'events' })
  }

  findAllEvents() {
    return this.database.query(
      `SELECT e.*, 
      GROUP_CONCAT(DISTINCT CONCAT(themes.name_theme) SEPARATOR ',') AS themesEvent
      FROM ${this.table} as e
      LEFT JOIN events_has_themes AS et ON et.events_id = e.id 
      LEFT JOIN themes ON et.themes_id = themes.id 
      GROUP BY e.id`
    )
  }

  findOneEvent(id) {
    return this.database.query(
      `SELECT e.*, 
      GROUP_CONCAT(DISTINCT CONCAT(themes.name_theme) SEPARATOR ',') AS themesEvent
      FROM ${this.table} as e
      LEFT JOIN events_has_themes AS et ON et.events_id = e.id 
      LEFT JOIN themes ON et.themes_id = themes.id 
      GROUP BY e.id`,
      [id]
    )
  }

  insert(event) {
    return this.database.query(
      event.price,
      `insert into ${this.table} (name_event, date_event, description_event, picture_event, archive_event) values (?, ?, ?, ?, ?)`,
      [
        event.name_event,
        event.date_event,
        event.description_event,
        event.picture_event,
        event.archive_event,
      ]
    )
  }

  update(event) {
    return this.database.query(
      `update ${this.table} set name_event = ?, date_event = ?, description_event = ?, picture_event = ?, archive_event = ? where id = ?`,
      [
        event.name_event,
        event.date_event,
        event.description_event,
        event.picture_event,
        event.archive_event,
        event.id,
      ]
    )
  }
}

module.exports = EventsManager
