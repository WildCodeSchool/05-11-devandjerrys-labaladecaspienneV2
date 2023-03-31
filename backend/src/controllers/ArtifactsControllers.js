const models = require('../models')
const Joi = require('joi')
const fs = require('fs')
const browse = (req, res) => {
  models.artifacts
    .findAllArtifact()
    .then(([rows]) => {
      const result = rows.map((arti) => {
        return {
          ...arti,
          themesAll: arti.themesAll ? arti.themesAll.split(',') : [],

          images: arti.images ? arti.images.split(',') : [],
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

            themesAll: arti.themesAll ? arti.themesAll.split(',') : [],
            images: arti.images ? arti.images.split(',') : [],
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
const editArtifact = (req, res) => {
  const artifactId = parseInt(req.params.id, 10)
  const artifact = req.body

  if (req.file) {
    const { originalname, filename } = req.file
    artifact.picture_artifact = `/public/uploads/${originalname}`
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

  artifact.id = artifactId

  validateAndUpdateArtifact(artifact, res)
}

const validateAndUpdateArtifact = (artifact, res) => {
  const schema = Joi.object({
    archive_artifact: Joi.number().integer().min(0).max(1).required(),
  })

  const { error } = schema.validate({
    archive_artifact: artifact.archive_artifact,
  })

  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }

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
const addArtifact = (req, res) => {
  const artifact = req.body
  const { originalname } = req.file
  const { filename } = req.file
  const schema = Joi.object({
    archive_artifact: Joi.number().integer().min(0).max(1).required(),
  })
  const { error } = schema.validate({
    archive_artifact: artifact.archive_artifact,
  })

  if (error) {
    res.status(400).send(error.details[0].message)
    return
  }
  artifact.id = parseInt(req.params.id, 10)
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        models.artifacts.insert(artifact).then(([result]) => {
          if (result.affectedRows === 0) {
            res.sendStatus(404)
          } else {
            // Update the artifact's picture ID with the newly created picture's ID
            const picture = {
              artifact_id: result.insertId,
              path: `/public/uploads/${originalname}`,
            }
            models.artifacts.insert(
              'INSERT INTO pictures SET ?',
              picture,
              (error, result) => {
                if (error) {
                  console.error(error)
                  res.sendStatus(500)
                } else {
                  // eslint-disable-next-line no-unused-vars
                  const pictureId = result.insertId
                  models.artifacts.query(
                    'UPDATE artifacts SET pictures.id = ? WHERE id = ?',
                    [picture.id],
                    (error, result) => {
                      if (error) {
                        console.error(error)
                        res.sendStatus(500)
                      } else {
                        res.sendStatus(200)
                      }
                    }
                  )
                }
              }
            )
          }
        })
      }
    }
  )
}

const add = (req, res) => {
  const artifact = req.body

  // TODO validations (length, format...)

  models.artifacts
    .insert(artifact)
    .then(([result]) => {
      res.status(201).json({ id: result.insertId })
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
  editArtifact,
  addArtifact,
}
