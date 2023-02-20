require('dotenv').config()
/*
  Cette ligne charge les variables d'environnement à 
  partir d'un fichier .env. Les variables d'environnement 
  sont utilisées pour stocker des informations sensibles 
  telles que les identifiants de connexion à la base de données. 
  Cela permet de séparer les informations sensibles 
  du code source du programme.
*/

const mysql = require('mysql2/promise')
/*
  Cette ligne importe la bibliothèque MySQL2, 
  qui fournit une interface de programmation pour interagir 
  avec une base de données MySQL. 
*/
// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env
/*
  Cette ligne utilise la déstructuration pour extraire les variables 
  d'environnement liées à la connexion à la base de données.
*/
const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})
/*
  Cette ligne crée un pool de connexions à la base de données. 
  Un pool de connexions est un ensemble de connexions réutilisables 
  à la base de données. La bibliothèque MySQL2 utilise le pool de 
  connexions pour gérer les connexions à la base de données. 
*/
// try a connection

pool.getConnection().catch(() => {
  console.warn(
    'Warning:',
    'Failed to get a DB connection.',
    'Did you create a .env file with valid credentials?',
    "Routes using models won't work as intended"
  )
})
/*
  Cette ligne tente de récupérer une connexion à partir du pool de connexions
  à la base de données. Si la connexion échoue, 
  une erreur est affichée dans la console. 
 */

// declare and fill models: that's where you should register your own managers

const models = {}
/* 
  Cette ligne crée un objet vide qui sera utilisé pour stocker les gestionnaires
  de modèles. Les gestionnaires de modèles sont utilisés pour effectuer des 
  opérations de base de données sur les modèles. 
 */
const ItemManager = require('./ItemManager')
const CharacterManager = require('./CharacterManager')
const HouseManager = require('./HouseManager')
/* 
  Cette ligne importe le gestionnaire de modèles ItemManager. 
  Le gestionnaire de modèles ItemManager est utilisé pour effectuer 
  des opérations de base de données sur l'objet "item".
*/
models.item = new ItemManager()
models.item.setDatabase(pool)
models.characters = new CharacterManager()
models.characters.setDatabase(pool)
models.houses = new HouseManager()
models.houses.setDatabase(pool)
/*
  Ces lignes créent une instance de l'objet ItemManager et la stockent dans l'objet "models". 
  Ensuite, le gestionnaire de modèles ItemManager est 
  configuré avec le pool de connexions à la base de données. 
*/

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
/* 
  Cette ligne crée un gestionnaire pour intercepter les accès à des propriétés non 
  définies de l'objet "models". Si une propriété non définie est accédée, une erreur 
  de référence est générée avec un message personnalisé. 
*/

module.exports = new Proxy(models, handler)
