const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.Promise = require('bluebird');
const options = { promiseLibrary: require('bluebird'), useMongoClient: true };


=======
const Promise = require('bluebird');
mongoose.Promise = Promise;
const options = { promiseLibrary: Promise, useMongoClient: true };

mongoose.connect('mongodb://localhost/whaleThen', options);
>>>>>>> (bug) add bluebird to db
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
