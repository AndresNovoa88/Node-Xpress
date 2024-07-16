const { get } = require('express/lib/response');


module.exports = (app) => {
    var pedCtrl = require('../controlador/pedido');

    app.route('/api/pedidos')
    .get(pedCtrl.getAllPedidos)
    .post(pedCtrl.nPedido);

    app.route('/api/pedidos/:pedId') // :pedId asi se escribe un parametro
    .get(pedCtrl.rPedido)
    .put(pedCtrl.uPedido)
    .delete(pedCtrl.dPedido);

    app.route('/api/setLibro')
    .post(pedCtrl.nPedido);
}