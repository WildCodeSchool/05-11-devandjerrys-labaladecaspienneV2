const models = require('../models')
const { hashPassword } = require('../services/argonHelper')

const jwt = require('jsonwebtoken')

const argon2 = require('argon2')

// const updateUsers = (req, res) => {
//   const id = parseInt(req.params.id)
//   const { email, hashedPassword } = req.body

//   this.database
//     .query('update users set  email = ?, hashedPassword =?, where id = ?', [
//       email,

//       hashedPassword,
//       id,
//     ])
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.status(404).send('Not Found')
//       } else {
//         res.sendStatus(204)
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500).send('Error editing the user')
//     })
// }
const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const [user] = await models.users.findOne(email)
    console.info(email, password, user.id)
    if (!user) {
      res
        .status(401)
        .json({ message: 'Authentication failed. User not found.' })
      return
    }
    console.info(password, user[0].hashedPassword, user[0].id)
    const passwordMatch = await argon2.verify(user[0].password, password)

    if (!passwordMatch) {
      res
        .status(401)
        .json({ message: 'Authentication failed. Invalid password.' })
      return
    }

    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.status(200).json({ token, id: user[0].id })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

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
  // console.log('Hello', req.body)
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
    // console.log(result.insertId)
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
  login,
}
