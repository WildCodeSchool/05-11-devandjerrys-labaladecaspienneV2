const Joi = require('joi')

const validateUser = (user) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false })

  if (error) {
    return error.details.map((error) => error.message)
  }

  return false
}

// const registerSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(8).required(),
//   confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
// })

module.exports = {
  validateUser,
  // registerSchema,
}
