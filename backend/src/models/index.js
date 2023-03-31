require('dotenv').config()

const mysql = require('mysql2/promise')

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    'Warning:',
    'Failed to get a DB connection.',
    'Did you create a .env file with valid credentials?',
    "Routes using models won't work as intended"
  )
})

// declare and fill models: that's where you should register your own managers

const models = {}

const ArtifactsManager = require('./ArtifactsManager')

models.artifacts = new ArtifactsManager()
models.artifacts.setDatabase(pool)

const EventsManager = require('./EventsManager')

models.events = new EventsManager()
models.events.setDatabase(pool)

const OrdersManager = require('./OrdersManager')

models.orders = new OrdersManager()
models.orders.setDatabase(pool)

const PicturesManager = require('./PicturesManager')

models.pictures = new PicturesManager()
models.pictures.setDatabase(pool)

const ThemesManager = require('./ThemesManager')

models.themes = new ThemesManager()
models.themes.setDatabase(pool)

const UsersManager = require('./UsersManager')

models.users = new UsersManager()
models.users.setDatabase(pool)

const CartManager = require('./CartManager')

models.cart = new CartManager()
models.cart.setDatabase(pool)

const CommentsManager = require('./CommentsManager')

models.comments = new CommentsManager()
models.comments.setDatabase(pool)

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    )
  },
}

module.exports = new Proxy(models, handler)
