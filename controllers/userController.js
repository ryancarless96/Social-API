const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {

    getUsers(req, res) {
        User.find()
            .then((users) => {
                 res.json(users);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-_v')
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({
                        user,
                        grade: await grade(req.params.userId),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No such user exitst' })
                    : Thought.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    )
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'User deleted, but no thoughts found'
                    })
                    : res.json({ message: 'User successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addNewFriend(req, res) {
        console.log('You are adding a thought');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoughts: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID:(' })
                    : res.json(user)
            ) 
            .catch((err)=> res.status(500).json(err));
    },

    removeFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {thought: {thoughtId: req.params.reactionId}}},
            {runValidators: true, new:true}
        )
        .then((user)=>
        !user
        ? res
        .status(404)
        .json({message: 'No user found with that ID:('})
        : res.json(user)
        )
        .catch((err)=> res.status(500).json(err));
    },
};