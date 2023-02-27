const models = require('../models')

const browse = (req, res) => {
  models.artifacts
    .findAllArtifact()
    .then(([rows]) => {
      const result = rows.map((arti) => {
        return {
          ...arti,
          themesAll: arti.themesAll ? arti.themesAll.split(',') : [],

          images: arti.images.split(','),
        }
      })
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.artifacts
    .findOneArtifact(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        // ALGO POUR CREER UN TABLEAU DES IMAGES ET THEMES
        const result = rows.map((arti) => {
          return {
            ...arti,
            themesAll: arti.themesAll.split(','),
            images: arti.images.split(','),
          }
        })
        res.send(result[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const artifact = req.body

  // TODO validations (length, format...)

  artifact.id = parseInt(req.params.id, 10)

  models.artifacts
    .update(artifact)
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
  const artifact = req.body

  // TODO validations (length, format...)

  models.artifacts
    .insert(artifact)
    .then(([result]) => {
      res.location(`/artifacts/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.artifacts
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
