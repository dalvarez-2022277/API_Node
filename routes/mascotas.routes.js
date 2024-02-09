const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { MascotaPost, MascotasGet, getMascotaById } = require('../controllers/mascota.controller');
const { existeUsuarioById } = require('../helpers/db-validators');


const router = Router();
router.get("/",MascotasGet);

router.get(
    "/:id",
    [
        check("id","El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
    ],getMascotaById);

router.post(
    "/", 
    [
        check("especie","La especie es obligatoria").not().isEmpty(),
        check("raza","La raza es obligatoria").not().isEmpty(),
        check("nombre","El nombre es obligatorio").not().isEmpty(),
        check("sexo","El sexo es obligatorio").not().isEmpty(),
        check("edad","La edad es obligatoria").not().isEmpty(),
        check("condicionMedica","La condicion medica es obligatoria").not().isEmpty(),
        check("personalidad","La personalidad es obligatoria").not().isEmpty(),
        check("precio","El precio es obligatorio").not().isEmpty(),
        validarCampos,
    ], MascotaPost); 


module.exports = router;
