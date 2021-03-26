require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const booksRouter = require('./routes/bookRoute')

app.use(express.json());
app.use(bodyParser.json())
app.use('/book', booksRouter)

mongoose.connect('mongodb://localhost:27017/books',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    (res) => {
        console.log("Connected to database");
    },
    (err) => {
        console.log("Unable to connect to database")
    }
)

app.listen(process.env.PORT, () => {
    console.log("Connected to server");
})

app.get("/test", (req, res) => {
    res.send("This is home")
})