const {Schema, model} = require('mongoose');


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
      
        thoughts: {
            ref:'thoughts',
            type:Schema.Types.ObjectId
        },
        friends: {

        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user',userSchema);

module.exports = User;