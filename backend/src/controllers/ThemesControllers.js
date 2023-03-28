const models = require('../models')
const fs = require('fs')
const Joi = require('joi')
const browse = (req, res) => {
  models.themes
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
  models.themes
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
  const themeId = parseInt(req.params.id, 10)
  const theme = req.body

  if (req.file) {
    const { originalname, filename } = req.file
    theme.picture_theme = `/public/uploads/${originalname}`
    fs.rename(
      `./public/uploads/${filename}`,
      `./public/uploads/${originalname}`,
      (err) => {
        if (err) {
          console.error(err)
          res.sendStatus(500)
        }
      }
    )
  }

  theme.id = themeId

  validateAndUpdateTheme(theme, res)
}
const validateAndUpdateTheme = (theme, res) => {
  const schema = Joi.object({
    archive_theme: Joi.number().integer().min(0).max(1).required(),
  })

  const { error } = schema.validate({ archive_theme: theme.archive_theme })

  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

  models.themes
    .update(theme)
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
  const theme = req.body
  const { originalname } = req.file
  const { filename } = req.file
  const schema = Joi.object({
    archive_theme: Joi.number().integer().min(0).max(1).required(),
  })

  const { error } = schema.validate({ archive_theme: theme.archive_theme })

  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

  theme.id = parseInt(req.params.id, 10)
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        models.themes
          .insert(theme)
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
    }
  )
  theme.picture_theme = `/public/uploads/${originalname}`
}

const destroy = (req, res) => {
  models.themes
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
