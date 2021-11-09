const express = require('express'),
    router = express.Router(),
    citasCtrl = require('../controllers/cita.controller')

router.post('/', citasCtrl.create)
router.get("/", citasCtrl.list);
//router.put('/', citasCtrl.update)
/*
router.post('/status', citasCtrl.enable)
router.delete('/:_id', citasCtrl.delete)
*/

module.exports = router