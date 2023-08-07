const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeed, thoughtSeed } = require('./data.js');

connection.on('error', (err) => err);

connection.once('open', async () => {
    let inspectUsers = await connection.db.listCollections({ name: 'users' }).toArray();
    if (inspectUsers.length) {
        await connection.dropCollection('users');
    }
    let inspectThoughts = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (inspectThoughts.length) {
        await connection.dropCollection('thoughts');
    }

    await User.collection.insertMany(userSeed);
    await Thought.collection.insertMany(thoughtSeed);

    console.table(userSeed);
    console.table(thoughtSeed);
    console.info('Seeding performed succesfully');
    process.exit(0);

});

