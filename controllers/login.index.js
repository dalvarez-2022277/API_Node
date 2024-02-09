const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Mascota = require('../models/usuario');

const GetUsuarioId = async (req, res) => {
    const { id } = req.params;
    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        mascota
    });
}