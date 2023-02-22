const { Reaction, User, Thought } = require('../models');

module.exports = {
    getNetworks(req, res) {
        Reaction.find()
            .then((reactions) => res.json(reactions))
            .catch((err) => res.status(500).json(err));
    },
    getSingleNetwork(req, res) {
        Reaction.findOne({ _id: req.params.networkId })
            .select('-_v')
            .then((reaction) =>
                !reaction
                    ? res.status(404).json({ message: 'No reaction with that ID' })
                    : res, json(reaction)
            )
            .catch((err) => res.status(500).json(err));
    },

    createNetwork(req, res) {
        Reaction.create(req.body)
            .then((reaction) => res.json(reaction))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    deleteNetwork(req, res) {
        Reaction.findOneAndDelete({ _id: req.params.networkId })
            .then((reaction) =>
                !reaction
                    ? res.status(404).json({ message: 'No reaction with that ID' })
                    : User.deleteMany({ _id: { $in: reaction.users } })
            )
            .then(()=> res.json({message: 'Reaction and users deleted!'}))
            .catch((err)=> res.status(500).json(err));
    },
    updateNetwork(req,res) {
        Reaction.findOneAndUpdate(
            {_id: req.params.reactionId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((reaction)=> 
        !reaction
        ? res.status(404).json({message: 'No reaction that id!'})
        : res.json(reaction)
        )
        .catch((err)=> res.status(500).json(err));
    },
};