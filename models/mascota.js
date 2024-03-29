const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({

    especie: {
        type: String,
        require: [true, 'La especie es obligatorioa']
    },

    raza: {
        type: String,
        require: [true, 'La raza es obligatoria']
    },

    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    
    sexo: {
        type: String,
        requiere: [true, 'El sexo es obligatorio']
    },

    edad: {
        type: String,
        requiere: [true, 'La edad es obligatorio']
    },

    condicionMedica: {
        type: String,
        requiere: [true, 'La condicion medica es obligatoria']
    },

    personalidad: {
        type: String,
        requiere: [true, 'La personalidad es obligatoria']
    },

    precio: {
        type: String,
        requiere: [true, 'El precio es obligatorio']
    },

    estado:{
        type:Boolean,
        default:true
    }
});

module.exports = model('Mascota',MascotaSchema);