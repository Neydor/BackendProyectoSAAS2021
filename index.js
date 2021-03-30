import express from 'express';
import db from './config/db.js';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';


const app = express();
app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 6 * 24,
        },
    })
);
db.authenticate()
    .then(() => console.log('Base de datos conectada')).catch(error => console.log(error));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());



app.use('/', router)
const port = process.env.PORT || 6969;


const verifyJWT = (req, res, next) => {
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

app.listen(port, () => {
    console.log('El servidor esta en el puerto ${port}')
})