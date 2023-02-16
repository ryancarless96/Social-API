const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addNetwork,
    removeNetwork,
}= require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/networks').post(addNetwork);

router.route('/:userId/networks/:networkId').delete(removeNetwork);

module.exports = router;