import { Sequelize } from 'sequelize';
import db from '../config/db.js';

var nombreTabla = 't001_usuarios';
export const User = db.define(nombreTabla, {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    primer_nombre: {
        type: Sequelize.STRING
    },
    segundo_nombre: {
        type: Sequelize.STRING
    },
    primer_apellido: {
        type: Sequelize.STRING
    },
    segundo_apellido: {
        type: Sequelize.STRING
    },
    sexo: {
        type: Sequelize.INTEGER
    },
    tipo_documento: {
        type: Sequelize.INTEGER
    },
    numero_documento: {
        type: Sequelize.STRING
    },
    correo_electronico: {
        type: Sequelize.STRING
    },
    celuar: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    t003_roles_id_rol: {
        type: Sequelize.INTEGER
    }
})