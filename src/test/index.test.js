import assert from 'assert';
import { obtenerProductos, guardarProducto } from '../services/services.js';

describe('integracion de tareas', function() {
    it('insertTestDB', function() {
        guardarProducto({
            thumbnail:'prueba',
            title: 'prueba title',
            price: 123
        });
        assert.strictEqual(obtenerProductos().length,1);
    })
});