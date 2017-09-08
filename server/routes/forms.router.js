const router = require('express').Router();
const Forms = require('../controllers/forms.controller.js');

// Examples
// http://localhost:3001/api/v1/forms/all
// http://localhost:3001/api/v1/forms/pid/n1

router.get('/all', Forms.all);
router.get('/pid/:pid', Forms.pid);

module.exports = router;