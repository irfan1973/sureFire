const http = require("https");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const formidable = require("formidable");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,UPDATE,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.get("/test", (req, res, next) => {
  res.status(200).json("Node is active and working");
});

// Creating object of key and certificate
// for SSL
const options = {
  key: fs.readFileSync("PositiveSSL_surefiresecurity.com.pem"),
  cert: fs.readFileSync("PositiveSSL_surefiresecurity.com.pem"),
};

// Creating https server by passing
// options and app object

const server = http
  .createServer(options, app)
  .listen(3000, function (req, res) {
    console.log("server started at port 3000");
  });

app.post("/upload", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files["uploads[]"][0].filepath;
    var newpath = "cvs/" + files["uploads[]"][0].originalFilename;
    fs.copyFile(oldpath, newpath, function (err) {
      if (err) {
        res
          .status(200)
          .send({ Status: "Error", message: "Email not sent", err: err });
      }
    });
    res
      .status(200)
      .send({ Status: "Success", message: "File sent successfully" });
  });
});

// sending email

app.post("/email", (req, res) => {
  var err = "";
  if (req.body.from == undefined || req.body.from == "")
    err = "Please enter from email address";
  if (req.body.to == undefined || req.body.to == "")
    err = "Please enter to email address";
  if (req.body.subject == undefined || req.body.subject == "")
    err = "Please enter subject";
  if (req.body.message == undefined || req.body.message == "")
    err = "Please enter message body";

  if (err != "")
    res.status(401).send({ Status: "Error", Message: err, err: undefined });

  if (err == "") {
    var transporter = nodemailer.createTransport({
      host: "smtp.office365.com",

      Port: "587",
      secure: false,

      //Encryption method: STARTTLS,
      auth: {
        user: "info@surefiresecurity.com",
        pass: "califorNia123$",
      },
    });

    // Define the email content
    const mailOptions = {
      from: "info@surefiresecurity.com",
      to: req.body.to,
      cc: req.body.cc,
      subject: req.body.subject,
      text: req.body.message,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(401).json({
          error: error,
          message: "email sending issues",
        });
      } else {
        console.log("Email sent: " + info);
        res.status(200).json({
          message: "Email sent Successful",
        });
      }
    });
  }
});
