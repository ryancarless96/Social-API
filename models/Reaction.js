const { Schema, Types } = require('mongoose');

const reactionSchema = new moongoose.Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionSchema: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Unnamed reaction'
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
