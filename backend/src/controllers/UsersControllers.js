const models = require('../models')
const { hashPassword } = require('../services/argonHelper')

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.users
    .find(req.params.id)
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
  const user = req.body

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10)

  models.users
    .update(user)
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

const add = async (req, res) => {
  const user = req.body

  // TODO validations (length, format...)

  try {
    // Hasher le mot de passe avec la fonction hashPassword()
    const hashedPassword = await hashPassword(user.password)

    // Mettre à jour le mot de passe de l'utilisateur avec le hash
    user.password = hashedPassword

    const [result] = await models.users.insert({
      ...req.body,
      password: hashedPassword,
    })
    // const result = await add({ ...req.body, password: hashedPassword })

    res.location(`users/${result.insertId}`).sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const destroy = (req, res) => {
  models.users
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
