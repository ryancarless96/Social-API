const {Schema, model} = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: "Please enter a valid email address",
        
        },
      
        thoughts: {
            type:Schema.Types.ObjectId,
            ref:'thoughts',  
        },
        friends: {
            type: Schema.Types.ObjectId, 
            ref: 'user', 
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const User = model('user',userSchema);

module.exports = User;