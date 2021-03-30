import express from 'express';
import { usuario, usuarios, newUser } from '../controllers/usuarioController.js';
import { verifyJWT, isAuthenticate, getLogin, postLogin } from '../controllers/loginController.js'
const router = express.Router();

router.post('/newuser', newUser);
router.get('/usuario', usuario);
router.get('/usuarios', usuarios);
router.get('/isUserAuth', verifyJWT, isAuthenticate);
router.get("/login", getLogin);
router.post("/login", postLogin);



export default router;