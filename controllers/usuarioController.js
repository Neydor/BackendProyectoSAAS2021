import { User } from '../models/usuario.js';
import bcrypt from 'bcrypt';

const newUser = async(req, res, next) => {
    //crear datos del objeto usuario
    try {
        var password = req.body.password;
        console.log(password)
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.log(err);
            };
            console.log(password)
            req.body.password = hash;
            const usuarioNuevo = new User(req.body);
            usuarioNuevo.save();
            console.log("Exito: registro ciudadano")
            res.json({
                message: 'El usuario se registro correctamente'
            });

        });
    } catch (error) {
        console.log(error);
        next();
    }

}

const usuarios = async(req, res) => {
    const findUser = await User.findAll();
    console.log(findUser)
    res.json({
        message: 'Se ha buscado el usuario'
    });
}

const usuario = async(req, res) => {
    res.json({
        message: 'Se ha buscado a usuarios'
    });
}
export {
    newUser,
    usuario,
    usuarios
}