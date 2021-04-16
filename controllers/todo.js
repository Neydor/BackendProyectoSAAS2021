//ejecutar con nodemon de ser posible

import mysql from 'mysql';
//const express = require('express');
//const bodyParser = require('body-parser');
//en caso de desplegarlo
//const PORT = process.env.PORT || 3128;
//const app = express();
//app.use(bodyParser.json());


//--------------- Conexion con la BD -----------------------------------------
const conexion = mysql.createConnection({
    host: 'be3bym6qdtkisnd7hdbh-mysql.services.clever-cloud.com',
    user: 'uheste5enabgqrwz',
    password: 'XpTwwAe4TD2KmJpAwhXA',
    database: 'be3bym6qdtkisnd7hdbh'
});

conexion.connect(function (error) {

    if (error) { throw error; }
    else { console.log('Conexion establecida'); }

});




//---------------------------------------------------------   crud USUARIOS  ___________________________________________________________________________



// app.get('/usuarios',(req,res)=> {
//     conexion.query('SELECT * FROM t001_usuarios',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD de usuario');
//         }

//     });

// });
// app.get('/usuarios/:id_usuario',(req,res)=> {

//     const {id_usuario} = req.params
//     const sql = `SELECT * FROM t001_usuarios WHERE id_usuario = ${id_usuario}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay coincidencias');
//         }

//     });

// });
// app.post('/usuarios',(req,res,netx)=> {

//     const sql = 'INSERT INTO t001_usuarios SET ?';

//     const estacion_obj = {
//         "primer_nombre": req.body.primer_nombre,
//         "segundo_nombre": req.body.segundo_nombre,
//         "primer_apellido": req.body.primer_apellido,
//         "segundo_apellido": req.body.segundo_apellido,
//         "sexo": req.body.sexo,
//         "tipo_documento": req.body.tipo_documento,
//         "numero_documento": req.body.numero_documento,
//         "correo_electronico": req.body.correo_electronico,
//         "celuar": req.body.celuar,
//         "password": req.body.password,
//         "t003_roles_id_rol": req.body.t003_roles_id_rol
//     };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('Usuario Creado');
//     });

// });
// app.put('/usuarios/:id_usuario',(req,res)=> {

//         const{id_usuario} = req.params;
//         const{
//             primer_nombre,
//             segundo_nombre,
//             primer_apellido,
//             segundo_apellido,
//             sexo,
//             tipo_documento,
//             numero_documento,
//             correo_electronico,
//             celuar,
//             password,
//             t003_roles_id_rol
//         } = req.body;

//         const sql = `UPDATE t001_usuarios SET 
//                             primer_nombre =  '${primer_nombre}',
//                             segundo_nombre =  '${segundo_nombre}',
//                             primer_apellido =  '${primer_apellido}',
//                             segundo_apellido =  '${segundo_apellido}',
//                             sexo = ${sexo},
//                             tipo_documento =  ${tipo_documento},
//                             numero_documento =  '${numero_documento}',
//                             correo_electronico =  '${correo_electronico}',
//                             celuar =  '${celuar}',
//                             password =  '${password}',
//                             t003_roles_id_rol =  ${t003_roles_id_rol}          
//                      WHERE id_usuario = '${id_usuario}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('Usuario Actualizado!');
//     });


// });

// app.delete('/usuarios/:id_usuario',(req,res)=> {

//     const {id_usuario} = req.params
//     const sql = `DELETE FROM t001_usuario WHERE id_usuario = ${id_usuario}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('Usuario Eliminado!');
//         });

// });







// //---------------------------------------------------------   FIN Usuarios  ___________________________________________________________________________







// //---------------------------------------------------------   crud referencias  ___________________________________________________________________________


// app.get('/referencias',(req,res)=> {
//     conexion.query('SELECT * FROM t002_referencias',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD');
//         }

//     });

// });
// app.get('/referencias/:id_referencia',(req,res)=> {

//     const {id_referencia} = req.params
//     const sql = `SELECT * FROM t002_referencias WHERE id_referencia = ${id_referencia}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay conincidencias');
//         }

//     });

// });

// app.post('/referencias',(req,res)=> {

//     const sql = 'INSERT INTO t002_referencias SET ?';
//     const estacion_obj = {
//         "estado": req.body.estado,
//         "dominio": req.body.dominio,
//         "rango_valor": req.body.rango_valor,
//         "descripcion": req.body.descripcion
//         };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('Referencia Creada');
//     });

// });
// app.put('/referencias/:id_referencia',(req,res)=> {

//         const{id_referencia} = req.params;
//         const{estado,dominio,rango_valor,descripcion} = req.body;

//         const sql = `UPDATE t002_referencias SET 
//                             estado =   '${estado}'
//                             dominio =   '${dominio}'
//                             rango_valor =   '${rango_valor}'
//                             descripcion =   '${descripcion}'       
//                      WHERE id_referencia = '${id_referencia}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('Referencia Actualizada!');
//     });


// });

// app.delete('/referencias/:id_referecia',(req,res)=> {

//     const {id_referecia} = req.params
//     const sql = `DELETE FROM t002_referencias WHERE id_referecia = ${id_referecia}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('Referencia Eliminada!');
//         });

// });







// //---------------------------------------------------------   FIN Referencias  ___________________________________________________________________________







// //---------------------------------------------------------   crud Roles  ___________________________________________________________________________



// app.get('/roles',(req,res)=> {
//     conexion.query('SELECT * FROM t003_roles',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD de roles');
//         }

//     });

// });
// app.get('/roles/:id_rol',(req,res)=> {

//     const {id_rol} = req.params
//     const sql = `SELECT * FROM t003_roles WHERE id_rol = ${id_rol}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay coincidencias');
//         }

//     });

// });
// app.post('/roles',(req,res,netx)=> {

//     const sql = 'INSERT INTO t003_roles SET ?';

//     const estacion_obj = {
//         "nombre_rol": req.body.nombre_rol,
//         "tipo_rol": req.body.tipo_rol       
//     };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('rol Creado');
//     });

// });
// app.put('/roles/:id_rol',(req,res)=> {

//         const{id_rol} = req.params;
//         const{
//             nombre_rol,
//             tipo_rol
//         } = req.body;

//         const sql = `UPDATE t003_roles SET 
//                         nombre_rol =  '${nombre_rol}',
//                         tipo_rol =  '${tipo_rol}'         
//                      WHERE id_rol = '${id_rol}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('Rol Actualizado!');
//     });


// });

// app.delete('/roles/:id_rol',(req,res)=> {

//     const {id_rol} = req.params
//     const sql = `DELETE FROM t003_roles WHERE id_rol = ${id_rol}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('Rol Eliminado!');
//         });

// });







// //---------------------------------------------------------   FIN rol  ___________________________________________________________________________







// //---------------------------------------------------------   crud Membresias  ___________________________________________________________________________



// app.get('/membresias',(req,res)=> {
//     conexion.query('SELECT * FROM t004_membresias ',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD de membresias');
//         }

//     });

// });
// app.get('/membresias/:id_membresia',(req,res)=> {

//     const {id_membresia} = req.params
//     const sql = `SELECT * FROM t004_membresias WHERE id_membresia = ${id_membresia}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay coincidencias');
//         }

//     });

// });
// app.post('/membresias',(req,res,netx)=> {

//     const sql = 'INSERT INTO t004_membresias SET ?';

//     const estacion_obj = {
//         "estado": req.body.estado,
//         "nombre_membresia": req.body.nombre_membresia,
//         "duracion": req.body.duracion,
//         "precio": req.body.precio
//     };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('membresia Creado');
//     });

// });
// app.put('/membresias/:id_membresia',(req,res)=> {

//         const{id_membresia} = req.params;
//         const{
//             estado,
//             nombre_membresia,
//             duracion,
//             precio

//         } = req.body;

//         const sql = `UPDATE t004_membresias SET 
//                             estado =  ${estado},
//                             nombre_membresia =  '${nombre_membresia}',
//                             duracion =  ${duracion},
//                             precio =  ${precio}        
//                      WHERE id_membresia = '${id_membresia}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('Membresia Actualizado!');
//     });


// });

// app.delete('/membresias/:id_membresia',(req,res)=> {

//     const {id_membresia} = req.params
//     const sql = `DELETE FROM t004_membresia WHERE id_membresia = ${id_membresia}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('membresia  Eliminado!');
//         });

// });







// //---------------------------------------------------------   FIN Membresia  ___________________________________________________________________________







// //---------------------------------------------------------   crud membresias_usuarios  ___________________________________________________________________________



// app.get('/membresias_usuarios',(req,res)=> {
//     conexion.query('SELECT * FROM t004_memxt005_usr ',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD de membresias_usuarios');
//         }

//     });

// });
// app.get('/membresias_usuarios/:id_relacion',(req,res)=> {

//     const {id_relacion} = req.params
//     const sql = `SELECT * FROM t004_memxt005_usr WHERE id_relacion = ${id_relacion}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay coincidencias');
//         }

//     });

// });
// app.post('/membresias_usuarios',(req,res,netx)=> {

//     const sql = 'INSERT INTO t004_memxt005_usr SET ?';

//     const estacion_obj = {
//         "estado": req.body.estado,
//         "id_membresia": req.body.id_membresia,
//         "id_usuario": req.body.id_usuario,
//         "fecha_completa": req.body.fecha_completa,
//         "fecha_activacion": req.body.fecha_activacion,
//         "t001_usuarios_id_usuarios": req.body.t001_usuarios_id_usuarios,
//         "t004_membresias_id_membresia": req.body.t004_membresias_id_membresia

//     };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('membresias_usuarios Creado');
//     });

// });
// app.put('/membresias_usuarios/:id_relacion',(req,res)=> {

//         const{id_relacion} = req.params;
//         const{
//             estado ,
//             id_membresia ,
//             id_usuario ,
//             fecha_completa ,
//             fecha_activacion ,
//             t001_usuarios_id_usuarios ,
//             t004_membresias_id_membresia


//         } = req.body;

//         const sql = `UPDATE t004_memxt005_usr SET 
//                             estado =  ${estado},
//                             id_membresia =  ${id_membresia},
//                             id_usuario =  ${id_usuario},
//                             fecha_completa =  '${fecha_completa}',
//                             fecha_activacion =  '${fecha_activacion}',
//                             t001_usuarios_id_usuarios =  ${t001_usuarios_id_usuarios},
//                             t004_membresias_id_membresia =  ${t004_membresias_id_membresia}                   
//                      WHERE id_relacion = '${id_relacion}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('membresias_usuarios Actualizado!');
//     });


// });

// app.delete('/membresias_usuarios/:id_relacion',(req,res)=> {

//     const {id_relacion} = req.params
//     const sql = `DELETE FROM t004_memxt005_usr WHERE id_relacion = ${id_relacion}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('membresias_usuarios  Eliminado!');
//         });

// });







// //---------------------------------------------------------   FIN membresias_usuarios  ___________________________________________________________________________








// //---------------------------------------------------------   crud sedes  ___________________________________________________________________________



const sedesAll = async (req, res) => {
    console.log("entro en sedesAll")
    try {
        conexion.query('SELECT * FROM t005_sedes ', function (error, results, fields) {

            if (error)
                throw error;
            if (results.length > 0) {
                res.json(results);
            }
            else {
                res.send('No hay registros en la BD de Sedes');
            }

        });

    } catch (error) {
        console.log(error)
    }



};
const sedesId = async (req, res) => {
    try {
        const { id_sede } = req.params
        const sql = `SELECT * FROM t005_sedes WHERE id_sede = ${id_sede}`;

        conexion.query(sql, function (error, results, fields) {

            if (error)
                throw error;
            if (results.length > 0) {
                res.json(results);
            }
            else {
                res.send('no hay coincidencias');
            }

        });
    } catch (error) {
        console.log(error)
    }


};
const sedeCreate = async (req, res, next) => {

    const sql = 'INSERT INTO t005_sedes SET ?';

    const estacion_obj = {
        "estado": req.body.estado,
        "nombre_sede": req.body.nombre_sede,
        "latitud": req.body.latitud,
        "longitud": req.body.longitud,
        "id_ciudad": req.body.ciudad,
        "id_usuario": req.body.id_usuario,
        "t001_usuarios_id_usuario": req.body.usuario

    };

    conexion.query(sql, estacion_obj, function (error) {

        if (error) throw error;
        res.send('Sede Creado');
    });

};
const sedeEdit = async (req, res) => {
    console.log("entro a sedeEdit",req.params,req.body)
    const { id_sede } = req.params;
    const {
        estado,
        nombre_sede,
        latitud,
        longitud,
        id_ciudad,
        id_usuario,
        t001_usuarios_id_usuario
    } = req.body;

    const sql = `UPDATE t005_sedes SET 
                            estado =  ${estado},
                            nombre_sede =  '${nombre_sede}',
                            latitud =  ${latitud},
                            longitud =  ${longitud},
                            id_ciudad =  ${id_ciudad},
                            id_usuario = ${id_usuario},
                            t001_usuarios_id_usuario = ${t001_usuarios_id_usuario}              
                     WHERE id_sede = '${id_sede}' `;

    conexion.query(sql, function (error) {

        if (error) throw error;
        res.send('Sede Actualizado!');
    });


};

const sedeDelete = async (req, res) => {

    const { id_sedes } = req.params
    const sql = `DELETE FROM t005_sedes WHERE id_sedes = ${id_sedes}`;

    conexion.query(sql, function (error, results, fields) {

        if (error) throw error;
        res.send('Sedes  Eliminado!');
    });

};







// //---------------------------------------------------------   FIN Sedes  ___________________________________________________________________________





// //---------------------------------------------------------   crud Cursos  ___________________________________________________________________________



const cursosAll = async (req, res) => {
    console.log("entro en cursosAll")
    try {

        conexion.query('SELECT * FROM t006_cursos ', function (error, results, fields) {

            if (error)
                throw error;
            if (results.length > 0) {
                res.json(results);
                console.log("CURSOSALL SI")
            }
            else {
                res.send('No hay registros en la BD de Cursos');
                console.log("CURSOSALL NO")
            }
        });
    } catch (error) {
        console.log("error de busqueda de todas las sedes")
    }


};
const cursosId = async (req, res) => {

    const { id_curso } = req.params
    const sql = `SELECT * FROM t006_cursos WHERE id_curso = ${id_curso}`;

    conexion.query(sql, function (error, results, fields) {

        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('no hay coincidencias');
        }

    });

};
const cursosCreate = async (req, res, netx) => {

    const sql = 'INSERT INTO t006_cursos SET ?';

    const estacion_obj = {
        "estado": req.body.estado,
        "codigo_curso": req.body.codigo_curso,
        "nombre_curso": req.body.nombre_curso,
        "descripcion_curso": req.body.descripcion_curso,
        "creditos_curso": req.body.creditos_cursos,
        "categoria_curso": req.body.categoria_cursos
    };
    console.log(req.body)
    conexion.query(sql, estacion_obj, function (error) {

        if (error) throw error;
        res.send('Curso Creado');
    });

};
const cursosEdit = async (req, res) => {

    const { id_curso } = req.params;
    const {
        estado,
        codigo_curso,
        nombre_curso,
        descripcion_curso,
        creditos_curso,
        categoria_curso

    } = req.body;

    const sql = `UPDATE t006_cursos SET 
                            estado =  ${estado},
                            codigo_curso =  '${codigo_curso}',
                            nombre_curso =  '${nombre_curso}',
                            descripcion_curso =  '${descripcion_curso}',
                            creditos_curso =  ${creditos_curso},
                            categoria_curso = ${categoria_curso}
                             WHERE id_curso = '${id_curso}' `;

    conexion.query(sql, function (error) {

        if (error) throw error;
        res.send('Curso Actualizado!');
    });


};

const cursosDelete = async (req, res) => {

    const { id_curso } = req.params
    const sql = `DELETE FROM t006_curso WHERE id_curso = ${id_curso}`;

    conexion.query(sql, function (error, results, fields) {

        if (error) throw error;
        res.send('Curso  Eliminado!');
    });

};







// //---------------------------------------------------------   FIN Curso  ___________________________________________________________________________







// //---------------------------------------------------------   crud Grupos  ___________________________________________________________________________



// app.get('/grupos',(req,res)=> {
//     conexion.query('SELECT * FROM t007_cursos ',function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('No hay registros en la BD de Grupos');
//         }

//     });

// });
// app.get('/grupos/:id_grupo',(req,res)=> {

//     const {id_grupo} = req.params
//     const sql = `SELECT * FROM t007_grupos WHERE id_grupo = ${id_grupo}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) 
//         throw error;
//         if (results.length > 0){
//             res.json(results);
//         }
//         else {
//             res.send('no hay coincidencias');
//         }

//     });

// });
// app.post('/grupos',(req,res,netx)=> {

//     const sql = 'INSERT INTO t007_grupos SET ?';

//     const estacion_obj = {
//         "estado": req.body.estado,
//         "cupo_estudiantes": req.body.codigo_curso,
//         "semestre": req.body.nombre_curso,
//         "total_estudiantes": req.body.descripcion_curso
//     };

//     conexion.query(sql,estacion_obj,function(error){

//     if (error) throw error;
//         res.send('Grupos Creado');
//     });

// });
// app.put('/grupos/:id_grupo',(req,res)=> {

//         const{id_grupo} = req.params;
//         const{
//             estado ,
//             cupo_estudiantes ,
//             semestre ,
//             total_estudiantes            
//         } = req.body;

//         const sql = `UPDATE t007_grupos SET 
//                             estado =  ${estado},
//                             cupo_estudiantes =  ${cupo_estudiantes},
//                             semestre =  ${semestre},
//                             total_estudiantes =  ${total_estudiantes}
//                              WHERE id_grupo = '${id_grupo}' `;

//     conexion.query(sql,function(error){

//     if (error) throw error;
//         res.send('Grupo Actualizado!');
//     });
// });

// app.delete('/grupos/:id_grupo',(req,res)=> {

//     const {id_grupo} = req.params
//     const sql = `DELETE FROM t007_grupos WHERE id_grupo = ${id_grupo}`;

//     conexion.query(sql,function(error,results,fields){

//         if (error) throw error;
//             res.send('Grupo  Eliminado!');
//         });

// });



export {
    //sedes
    sedesAll,
    sedesId,
    sedeEdit,
    sedeCreate,
    sedeDelete,
    //cursos
    cursosAll, cursosId, cursosEdit, cursosDelete, cursosCreate

}



//---------------------------------------------------------   FIN Curso  ___________________________________________________________________________


