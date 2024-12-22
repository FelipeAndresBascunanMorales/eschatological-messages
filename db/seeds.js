const messages = [
  {
    content: 'Believe in yourself and all that you are.',
    category: 'Inspiration'
  },
  {
    content: 'The only limit to our realization of tomorrow is our doubts of today.',
    category: 'Motivation'
  },
  {
    content: 'The future belongs to those who believe in the beauty of their dreams.',
    category: 'Dreams'
  },
  {
    content: 'It does not matter how slowly you go as long as you do not stop.',
    category: 'Persistence'
  },
  {
    content: 'Success is not how high you have climbed, but how you make a positive difference to the world.',
    category: 'Success'
  }
];

const seedMessages = async (db) => {
  await db.collection('messages').insertMany(messages);
  console.log('Initial messages seeded successfully.');
};

module.exports = seedMessages;
