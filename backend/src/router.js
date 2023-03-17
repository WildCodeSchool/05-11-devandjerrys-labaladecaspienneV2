const express = require('express')
const { verifyToken, verifyPassword } = require('./services/argonHelper')
const router = express.Router()

const ArtifactsControllers = require('./controllers/ArtifactsControllers')
const EventsControllers = require('./controllers/EventsControllers')
const OrdersControllers = require('./controllers/OrdersControllers')
const PicturesControllers = require('./controllers/PicturesControllers')
const ThemesControllers = require('./controllers/ThemesControllers')
const UsersControllers = require('./controllers/UsersControllers')
const CartControllers = require('./controllers/CartControllers')
const CommentsControllers = require('./controllers/CommentsControllers')

router.get('/artifacts', ArtifactsControllers.browse)
router.get('/artifacts/:id', ArtifactsControllers.read)
router.put('/artifacts/:id', ArtifactsControllers.edit)
router.post('/artifacts', ArtifactsControllers.add)
router.delete('/artifacts/:id', ArtifactsControllers.destroy)

router.get('/events', EventsControllers.browse)
router.get('/events/:id', EventsControllers.read)
router.put('/events/:id', EventsControllers.edit)
router.post('/events', EventsControllers.add)
router.delete('/events/:id', EventsControllers.destroy)

// router.get('/orders', OrdersControllers.browse)
router.get('/orders', OrdersControllers.read)
// router.get('/orders/:id', OrdersControllers.read)
router.get('/orders/:id', OrdersControllers.readById)

router.put('/orders/:id', OrdersControllers.edit)
router.post('/orders', OrdersControllers.add)
router.delete('/orders/:id', OrdersControllers.destroy)

router.get('/hasorders', OrdersControllers.readHasOrder)
router.get('/hasorders/:id', OrdersControllers.readOneHasOrder)
// router.put('/hasorders/:id', OrdersControllers.edit)
// router.post('/hasorders', OrdersControllers.add)
router.delete('/hasorders/:id', OrdersControllers.destroy)

router.get('/pictures', PicturesControllers.browse)
router.get('/pictures/:id', PicturesControllers.read)
router.put('/pictures/:id', PicturesControllers.edit)
router.post('/pictures', PicturesControllers.add)
router.delete('/pictures/:id', PicturesControllers.destroy)

router.get('/themes', ThemesControllers.browse)
router.get('/themes/:id', ThemesControllers.read)
router.put('/themes/:id', ThemesControllers.edit)
router.post('/themes', ThemesControllers.add)
router.delete('/themes/:id', ThemesControllers.destroy)

router.get('/users', UsersControllers.browse)
router.get('/users/:id', UsersControllers.read)
router.post('/users/login', verifyPassword, UsersControllers.edit) // vérifier avec le front si la connexion est ok
router.post('/users', UsersControllers.add)
// Routes à protéger**************************

router.put('/users/:id', verifyToken, UsersControllers.edit)
router.delete('/users/:id', verifyToken, UsersControllers.destroy)

// router.get('/cart', CartControllers.browse) // si l'admin veut voir tous les paniers --pas important pour le moment
router.get('/cart/:id', CartControllers.read) // OK - pour visualiser tout le panier attribuer à 1 client
// router.put('/cart/:id', CartControllers.edit) // NON FAIT - pas necessaire
// router.post('/cart', CartControllers.add) // NON FAIT - à utiliser pour attribuer un cart à chaque nouveau user
// router.delete('/cart/:id', CartControllers.destroy)// NON FAIT - pas necessaire sauf si possibilité au client de supprimer son profil

router.get('/hascart/:id', CartControllers.readHasCart) // OK - pas necessaire mais pour tester
router.put('/hascart/:id', CartControllers.editHasCart) // OK pour modifier la quantité d'un article du panier
router.post('/hascart', CartControllers.addHasCart) // OK - permet d'ajouter des artifacts au panier
router.delete('/hascart/:id', CartControllers.destroyHasCart) // OK - pour supprimer un article au panier

router.get('/comments', CommentsControllers.browse)
router.get('/comments/:id', CommentsControllers.read)
router.put('/comments/:id', CommentsControllers.edit)
router.post('/comments', CommentsControllers.add)
router.delete('/comments/:id', CommentsControllers.destroy)

module.exports = router
