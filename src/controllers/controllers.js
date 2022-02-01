import { obtenerProductos, guardarProducto, borrarProducto } from '../services/services.js';

export const getProductosController = async (req, res) => {
    const { id } = req.query;
    const productos = id ? await obtenerProductos(id) : await obtenerProductos();
    res.json(productos);
}

export const guardarProductoController = async (req, res) => {
    await guardarProducto(req.body);
    res.status(201).json(req.body)
}

export const borrarProductoController = async (req, res) => {
    const { id } = req.params;
    await borrarProducto(id)
    res.status(201).send('borrar exitoso')
}