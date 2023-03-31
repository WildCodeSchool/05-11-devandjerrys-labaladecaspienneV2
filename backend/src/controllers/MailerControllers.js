require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})
const send = (req, res) => {
  const { fn, ln, e, msg } = req.body
  transporter.sendMail(
    {
      from: 'att.tolvaj@gmail.com',
      to: 'mel_cecilia@hotmail.com',
      subject: 'message',
      text: `${fn} ${ln},${e} my message ${msg}`,
      html: `<p>${fn} ${ln} </p> <br/> <p>${e} ${msg} </p>`,
    },
    (err, info) => {
      if (err) {
        console.error(err)
        res.status(500).send(err)
      } else {
        console.info(info)
        res.status(200).send(info)
      }
    }
  )
}
module.exports = { send }
