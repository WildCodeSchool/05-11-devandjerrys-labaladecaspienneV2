const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      // console.log(hashedPassword)

      req.body.hashedPassword = hashedPassword
      delete req.body.password

      next()
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const verifyPassword = (req, res, next) => {
  // console.log( req.body)
  if (!req.body.email || !req.body.password) {
    res.sendStatus(401)
    return
  }

  argon2
    .verify(req.body.password, req.user.hashedPassword)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '1h',
        })
        delete req.user.hashedPassword
        console.info({ token, user: req.user })
      } else {
        console.info('Authentication failed')
      }
    })
    .catch((err) => console.error(err))
}

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get('Authorization')

    if (authorizationHeader == null) {
      throw new Error('Authorization header is missing')
    }

    const [type, token] = authorizationHeader.split(' ')

    if (type !== 'Bearer') {
      throw new Error("Authorization header has not the 'Bearer' type")
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.sendStatus(401)
  }
}

module.exports = { hashPassword, verifyPassword, verifyToken }
