

const nodemailer = require('nodemailer');


const userEmail = 'emmanuelsalken2014@gmail.com';
const userPassword = '***********';

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

// Email content
let mailOptions = {
  from: userEmail,
  to: userEmail,
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from a Node.js script!',
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
