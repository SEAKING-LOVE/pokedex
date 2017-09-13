const router = require('express').Router();
const Gifs = require('../controllers/gifs.controller.js');

// Examples
// http://localhost:3001/assets/sprites/pid/n1

router.get('/pid/:pid', Gifs.pid);

module.exports = router;