const mysql = require('../database');

exports.vistaUsuario = (req,res) => {
    let sql = "SELECT * FROM productos";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.render('usuario/index', {
                helados: resultado
            });
        }
    });
}