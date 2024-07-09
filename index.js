

const http = require('http');
const fs   = require('fs'); //maneja todos los archivos dentro del servidor
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("url: " + req.url + "---metodo: " + req.method );

    if(req.method == 'GET'){
        var arch;
        if(req.url == '/'){
            arch = 'index.html';
        }else{
            arch = req.url;
        }

        var pathArch = path.resolve('./public' + arch);
        console.log("Path absoluto" + pathArch);
        const extArch = path.extname(pathArch);
        if(extArch == '.html'){
            fs.exists(pathArch, (e) => {
                res.setHeader('Content-type', 'text/html');
                if(!e){
                    res.statusCode = 404;
                    res.end('<html><body><h1>Error 404: ' + arch + ' no encontrado </h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                fs.createReadStream(pathArch).pipe(res);

            });
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + arch + 'no es html </h1></body></html>');
        }
    }else{
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 405: ' + req.method + 'no soportado </h1></body></html>');
        
    }

    
});

server.listen(port, hostname, () => {
    console.log(`Server en ejecucion en http://${hostname}:${port}/`);
});