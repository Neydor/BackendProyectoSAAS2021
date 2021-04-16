import express from 'express';
import { usuario, usuarios, newUser } from '../controllers/usuarioController.js';
import { verifyJWT, isAuthenticate, getLogin, postLogin } from '../controllers/loginController.js'
import {
    sedesAll,sedesId,sedeEdit,sedeDelete,sedeCreate,
    cursosAll,cursosId,cursosEdit,cursosDelete,cursosCreate
}  from '../controllers/todo.js'
const router = express.Router();

router.post('/newuser', newUser);
router.get('/usuario', usuario);
router.get('/usuarios', usuarios);
router.get('/isUserAuth', verifyJWT, isAuthenticate);
router.get("/login", getLogin);
router.post("/login", postLogin);

//Sedes
router.get('/sedes', sedesAll);//app.get('/sedes'
router.get('/sedes/:id_sede', sedesId);//app.get('/sedes/:id_sede',
router.post('/sedes',sedeCreate);//app.post('/sedes',
router.put("/sedes/:id_sede", sedeEdit);//app.put('/sedes/:id_sede'
router.delete('/sedes/:id_sede', sedeDelete);//app.delete('/sedes/:id_sedes',
//Cursos
router.get('/cursos', cursosAll);
router.get('/cursos/:id_curso', cursosId);
router.post('/cursos',cursosCreate);
router.put('/cursos/:id_curso', cursosEdit);
router.delete('/cursos/:id_curso', cursosDelete);


export default router;