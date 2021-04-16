import { Sequelize } from 'sequelize';
import db from '../config/db.js';

var nombreTabla = 't005_sedes';
export const User = db.define(nombreTabla, {
    id_sede: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    estado: {
        type: Sequelize.STRING
    },
    nombre_sede: {
        type: Sequelize.STRING
    },
    latitud: {
        type: Sequelize.STRING
    },
    longitud: {
        type: Sequelize.STRING
    },
    id_ciudad: {
        type: Sequelize.INTEGER
    },
    id_usuario: {
        type: Sequelize.INTEGER
    },
    t001_usuarios_id_usuario: {
        type: Sequelize.INTEGER
    }
})