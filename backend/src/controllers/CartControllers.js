const models = require('../models')

// const browse = (req, res) => {
//   models.cart
//     .findAll()
//     .then(([rows]) => {
//       res.send(rows)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

const read = (req, res) => {
  models.cart
    .findOneCart(req.params.id)
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

// const edit = (req, res) => {
//   const cart = req.body

//   // TODO validations (length, format...)

//   cart.id = parseInt(req.params.id, 10)

//   models.pcart
//     .update(cart)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404)
//       } else {
//         res.sendStatus(204)
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

// const add = (req, res) => {
//   const cart = req.body

//   // TODO validations (length, format...)

//   models.cart
//     .insert(cart)
//     .then(([result]) => {
//       res.location(`/pcart/${result.insertId}`).sendStatus(201)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

// const destroy = (req, res) => {
//   models.pcart
//     .delete(req.params.id)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404)
//       } else {
//         res.sendStatus(204)
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

/** **********************Table de Jonction Has_Cart_Artifacts ********************/
const readHasCart = (req, res) => {
  models.cart
    .findOneHasCart(req.params.id)
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
const editHasCart = (req, res) => {
  const cart = req.body

  // TODO validations (length, format...)

  cart.id = parseInt(req.params.id, 10)
  // console.log(cart)
  models.cart
    .updateHasCart(cart)
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

const addHasCart = (req, res) => {
  const cart = req.body

  // TODO validations (length, format...)

  models.cart
    .insertHasCart(cart)
    .then(([result]) => {
      res.location(`/pcart/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroyHasCart = (req, res) => {
  models.cart
    .deleteHasCart(req.params.id)
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
  // browse,
  read,
  // edit,
  // add,
  // destroy,
  readHasCart,
  editHasCart,
  addHasCart,
  destroyHasCart,
}
