const {Schema, model} = require('mongoose');
const networkSchema = require('./Network')

const userSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
            max_length: 50,
        },
        last: {
            type: String,
            required: true,
            max_length: 50,
        },
        github: {
            type: String,
            required: true,
            max_length: 50,
        },
        networks: [networkSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user',userSchema);

module.exports = User;