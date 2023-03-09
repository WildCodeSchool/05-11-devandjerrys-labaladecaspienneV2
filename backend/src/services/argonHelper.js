const argon2 = require('argon2')
// const { optional } = require('joi')
const jwt = require('jsonwebtoken')

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

const hashPassword = (plainPassword) => {
  return argon2
    .hash(plainPassword, hashingOptions)
    .then((hashedPassword) => {
      console.info(hashedPassword)
      return hashedPassword
    })

    .catch((err) => {
      console.error(err)
      throw new Error('Error hashing password')
    })
}

const verifyPassword = (plainPassword, hashedPassword, user) => {
  return argon2
    .verify(plainPassword, hashedPassword, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        user.send('Credentials are valid')
        const payload = { sub: user.id }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '1h',
        })
        const { hashedPassword, ...userWithoutHash } = user
        return { token, user: userWithoutHash }
        // delete req.user.hashedPassword
        // res.send({ token, user: req.user })
      } else {
        // res.sendStatus(401)
        throw new Error('Incorrect password')
      }
    })
    .catch((err) => {
      console.error(err)
      //   res.sendStatus(500)
    })
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
    console.info(verifyToken)
    next()
  } catch (err) {
    console.error(err)
    res.sendStatus(401)
  }
}

module.exports = { hashPassword, verifyPassword, verifyToken }
