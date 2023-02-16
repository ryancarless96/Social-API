const { Schema, Types } = require('mongoose');

const networkSchema = new moongoose.Schema(
    {
        networkId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        networkSchema: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Unnamed network'
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = networkSchema;
