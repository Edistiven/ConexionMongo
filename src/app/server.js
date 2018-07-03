// npm install --save express body-parser cors mongoose nodemon
// var express = require('express'),
   //   path = require('path'),
   //   bodyParser = require('body-parser'),
   //   cors = require('cors'),
   //   mongoose = require('mongoose');

  //    const app = express();
   //   var port = process.env.PORT || 4000;

   //   var server = app.listen(function(){
   //     console.log('Listening on port ' + port);
   //   });

   const express = require('express'), // vale
   path = require('path'),
   bodyParser = require('body-parser'),
   cors = require('cors'),
   mongoose = require('mongoose'),
   config = require('./config/DB'),
   coinRoutes = require('./expressRouter/coinRoutes');// aqui cambien con router express

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
 () => {console.log('Database is conectada') },
 err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(cors());
app.use('/coins', coinRoutes);

// variable morgan
const morgan = require ('morgan');



// settings
app.set('port', 4000); // trata de decir que se puede enviar al servidor de cualquier parte
// app.set('port', process.env.PORT || 4000); si existe un puerto se lo de automaticamente caso contarrio se levante en 4000
const port = process.env.PORT || 4000; // esto es lo mismo de arriba

// Starting the server esto es lo mismo que de abajo con el get obtenemos la comuncacion
/* app.listen(app.get('port'), () =>
{
    console.log('Servidor tambien 4000');
}); */

//Middlewares: Rutas en nuestro servidor conversion y hay modulos que se instalan solos
// 1er modulo npm install morgan ayuda por consola a ver que el usuario quiere
app.use(morgan('dev')); //npm run dev de aqui refrescamos la web y nos obtiene este resultado GET / 404 8.488 ms - 139
// app.use(express.json()); // metodo convierte el codigo que viene en formatto json todos los datos se leenque se envie del navegador
app.use(bodyParser.json()); // este metodo se usaba antes bodyparser en vez de express




const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
    });