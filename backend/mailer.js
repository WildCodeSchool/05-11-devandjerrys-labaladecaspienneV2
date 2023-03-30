require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: process.env.SENDGRID_RECIPIENT_EMAIL, // Change to your recipient
  from: process.env.SENDGRID_SENDER_EMAIL, // Change to your verified sender
  subject: 'Contact La balade caspienne',
  text: 'Message reçu depuis le formulaire contact :',
  html: '<strong>Message reçu depuis le formulaire contact :</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    // console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
