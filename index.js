const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key')
const { User } = require('./model/Users');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require("mongoose");
mongoose
  .connect(
    config.mongoURI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDb connecting"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world112"));

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`${port} is running`));