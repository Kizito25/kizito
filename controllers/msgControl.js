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
  const newMessage = `
  <!DOCTYPE html>
  <html>
  <ul>
  <li> Name: ${req.body.name}</li>
  <li> Email: ${req.body.email} </li>
  <li> Message: ${req.body.message} </li>
  </ul>
 <h3> Message: </h3>
 <strong> ${req.body.message} </strong>

  </html>
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
