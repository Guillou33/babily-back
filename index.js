require('dotenv').config();
const path = require('path');
const cors = require('cors');
const uniqid = require('uniqid');
const express = require('express');
const PORT = process.env.PORT || 4000;
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log('Welcome to the server buddies, port : ' + PORT);
});

contacts = [{
    id: 1,
    lastname: "Lorut",
    firstname: "Nicolas"
}];



app.get('/contact', (req, res) => {
  res.status(200).json(contacts);
});

app.post('/contact', (req, res) => {
  const {name, email, subject, message} = req.body;
  contacts.push({
    name, 
    email, 
    subject, 
    message
  });
  res.json(contacts);

});