const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Mascota = require('../models/mascota');

const MascotasGet = async (req, res = response ) => {
    const { limite, desde } = req.query;
    const query = { estado: true};

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascotas
    });
} 

const getMascotaById = async (req, res) => {
    const { id } = req.params;
    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        mascota
    });
}

const MascotaPost = async (req, res) => {
    const { especie, raza, nombre, sexo, edad, condicionMedica, personalidad, precio, estado } = req.body;
    const mascota = new Mascota({ especie, raza, nombre, sexo, edad, condicionMedica, personalidad, precio, estado });
    const salt = bcryptjs.genSaltSync();
    await mascota.save();
    res.status(200).json({
        mascota
    });
}

const MascotasPut = async (req, res) => {
    const { id } = req.params;
    const { _id, especie, raza, sexo,edad,condicionMedicam,personalidad,precio, ...resto} = req.body;

    await Mascota.findByIdAndUpdate(id, resto);

    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        msg: 'Usuario Actualizado exitosamente',
        mascota
    })
}

const MascotasDelete = async (req, res) => {
    const {id} = req.params;
    await Mascota.findByIdAndUpdate(id,{estado: false});

    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        msg: 'Usuario eliminado exitosamente',
        mascota
    });
}

module.exports = {
    MascotaPost,
    MascotasGet,
    getMascotaById,
    MascotasPut,
    MascotasDelete
}
