require('dotenv').config()
var express = require('express')
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser')
var DB = require("./config/db.config")
var Config=require("./config/app.config")
var usersRouter = require('./routers/userRouter')
var leadRouter = require('./routers/leadRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}))


DB.connect()
app.use(cors());
app.use('/user',usersRouter)
app.use('/lead',leadRouter)
// app.use(bodyParser.urlencoded({extended:false}))

// app.use(bodyParser.json())
// app.use(route)
// app.use('/user', usersRouter)


app.listen(Config.config.PORT, () => {
    console.log("Connected to server at port "+(Config.config.PORT) );
})

app.get("/test", (req, res) => {
    res.send("This is home")
})