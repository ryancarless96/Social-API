const {Schema, model} = require('mongoose');
const userSchema = require('./User');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    username: {
        type: String,
        required: true,
    },
    users: [userSchema],
},
);

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;