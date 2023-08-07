const userSeed = [
    {
        username: 'GGS',
        email: 'salasgrg@gmail.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'Salas',
        email: 'gergasa94@yahoo.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'Xerus',
        email: 'xerus123@hotmail.com',
        friends: [],
        thoughts: []
    }
];

const thoughtSeed = [
    {
        thoughtText: 'random thought',
        username: 'GGS',
        reactions: [
            {reactionBody: "Cool", username: "rogelio"},
            {reactionBody: "Awesome", username: "guillermo"}
        ]

    },
    {
        thoughtText: 'second thought',
        username: 'GGS',
        reactions: [
            {reactionBody: "Cool", username: "rogelio"},
            {reactionBody: "Awesome", username: "guillermo"}
        ]        
    },
    {
        thoughtText: 'third random thought',
        username: 'Xerus',
        reactions: [
            {reactionBody: "Intersting", username: "steve"},
            {reactionBody: "Great", username: "malcolm"}
        ]
    },
    {
        thoughtText: 'Wandering',
        username: 'Salas',
        reactions: [
            {reactionBody: "Perfect", username: "Shazam"},
            {reactionBody: "Amazing", username: "Gustav"}
        ]
    }
];

// Export the variables for use in seed.js
module.exports = { userSeed, thoughtSeed };
