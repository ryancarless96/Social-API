const mongoose = require('mongoose');

const reactionSchema = new moongoose.Schema({
    item: {type: String, required: true},
    stockCount: Number,
    price: Number,
    inStock: Boolean,
    lastAccessed: {type: Date, default: Date.now},
});

const User = mongoose.model('User', reactionSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        
    }
)