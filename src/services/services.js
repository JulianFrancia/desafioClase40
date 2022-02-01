import { ProductosRepo } from '../repository/productos.repository.js';

const prodRepo = new ProductosRepo(); 

export const obtenerProductos = async (id=null) => {
    return await prodRepo.getProductos(id)
}

export const guardarProducto = async (producto) => {
    return await prodRepo.saveProducto(producto);
}

export const borrarProducto = async (id)  => {
    return await prodRepo.deleteProducto(id);
}