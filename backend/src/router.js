const express = require('express')

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

router.get('/orders', OrdersControllers.browse)
router.get('/orders/:id', OrdersControllers.read)
router.put('/orders/:id', OrdersControllers.edit)
router.post('/orders', OrdersControllers.add)
router.delete('/orders/:id', OrdersControllers.destroy)

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
router.put('/users/:id', UsersControllers.edit)
router.post('/users', UsersControllers.add)
router.delete('/users/:id', UsersControllers.destroy)

router.get('/cart', CartControllers.browse)
router.get('/cart/:id', CartControllers.read)
router.put('/cart/:id', CartControllers.edit)
router.post('/cart', CartControllers.add)
router.delete('/cart/:id', CartControllers.destroy)

router.get('/comments', CommentsControllers.browse)
router.get('/comments/:id', CommentsControllers.read)
router.put('/comments/:id', CommentsControllers.edit)
router.post('/comments', CommentsControllers.add)
router.delete('/comments/:id', CommentsControllers.destroy)

module.exports = router
