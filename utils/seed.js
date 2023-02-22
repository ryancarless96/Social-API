const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await Thought.deletedMany({});

    await User.deleteMany({});

    const users = [];

    for (let i = 0; i < 20; i++) {
        const thoughts = getRandomThoughts(20);

        const fullName = getRandomName();
        const first = fullName.split('')[0];
        const last = fullName.split('')[1];
       
        users.push({
            first,
            last,
            thoughts,
        });
    }

    await User.collection.insertMany(users);

    await Thought.collection.insertOne({
        thoughtName: '',
        inPerson: false,
        users: [...users],
    });

    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
});