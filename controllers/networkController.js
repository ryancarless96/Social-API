const { Network, User } = require('../models');

module.exports = {
    getNetworks(req, res) {
        Network.find()
            .then((networks) => res.json(networks))
            .catch((err) => res.status(500).json(err));
    },
    getSingleNetwork(req, res) {
        Network.findOne({ _id: req.params.networkId })
            .select('-_v')
            .then((network) =>
                !network
                    ? res.status(404).json({ message: 'No network with that ID' })
                    : res, json(network)
            )
            .catch((err) => res.status(500).json(err));
    },

    createNetwork(req, res) {
        Network.create(req.body)
            .then((network) => res.json(network))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    deleteNetwork(req, res) {
        Network.findOneAndDelete({ _id: req.params.networkId })
            .then((network) =>
                !network
                    ? res.status(404).json({ message: 'No network with that ID' })
                    : User.deleteMany({ _id: { $in: network.users } })
            )
            .then(()=> res.json({message: 'Network and users deleted!'}))
            .catch((err)=> res.status(500).json(err));
    },
    updateNetwork(req,res) {
        Network.findOneAndUpdate(
            {_id: req.params.networkId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((network)=> 
        !network
        ? res.status(404).json({message: 'No network that id!'})
        : res.json(network)
        )
        .catch((err)=> res.status(500).json(err));
    },
};