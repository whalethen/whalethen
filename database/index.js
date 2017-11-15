const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const daySchema = mongoose.Schema({
  day: Number,
  id: Number,
  events: {},
});

const eventSchema = mongoose.Schema({
  name: String,
  type: String,
  votes: Number,
});

const Day = mongoose.model('Day', daySchema);
const Event = mongoose.model('Event', eventSchema);
