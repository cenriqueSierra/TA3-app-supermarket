const { Router } = require('express');
const router = Router();
const {presentarQuery, mayorNumeroClientes, mayorCantidadVentas, mayorAreaFisica}= require('../controller/queries.controller');

router.get('/',presentarQuery);
router.get('/mnclientes', mayorNumeroClientes);
router.get('/mcventas', mayorCantidadVentas);
router.get('/mafisica', mayorAreaFisica);

module.exports = router;