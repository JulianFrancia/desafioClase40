import mongoose  from "mongoose";

const productosCollection = 'productos';

const ProductosSchema = mongoose.Schema({
    thumbnail: {type: String, require: true},
    title: {type: String, require: true},
    price: {type: Number, require: true}
});

export const productosModel = mongoose.model(productosCollection, ProductosSchema)