

exports.getAllPedidos = (req,res)=>{
    res.send('<lista de pedidos>');
};

exports.nPedido = (req,res) => {
    res.send('<Pedido creado>');
};

exports.rPedido = (req,res) => {
    res.send('<Pedido>');
};

exports.uPedido = (req,res) => {
    res.send('<Pedido actualizado>');
};

exports.dPedido = (req,res) => {
    res.send('<Pedido eliminado>');
};