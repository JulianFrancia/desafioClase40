import { daoSelected } from '../../app.js';

export class ProductosRepo {
    constructor() {}

    async getProductos(id=null) {
        return id ? await daoSelected.getProductos({"_id":id}) : await daoSelected.getProductos();
    }

    async saveProducto(producto) {
        return await daoSelected.insertProductos(producto);
    }

    async deleteProducto(id) {
        return await daoSelected.deleteProducto({"_id":id});
    }
}