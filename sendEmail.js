var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karimmarwani04@gmail.com',
    pass: '*************'
    
  }
});

var mailOptions = {
  from: 'karimmarwani04@gmail.com',
  to: 'marwanikarim6@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});