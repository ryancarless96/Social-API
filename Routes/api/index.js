const router = require('express').Router();
const networkRoutes = require('./networkRoutes');
const userRoutes = require('./userRoutes');

router.use('/networks',networkRoutes);
router.use('/users',userRoutes);

module.exports = router;