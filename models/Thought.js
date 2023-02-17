const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtName: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            default: Date.now(),
        },
        endDate: {
            default: ()=> new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;