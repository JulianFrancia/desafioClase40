import mongoose from "mongoose";
import * as productosModel from './models/productos.model.js'

export class MongoDAO {

    constructor() {
        this.connectDB()
        .then(response => {
            console.log('base de datos conectada!')
        })
        .catch(error => console.log(error))
    }

    async connectDB() {
        const URL = 'mongodb://localhost:27017/productos';
        await mongoose.connect(URL, {
            useNewUrlParser: true
        })
    }

    getProductos(query=null) {
        return query ? productosModel.productosModel.findOne(query) : productosModel.productosModel.find();
    }

    insertProductos(producto) {
        const model = new productosModel.productosModel(producto);
        model.save();
    }

    deleteProducto(query) {
        return productosModel.productosModel.deleteOne(query);
    }
}