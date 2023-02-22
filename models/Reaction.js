const { Schema, Types } = require('mongoose');
const data = require("../utils/data");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: [true, "Enter a username"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => data(createdAtVal),
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
