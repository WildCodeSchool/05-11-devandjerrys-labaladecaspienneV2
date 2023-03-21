const models = require('../models')

const read = (req, res) => {
  models.orders
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const readByuser = (req, res) => {
  models.orders
    .findOrderByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const readById = (req, res) => {
  models.orders
    .findOneOrder(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const order = req.body

  // TODO validations (length, format...)

  order.id = parseInt(req.params.id, 10)

  models.orders
    .update(order)
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
  const order = req.body

  // TODO validations (length, format...)

  models.orders
    .insert(order)
    .then(([result]) => {
      res.location(`/orders/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.orders
    .deleteOrder(req.params.id)
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

const readHasOrder = (req, res) => {
  models.orders
    .findAllOrderHasArtifact()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const readOneHasOrder = (req, res) => {
  models.orders
    .findOneOrderHasArtifact(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  // browse,
  read,
  edit,
  add,
  destroy,
  readById,
  readHasOrder,
  readOneHasOrder,
  readByuser,
}
