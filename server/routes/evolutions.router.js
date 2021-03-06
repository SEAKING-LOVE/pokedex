const router = require('express').Router();
const Evolutions = require('../controllers/evolutions.controller.js');

// Examples
// http://localhost:3001/api/v1/evolutions/all
// http://localhost:3001/api/v1/evolutions/pid/n1

router.get('/all', Evolutions.all); 
router.get('/pid/:pid', Evolutions.pid);

module.exports = router;