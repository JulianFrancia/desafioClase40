import { Router } from "express";
import { getProductosController, guardarProductoController, borrarProductoController } from '../controllers/controllers.js';

const routerProductos = new Router();

routerProductos.post('/guardarProducto', guardarProductoController);
routerProductos.get('/listaProductos/:id?', getProductosController);
routerProductos.delete('/borrar/:id', borrarProductoController);

export default routerProductos;