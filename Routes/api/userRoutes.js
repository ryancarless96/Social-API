const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    // updateUser,
    deleteUser,
    addNewFriend,
    removeFriend,
}= require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser)
// put().delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeFriend);

// router.route('/:userId/networks/:networkId').delete(removeNetwork);

module.exports = router;