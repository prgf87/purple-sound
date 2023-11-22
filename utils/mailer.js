const nodemailer = require('nodemailer');

export async function sendMail(
  name,
  subject,
  email,
  message,
  companyName,
  location,
  date
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const ukDate = new Date(date).toLocaleDateString('en-GB');

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    name: name,
    subject: subject,
    text: `From: ${name} \nEmail: ${email} \nCompany Name: ${companyName} \nLocation: ${location} \nDate: ${ukDate} \nSubject: ${subject} \nMessage: \n${message}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
