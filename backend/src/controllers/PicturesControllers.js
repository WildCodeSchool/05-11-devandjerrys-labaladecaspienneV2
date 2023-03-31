const models = require('../models')
const fs = require('fs')

const browse = (req, res) => {
  models.pictures
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
  models.pictures
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
  const picture = req.body
  const { originalname } = req.file
  const { filename } = req.file

  // TODO validations (length, format...)

  picture.id = parseInt(req.params.id, 10)
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        models.pictures
          .update(picture)
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
  picture.url_img = `/public/uploads/${originalname}`
  picture.name_img = `${originalname}`
}

const add = (req, res) => {
  const picture = {
    name_img: req.body.name_img,
    url_img: `/public/uploads/${req.file.originalname}`,
    artifacts_id: req.body.artifacts_id,
  }

  // TODO validations (length, format...)

  fs.rename(
    `./public/uploads/${req.file.filename}`,
    `./public/uploads/${req.file.originalname}`,
    (err) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        models.pictures
          .insert(picture)
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
}

const destroy = async (req, res) => {
  try {
    const id = JSON.parse(req.params.id).id
    console.log('Number', id)
    const [rows] = await models.pictures.find(id)
    if (!rows[0]) {
      res.sendStatus(404)
      return
    }
    const picture = rows[0]
    await fs.promises.unlink(`./public${picture.url_img}`)
    const [result] = await models.pictures.delete(id)
    if (result.affectedRows === 0) {
      res.sendStatus(404)
    } else {
      res.sendStatus(204)
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
}
