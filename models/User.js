const {Schema, model} = require('mongoose');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            max_length: 50,
        },
        github: {
            type: String,
            required: true,
            max_length: 50,
        },
        thoughts: [thoughtSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user',userSchema);

module.exports = User;