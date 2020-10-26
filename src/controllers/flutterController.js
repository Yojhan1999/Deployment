const mysql = require('../database');

exports.login = async (req,res) => {
    const { email, password } = req.body;
    let sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?";
    await mysql.query(sql, [email, password], (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ data: resultado[0] });
        }
    });
}

exports.listarProductos = async (req,res) => {
    let sql = "SELECT * FROM productos";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ data: resultado[0] });
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
            res.status(200).json({ msg: "Se ha realizado el pedido" });
        }
    });
}