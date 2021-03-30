import jwt from 'jsonwebtoken';
import { User } from '../models/usuario.js';
import bcrypt from 'bcrypt'

const verifyJWT = async(req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send(":( se necesita token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Fallo la autentificacion" });
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

const isAuthenticate = async(req, res) => {
    res.send("Autenticado");
}

const getLogin = async(req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
}

const postLogin = async(req, res) => {
    const email = req.body.correo_electronico;
    const password = req.body.password;
    const usuarioLogin = await User.findOne({
        where: {
            correo_electronico: email
        }
    });
    if (usuarioLogin === null) {
        res.send({ message: "Verifique el email o la contraseña ingresada." });
    } else {
        bcrypt.compare(password, usuarioLogin.password, (error, response) => {
            if (response) {
                const id = usuarioLogin.id_usuario;
                const token = jwt.sign({ id }, "jwtSecret", {
                    expiresIn: 300,
                });
                req.session.user = usuarioLogin;
                console.log("entro");
                res.json({ auth: true, token: token, result: usuarioLogin })
            } else {
                res.json({
                    auth: false,
                    message: "Usuario o contraseña incorrecta.",
                });
            }
        });
    }
}
export {
    getLogin,
    isAuthenticate,
    postLogin,
    verifyJWT
}