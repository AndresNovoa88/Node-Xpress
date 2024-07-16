

exports.getAllPedidos = (req,res)=>{
    res.send('<lista de pedidos> pedId' + req.query.pedId + " --- nombre: " + req.query.pedNom);
};

exports.nPedido = (req,res) => {
    res.send('Pedido creado: ' + req.body.pedId + "---" + req.body.pedNom);
};

exports.rPedido = (req,res) => {
    res.send('Pedido =' + req.params.pedId + ":)" );
};

exports.uPedido = (req,res) => {
    res.send('Pedido actualizado = ' + req.params.pedId + "---nombre:" + req.params.nomPed + ":)");
};

exports.dPedido = (req,res) => {
    res.send('Pedido eliminado' + req.params.pedId + ":)");
};

exports.setLibro = (req,res) =>{
    res.send('Libro: ' + req.body.isbn + 'Registrar titulo libro' + req.body.titulo + 'Registrar libro autor ' + req.body.autor + ":)" );
}