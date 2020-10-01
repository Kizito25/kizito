// Console.log Shorthand
const cl = require("../utils/consoleLog");
const nodemailer = require("nodemailer");

// Message Sender
exports.sendMessage = (req, res, next) => {
  const hostName = req.hostname;
  const currentURL = req.originalUrl;
  const port = process.env.PORT || 3000;
  const fullURL = hostName + ":" + port + currentURL;
  cl.log(fullURL);

  // New Email Body
  const newMessage = `
  <h4> Message: <strong> ${req.body.message} </strong> </h4>
  <p> Sender </p>
  <ul>
  <li> Name: ${req.body.name}</li>
  <li> Email: ${req.body.email} </li>
  </ul>
    `;

  // Google Transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // DEBUG EMAIL

  // const transport = nodemailer.createTransport({
  //   host: "localhost",
  //   port: 1025,
  //   auth: {
  //     user: "project.1",
  //     pass: "secret.1",
  //   },
  // });

  let mailOptions = {
    //sender address
    from: ' "My Portfolio" <devkizito@gmail.com>',

    //list of recievers
    to: "devkizito@gmail.com",

    headers: {
      "x-priority": "1",
      "x-msmail-priority": "High",
      importance: "high",
    },

    //subject line
    subject: `New Message from: ${req.body.name}`,

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
    res.redirect("back");
  });
};

// Message Receiver
exports.receiveMessage = (req, res, next) => {
  cl.log("Message sent!");
  cl.log(typeof req.url);
};
