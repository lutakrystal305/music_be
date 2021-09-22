require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose= require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const getRouter = require('./route/get.route');
const adminRouter = require('./route/admin.route');

const password = process.env.PASSWORD;

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);

//Thay /test? -> /music?
mongoose.connect(`mongodb+srv://lutakrystal:${password}@cluster0.6gjgf.mongodb.net/music?authSource=admin&replicaSet=atlas-kz1osm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`)


const server = require('http').createServer(app);

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', getRouter);
app.use('/admin', adminRouter);

const port = process.env.PORT || 9999; 

server.listen(port, () => {
    console.log("listen on port ", port);
})
//npm run dev