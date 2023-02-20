const express = require('express')

const router = express.Router()

const itemControllers = require('./controllers/itemControllers')
const characterController = require('./controllers/characterController')
const houseController = require('./controllers/houseController')

// route disponible de basse garder les a titre d'exemple
// si on va plus loin  dans la reflextion on peut voir que le fichier itemController.js
// nous fourni des methode que lont peut utiliser " browse, read, edit, add, destroy"

router.get('/items', itemControllers.browse)
router.get('/items/:id', itemControllers.read)
router.put('/items/:id', itemControllers.edit)
router.post('/items', itemControllers.add)
router.delete('/items/:id', itemControllers.destroy)

router.get('/characters', characterController.browse)
router.post('/characters', characterController.add)

router.get('/houses', houseController.browse)
router.post('/houses', houseController.add)

module.exports = router
