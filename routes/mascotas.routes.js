const { Router } = require('express');
const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');
const { MascotaPost } = require('../controllers/mascota.controller');

const router = Router();

router.post(
    "/", 
    [
        check("especie","La especie es obligatoria").not().isEmpty(),
        check("raza","La raza es obligatoria").isEmpty(),
        check("nombre","El nombre es obligatorio").isEmpty(),
        check("sexo","El sexo es obligatorio").isEmpty(),
        check("condicionMedica","La condicion medica es obligatoria").isEmpty(),
        check("personalidad","La personalidad es obligatoria").isEmpty(),
        check("precio","El precio es obligatorio").isEmpty(),
        check("estado","El estado es obligatorio").isEmpty()
    ], MascotaPost); 


module.exports = router;
