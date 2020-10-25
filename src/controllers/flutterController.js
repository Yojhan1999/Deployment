const mysql = require('../database');

exports.login = async (req,res) => {
    const { email, password } = req.body;
    let sql = "SELECT * FROM usuarios WHERE correo = ? AND password = ?";
    await mysql.query(sql, [email, password], (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ data: resultado[0].id_rol });
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