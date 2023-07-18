const nodemailer = require('nodemailer');
require('dotenv');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secrure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async (req, res) => {
  console.log(`Send Mail`);

  console.log(req.body);
  const data = req.body;

  res.send('In send Mail');
  const mailOptions = {
    from: {
      name: data.name,
      adress: data.email,
    },
    to: process.env.MAIL,
    subject: data.subject,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Mail has been sended`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendMail };
