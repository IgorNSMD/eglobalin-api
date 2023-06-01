var express = require('express')
var routes = require('./routes')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

//conectar mongo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongodb-ism-server:J6iynSCWTiBXxAzVDVfwb3yov4AC1yzhp6KoZH5SWYX6Jdi8NPGAdwYwM5Ct1aFr9ZboA0vutEPSACDbUvtHHA%3D%3D@mongodb-ism-server.mongo.cosmos.azure.com:10255/eglobalin?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodb-ism-server@',{
    useNewUrlParser: true
});

// crear el servidor
var app = express()

// habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// rutas de la app
app.use('/', routes())

// pruerto
app.listen(5000)
