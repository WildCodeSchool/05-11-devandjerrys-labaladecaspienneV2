const models = require('../models')
const { hashPassword } = require('../services/argonHelper')

const jwt = require('jsonwebtoken')

const argon2 = require('argon2')
const getToken = (req) => {
  console.info(req.headers.authorization)
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.token) {
    return req.query.token
  }
  return null
}
const protection = (req, res, next) => {
  const token = getToken(req)
  console.info(token)
  if (token === null) {
    res.status(200).json({
      mess: 'na pas acces au donnes',
      verifyData: false,
      role: false,
    })
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.info(err)
      return res.status(200).json({
        mess: 'na pas acces au donnes',
        verifyData: false,
      })
    }
    console.info('decode', decoded)
    if (decoded.role === 0) {
      decoded.role = false
    } else {
      decoded.role = true
    }
    return res.status(200).json({
      mess: 'user data',
      verifyData: true,
      role: decoded.role,
      userId: decoded.userId,
    })
  })
}

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
    // console.info(email, password, user.id)
    if (!user) {
      res
        .status(401)
        .json({ message: 'Authentication failed. User not found.' })
      return
    }
    // console.info(password, user[0].hashedPassword, user[0].id)
    const passwordMatch = await argon2.verify(user[0].password, password)

    if (!passwordMatch) {
      res
        .status(401)
        .json({ message: 'Authentication failed. Invalid password.' })
      return
    }

    const token = jwt.sign(
      { userId: user[0].id, role: user[0].is_admin },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    // TODO modif
    res.header('Access-Control-Expose-Headers', 'x-access-token')
    res.set('x-access-token', token)
    res.status(200).json({ id: user[0].id, role: user[0].is_admin })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
const logout = (req, res) => {
  localStorage.removeItem('token')
  res.sendStatus(200)
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
  // console.info('Hello', req.body)
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
    const resultCreateCart = await models.cart.createCartUser(result.insertId)
    // const result = await add({ ...req.body, password: hashedPassword })
    const token = jwt.sign(
      { userId: result.insertId, role: false },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    console.info(resultCreateCart)
    // TODO modif
    res.header('Access-Control-Expose-Headers', 'x-access-token')
    res.set('x-access-token', token)
    res.status(200).json({ id: result.insertId, role: false })
    // console.info(result.insertId)
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
  logout,
  protection,
}
