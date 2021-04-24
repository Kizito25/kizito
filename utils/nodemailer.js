const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const favicon = require("serve-favicon");
const nodemailer = require("nodemailer");

const app = express();

//View Emgine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Static Folder
app.use(favicon(path.join(__dirname, "favicon.png")));
app.use("/public", express.static(path.join(__dirname, "public")));

//Body Parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Index Page
app.get("/", (req, res) => {
  res.render("index");
});

//Index Page
app.get("/home", (req, res) => {
  res.render("index");
});

//About Page
app.get("/about", (req, res) => {
  res.render("about");
});

//Projects Page
app.get("/projects", (req, res) => {
  res.render("projects");
});

//Contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

//send Mail
app.post("/send", (req, res) => {
  const newMessage = `
    <p> You have  a new contact request </p>
    <h3> Contact details </h3>
    <ul> 
        <li> Name: ${req.body.fullname}</li>
        <li> Email: ${req.body.email} </li>
        <li> Message: ${req.body.message} </li>
    </ul>
    <h3> Message: </h3>
    <p><strong> ${req.body.message} </strong></p>
    `;

  /*const transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'myra11@ethereal.email',
            pass: 'H4fEHeaxYA7RteYR9Z'
        }*/

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kizito25@gmail.com",
      pass: "jesuschr",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: ' "My Portfolio" <kizito25@gmail.com>', //sender address
    to: "kizito1313@gmail.com, kizito25@gmail.com", //list of recievers
    subject: `New Message from: ${req.body.fullname}`, //subject line
    //text: 'Hello', //Plain Text Body
    html: newMessage, //html Body
  };

  //send mail with defined transport object

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent", info.messageId);

    console.log("Preview Url: %s", nodemailer.getTestMessageUrl(info));
    res.render("contact", { msg: "Message delivered successfully" });
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started ...");
});
