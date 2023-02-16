const {User, Schema, Thought, Reaction} = require('../models');

module.exports = {
    getThoughts(req,res)  {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err)=> res.status(500).json(err));
    },
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('-_v')
        .then((thought) => 
        !thought  
        ? res.status(404).json({message: 'No thought with that ID'})
        : res.json(thought)
    )
    .catch((err)=> res.status(500).json(err));
    },
    createThought(req,res) {
        Thought.create(req.body)
        .then((thought)=> res.json(thought))
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err); 
        });
    },

    deleteThought(req,res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) => 
        !thought
        ? res.status(404).json({message: 'No thought with that ID'})
        : Network.findOneAndUpdate(
            {}
        )
        )
    }
}