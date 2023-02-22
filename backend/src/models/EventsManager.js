const AbstractManager = require('./AbstractManager')

class EventsManager extends AbstractManager {
  constructor() {
    super({ table: 'events' })
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
