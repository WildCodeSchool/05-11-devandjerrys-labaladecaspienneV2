// mailer.js

// on importe les éléments dont on a besoin

require('dotenv').config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secureProtocol: 'TLSv1_method',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

module.exports = transporter
