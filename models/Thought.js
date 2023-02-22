const {Schema, model} = require('mongoose');
const data = require("../utils/data");
const reactionSchema= require('./Reaction');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: [true, "Write down a thought"],
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (createdAtVal) => data(createdAtVal),

    },
    username: {
        type: String,
        required: [true,"Enter a username"],
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;