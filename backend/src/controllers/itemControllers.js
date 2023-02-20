const models = require('../models')

// La fonction "browse" nous permet de récupérer tous les items
// d'une table de notre base de données (BDD).

const browse = (req, res) => {
  // Il faut s'interroger sur la provenance de "model".
  // On peut voir que "model" est importé du dossier "model".
  // À l'intérieur du dossier "model", il y a un fichier "index.js"
  // qui rassemble tous les "managers". Vous vous demandez sûrement
  // ce qu'est un "manager" ? C'est une convention de nommage
  // qui désigne l'action de la persistance des données.
  // Mais dans ce cas de figure, c'est simplement une classe qui contient
  // des fonctions qu'on appelle "méthodes" car elles sont dans la classe.
  // Les plus curieux d'entre vous se demanderont sûrement
  // ce que contient précisément le fichier "index.js".
  // Il rassemble seulement les différents managers,
  // donc les différentes fonctions qui vont vous permettre de modifier ou
  // lire des informations contenues dans la base de données.
  models.item
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
  models.item
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
  const item = req.body

  // TODO validations (length, format...)

  item.id = parseInt(req.params.id, 10)

  models.item
    .update(item)
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
  const item = req.body
  // TODO validations (length, format...)

  models.item
    .insert(item)
    .then(([result]) => {
      res.status(201).json(`/items/${result.insertId}`)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'message error' })
    })
}

const destroy = (req, res) => {
  models.item
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
