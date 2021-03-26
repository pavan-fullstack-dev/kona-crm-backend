require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const usersRouter = require('./routers/userRouter')

app.use(express.json());
app.use(bodyParser.json())
app.use('/user', usersRouter)

mongoose.connect('mongodb+srv://pavan:Pavan5678@cluster0.rhmr5.mongodb.net/registeredusers?retryWrites=true&w=majority',{
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