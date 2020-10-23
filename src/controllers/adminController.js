const mysql = require('../database');

exports.vistaAdmin = (req,res) => {
    res.render('admin/index');
}

exports.usuarios = async (req,res) => {

    let sql = "SELECT * FROM usuarios";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
            res.render('admin/usuarios', {
                usuarios: resultado
            });
        }
    });
}

exports.productos = (req,res) => {
    res.render('admin/productos');
}
