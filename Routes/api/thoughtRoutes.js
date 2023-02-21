const router = require('express').Router();

const {
    getNetworks,
    getSingleNetwork,
    createNetwork,
    updateNetwork,
    deleteNetwork,
} = require('../../controllers/thoughtsController');


router.route('/').get(getNetworks).post(createNetwork);

router
    .route('/:networkId')
    .get(getSingleNetwork)
    .put(updateNetwork)
    .delete(deleteNetwork);

module.exports = router;