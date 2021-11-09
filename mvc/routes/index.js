const { Router } = require('express'),
    router = Router()

router.use('/cita', require('../routes/citas.routes'))

module.exports = router