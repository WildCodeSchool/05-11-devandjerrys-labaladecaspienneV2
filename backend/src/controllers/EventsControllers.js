const models = require('../models')

const browse = (req, res) => {
  models.events
    .findAllEvents()
    .then(([rows]) => {
      const result = rows.map((event) => {
        return {
          ...event,
          themesEvent: event.themesEvent.split(','),
        }
      })
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.events
    .findOneEvent(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        const result = rows.map((event) => {
          return {
            ...event,
            themesEvent: event.themesEvent.split(','),
          }
        })
        res.send(result[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const event = req.body

  // TODO validations (length, format...)

  event.id = parseInt(req.params.id, 10)

  models.events
    .update(event)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const event = req.body

  // TODO validations (length, format...)

  models.events
    .insert(event)
    .then(([result]) => {
      res.location(`/events/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.events
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
}
