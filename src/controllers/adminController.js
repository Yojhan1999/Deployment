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

exports.eliminarUsuario = async (req,res) => {
    let sql = "DELETE FROM usuarios WHERE id_usuario = ?"
    await mysql.query(sql, [req.params.id], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/usuarios');
        }
    });
}

exports.actualizarUsuario = async (req,res) => {
    const { nombre, apellido, correo } = req.body;
    let sql = "UPDATE usuarios SET nombre = ?, apellido = ?, correo = ? WHERE id_usuario = ?";
    await mysql.query(sql, [nombre, apellido, correo, req.params.id], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/usuarios');
        }
    });
}

exports.productos = (req,res) => {
    res.render('admin/productos');
}
