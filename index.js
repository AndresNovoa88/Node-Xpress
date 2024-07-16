

const express = require("express");
const http = require("http");
const morgan = require("morgan");
const path = require("path");


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

//configuramos el directorio donde express debe tomar los archivos
app.use(express.static(path.join(__dirname, 'public')));

require('./server/rutas/pedido')(app);

app.use((req, res, next)=>{
    console.log("Cabecera:" + req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Respuesta del servidor express</h1></body></html>');

});
//iniciar el servidor
//const server = http.createServer(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });