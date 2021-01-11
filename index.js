const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dbseorms16:1234@cluster0.nciqm.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDb connecting"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`${port} is running`));
