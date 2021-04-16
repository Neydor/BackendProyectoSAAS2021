import { Sede } from '../models/sede.js';
import jwt from 'jsonwebtoken';

const sedeCreate = async(req, res, next) => {
    //crear datos del objeto usuario
    try {
            const sedeNueva = new User(req.body);
            sedeNueva.save();
            console.log("Exito: registro sede")
            res.json({
                message: 'Sede se registro correctamente'
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

const sedeSearchAll = async(req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        console.log(error)
        if (error) {
            res.sendStatus(403);
        } else {
            const getAll = Sede.findAll();
            console.log(getAll)
            res.json({
                message: 'Se ha buscado las sedes',
                users: getAll
            });
        }
    });
}

const sedeSearchId = async(req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        console.log(error)
        if (error) {
            res.sendStatus(403);
        } else {
            const getAll = Sede.findAll();
            console.log(getAll)
            res.json({
                message: 'Se ha buscado las sedes',
                users: getAll
            });
        }
    });
}

const usuario = async(req, res) => {
    res.json({
        message: 'Se ha buscado a usuario'
    });
}
export {
    sedeCreate,
    sedeDelete,
    sedeEdit,
    sedeSearchId,
    sedeSearchAll
}