const mysql = require('../database');
const moment = require('moment');

exports.vistaUsuario = async (req,res) => {
    console.log(req.params.id);
    let sql = "SELECT * FROM productos";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
            res.render('usuario/index', {
                helados: resultado,
                id_usuario: req.params.id
            });
        }
    });
}

exports.realizarPedido = async (req,res) => {
    let newPedido = {
        id_usuario: req.params.usuario,
        id_producto: req.params.producto,
        fecha_pedido: moment(Date.now()).format("YYYY-MM-DD")
    }
    let sql = "INSERT INTO pedidos SET ?";
    await mysql.query(sql, newPedido, (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect(`/user/${req.params.usuario}`);
        }
    });
}