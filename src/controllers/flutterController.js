const mysql = require('../database');

exports.login = async (req,res) => {
    const { email, password } = req.body;
    let sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?";
    await mysql.query(sql, [email, password], (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ resultado });
        }
    });
}

exports.listarProductos = async (req,res) => {
    let sql = "SELECT * FROM productos";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ resultado });
        }
    });
}

exports.realizarPedido = async (req,res) => {
    let sql = "INSERT INTO pedidos(id_usuario, id_producto, fecha_pedido) VALUES ('?','?',NOW())";
    await mysql.query(sql, [req.params.usuario, req.params.producto], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ msg: "Se ha realizado el pedido" });
        }
    });
}