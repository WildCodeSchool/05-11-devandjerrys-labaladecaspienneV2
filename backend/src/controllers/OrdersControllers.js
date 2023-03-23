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
  // console.info(order)

  // algo générateur numéro de commande
  function generateOrderNumber() {
    const today = new Date();
    const date = today.toLocaleString().replace(/\D/g, '');
    return `${date}`;
  }

  const orderNumber = generateOrderNumber()

  // Ajouter la propriété order_number à l'objet order
  order.num_cmd = orderNumber;

  // Insérer l'objet order dans la base de données
  models.orders
    .insert(order)
    .then(([result]) => {
      const values = order.articleInfos.map(info => {

        return [result.insertId, info.id, info.quantity]
      })
      console.log(values)
      models.orders
        .insertOrderHasArtifact(values)
        .then((res1) => {
          models.cart
            .deleteAllHasCart(order.users_id)
            .then((res2) => {
              console.info(`Commande insérée avec succès dans la table Orders: ${result.insertId},  ${order.users_id}`)
              res.location(`/ orders / ${result.insertId}`).sendStatus(201)
            }).catch(err => console.error(err))

        })
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
