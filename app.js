import express from "express";
import { argv } from 'process';
import { adminDAOs } from './src/DAO/adminDAO.js';
import { MongoDAO } from './src/DAO/mongodb.js';
import routerProductos from './src/routes/routes.js'

const app = express();
const PORT = 8080;
app.use(express.json());
app.use('/productos', routerProductos);

const daoObject = {
    mongo: MongoDAO
}

const adminDao = new adminDAOs();
export const daoSelected = adminDao.getInstance(daoObject[argv[2]]);

app.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`)
});