const express = require('express')
const fs = require('fs')

const multer = require('multer')

const upload = multer({ dest: 'public/uploads' })

// const { verifyToken } = require('./services/argonHelper')
const router = express.Router()

const ArtifactsControllers = require('./controllers/ArtifactsControllers')
const EventsControllers = require('./controllers/EventsControllers')
const OrdersControllers = require('./controllers/OrdersControllers')
const PicturesControllers = require('./controllers/PicturesControllers')
const ThemesControllers = require('./controllers/ThemesControllers')
const UsersControllers = require('./controllers/UsersControllers')
const CartControllers = require('./controllers/CartControllers')
const CommentsControllers = require('./controllers/CommentsControllers')

router.post('/auth', UsersControllers.protection)
router.get('/artifacts', ArtifactsControllers.browse)
router.get('/artifacts/:id', ArtifactsControllers.read)
router.put('/artifacts/:id', ArtifactsControllers.edit)
router.post('/artifacts', ArtifactsControllers.add)
router.delete('/artifacts/:id', ArtifactsControllers.destroy)
router.put(
  '/artifacts/:id/pictures',
  upload.single('picture_artifacts'),
  async (req, res) => {
    try {
      const id = req.params.id
      const image = await Image.findOneAndUpdate(
        { _id: id },
        { image: req.file.path }
      )
      res.json(image)
    } catch (err) {
      console.error(err)
      res.status(500).send('Server Error')
    }
  },
  ArtifactsControllers.editArtifact
)

router.post(
  '/artifacts',
  upload.single('picture_artifact'),
  ArtifactsControllers.addArtifact
)

router.get('/events', EventsControllers.browse)
// router.get('/events/:id', EventsControllers.read)
router.put('/events/:id', EventsControllers.edit)
router.post('/events', EventsControllers.add)
router.delete('/events/:id', EventsControllers.destroy)

// router.get('/orders', OrdersControllers.browse)
router.get('/orders', OrdersControllers.read)
// router.get('/orders/:id', OrdersControllers.read)
router.get('/orders/:id', OrdersControllers.readById)
router.get('/users/:id/orders', OrdersControllers.readByuser)

router.put('/orders/:id', OrdersControllers.edit)
router.post('/orders', OrdersControllers.add)
router.delete('/orders/:id', OrdersControllers.destroy)

router.get('/hasorders', OrdersControllers.readHasOrder)
router.get('/hasorders/:id', OrdersControllers.readOneHasOrder)
// router.put('/hasorders/:id', OrdersControllers.edit)
router.post('/hasorders', OrdersControllers.add)
router.delete('/hasorders/:id', OrdersControllers.destroy)

router.get('/pictures', PicturesControllers.browse)
router.get('/pictures/:id', PicturesControllers.read)
router.put('/pictures/:id', upload.single('url_img'), PicturesControllers.edit) // ok
router.post('/pictures/', upload.single('url_img'), PicturesControllers.add) // ok
router.delete('/pictures/:id', PicturesControllers.destroy)

router.get('/avatar', (req, res) => {
  // Vous pouvez remplacer cette partie par votre logique pour récupérer l'URL de l'image
  const imageUrl = './public/uploads/Alexandra.jpg'

  res.json({ imageUrl })
})
router.post('/avatar', upload.single('avatar'), (req, res) => {
  const { originalname } = req.file

  // On récupère le nom du fichier
  const { filename } = req.file

  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) throw err
      res.send('File uploaded')
    }
  )
})

router.get('/themes', ThemesControllers.browse)
router.get('/themes/:id', ThemesControllers.read) // ok
router.put(
  '/themes/:id',
  upload.single('picture_theme'),
  ThemesControllers.edit
)
router.post('/themes', upload.single('picture_theme'), ThemesControllers.add) // ok
router.delete('/themes/:id', ThemesControllers.destroy) // ok

router.get('/users', UsersControllers.browse)
router.get('/users/:id', UsersControllers.read)
router.post('/users/login/', UsersControllers.login)
router.get('/logout', UsersControllers.logout)
// vérifier avec le front si la connexion est ok
router.post('/users', UsersControllers.add)
// Routes à protéger**************************

router.put('/users/:id', UsersControllers.edit)
// router.delete('/users/:id', verifyToken, UsersControllers.destroy)

// router.get('/cart', CartControllers.browse) // si l'admin veut voir tous les paniers --pas important pour le moment
router.get('/cart/:id', CartControllers.read) // OK - pour visualiser tout le panier attribuer à 1 client
// router.put('/cart/:id', CartControllers.edit) // NON FAIT - pas necessaire
// router.post('/cart', CartControllers.add) // NON FAIT - à utiliser pour attribuer un cart à chaque nouveau user
// router.delete('/cart/:id', CartControllers.destroy)// NON FAIT - pas necessaire sauf si possibilité au client de supprimer son profil

router.get('/hascart/:id', CartControllers.readHasCart) // OK nécessaire pour récupérer les infos et incrémenter la table orders
router.put('/hascart/:id', CartControllers.editHasCart) // OK pour modifier la quantité d'un article du panier
router.post('/hascart', CartControllers.addHasCart) // OK - permet d'ajouter des artifacts au panier
router.delete('/hascart/:id', CartControllers.destroyHasCart) // OK - pour supprimer un article au panier

router.get('/comments', CommentsControllers.browse)
router.get('/comments/:id', CommentsControllers.read)
router.put('/comments/:id', CommentsControllers.edit)
router.post('/comments', CommentsControllers.add)
router.delete('/comments/:id', CommentsControllers.destroy)

module.exports = router
