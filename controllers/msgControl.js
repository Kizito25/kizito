// Console.log Shorthand
const cl = require("../utils/consoleLog");
const nodemailer = require("nodemailer");

// Message Template
const message = require("../utils/msgTemplate");

// Message Sender
exports.sendMessage = (req, res, next) => {
  const hostName = req.hostname;
  const currentURL = req.originalUrl;
  const port = process.env.PORT || 3000;
  const fullURL = hostName + ":" + port + currentURL;
  cl.log(fullURL);
  // const newMessage = `
  //   <p> You have  a new contact request </p>
  //   <h3> Contact details </h3>
  //   <ul>
  //       <li> Name: ${req.body.name}</li>
  //       <li> Email: ${req.body.email} </li>
  //       <li> Message: ${req.body.message} </li>
  //   </ul>
  //   <h3> Message: </h3>
  //   <p><strong> ${req.body.message} </strong></p>
  //   `;

  const newMessage = message;
  // Google Transport
  //   const transport = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "dev@gmail.com",
  //       pass: process.env.EMAIL_PASS,
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  // Etheareal Transport
  //   const transport = nodemailer.createTransport({
  //     host: "smtp.ethereal.email",
  //     port: 587,
  //     auth: {
  //       user: "myra11@ethereal.email",
  //       pass: "H4fEHeaxYA7RteYR9Z",
  //     },
  //   });

  // Personal Host
  const transport = nodemailer.createTransport({
    host: process.env.NODE_MAILER_HOST,
    port: 587,
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
    allowUnauthorized: true,
  });

  let mailOptions = {
    //sender address
    from: ' "My Portfolio" <admin@maxfixdelivery.com>',

    //list of recievers
    to: "devkizito@gmail.com",

    //subject line
    subject: `New Message from: ${req.body.fullname}`,

    //Plain Text Body

    //text: 'Hello',

    //html Body
    html: newMessage,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.redirect("back");
    }
    console.log("Message sent", info.messageId);

    console.log("Preview Url: %s", nodemailer.getTestMessageUrl(info));
    res.redirect(fullURL);
  });
};

// Message Receiver
exports.receiveMessage = (req, res, next) => {
  cl.log("Message sent!");
  cl.log(typeof req.url);
};