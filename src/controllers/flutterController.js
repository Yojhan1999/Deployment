const mysql = require('../database');

exports.login = async (req,res) => {
    const { email, password } = req.body;
    let sql = "SELECT id_rol FROM usuarios WHERE correo = ? AND password = ?";
    await mysql.query(sql, [email, password], (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.status(200).json({ rol: resultado[0].id_rol });
        }
    });
}