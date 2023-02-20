const models = require('../models')

const browse = (req, res) => {
  models.houses
    .findAll()
    .then(([result]) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const house = req.body

  models.houses
    .insert(house)
    .then(([result]) => {
      res.status(201).json({ id: result.insertId, ...house })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
module.exports = { browse, add }
