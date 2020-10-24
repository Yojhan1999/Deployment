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

exports.registrarAdmin = async (req,res) => {
    let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.email,
        password: req.body.password,
        id_rol: 1
    }
    let sql = "INSERT INTO usuarios SET ?";
    await mysql.query(sql, newUser, (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/usuarios');
        }
    });
}

exports.productos = async (req,res) => {
    let sql = "SELECT * FROM productos";
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
            res.render('admin/productos', {
                helados: resultado
            });
        }
    });
}

exports.eliminarProducto = async (req,res) => {
    let sql = "DELETE FROM productos WHERE id_producto = ?"
    await mysql.query(sql, [req.params.id], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/productos');
        }
    });
}

exports.actualizarProducto = async (req,res) => {
    const { descripcion, precio, imagen } = req.body;
    let sql = "UPDATE productos SET descripcion = ?, precio = ?, imagen = ? WHERE id_producto = ?";
    await mysql.query(sql, [descripcion, precio, imagen, req.params.id], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/usuarios');
        }
    });
}

exports.registrarProducto = async (req,res) => {
    let newProduct = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen,
    }
    let sql = "INSERT INTO productos SET ?";
    await mysql.query(sql, newProduct, (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/productos');
        }
    });
}

exports.pedidoAdmin = async (req,res) => {
    let sql = `
    SELECT pe.id_pedido ,u.nombre, u.apellido, pe.fecha_pedido, p.imagen 
    FROM usuarios u, productos p, pedidos pe
    WHERE pe.id_usuario = u.id_usuario 
    AND pe.id_producto = p.id_producto; 
    `;
    await mysql.query(sql, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
            res.render('admin/pedido', {
                pedidos: resultado
            });
        }
    });
}

exports.eliminarPedido = async (req,res) => {
    let sql = "DELETE FROM pedidos WHERE id_pedido = ?"
    await mysql.query(sql, [req.params.id], (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/pedido');
        }
    });
}