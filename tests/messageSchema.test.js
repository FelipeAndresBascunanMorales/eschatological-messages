const mongoose = require('mongoose');
const { expect } = require('chai');
const Message = require('../models/message'); // Adjust the path as per file location

describe('Message Model Test', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () {
      console.log('We are connected to test database!');
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  // First test - save a message
  it('should create & save a message', async () => {
    const validMessage = new Message({ id: '123', text: 'Inspire daily', color: 'blue' });
    const savedMessage = await validMessage.save();
    expect(savedMessage._id).to.exist;
    expect(savedMessage.id).to.equal('123');
    expect(savedMessage.color).to.equal('blue');
  });

  // Second test - require text field
  it('should not save message without text', async () => {
    const messageWithoutText = new Message({ id: '124', color: 'green' });
    try {
      await messageWithoutText.save();
    } catch (error) {
      expect(error).to.be.instanceOf(mongoose.Error.ValidationError);
      expect(error.errors.text).to.exist;
    }
  });

  // Third test - invalid color
  it('should not save message with invalid color', async () => {
    const messageWithInvalidColor = new Message({ id: '125', text: 'Another message', color: 'purple' });
    try {
      await messageWithInvalidColor.save();
    } catch (error) {
      expect(error).to.be.instanceOf(mongoose.Error.ValidationError);
      expect(error.errors.color).to.exist;
    }
  });
});