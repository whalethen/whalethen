const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const options = { promiseLibrary: require('bluebird'), useMongoClient: true };


const db = mongoose.connection;
mongoose.connect('mongodb://localhost/whaleThen', options);

db.on('error', () => console.log('mongoose connection error'));

db.once('open', () => console.log('mongoose connected successfully'));

const eventSchema = mongoose.Schema({
  name: String,
  type: String,
  votes: Number,
});

const daySchema = mongoose.Schema({
  day: Number,
  id: Number,
  events: [eventSchema],
});

const Day = mongoose.model('Day', daySchema);
const Event = mongoose.model('Event', eventSchema);
