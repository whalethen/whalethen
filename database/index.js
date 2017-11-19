const mongoose = require('mongoose');
const Promise = require('bluebird');

Promise.promisifyAll(mongoose);
Promise.promisifyAll(require('mongodb'));

mongoose.connect('mongodb://localhost/whaleThen', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const eventSchema = mongoose.Schema({
  name: String,
  type: String,
  votes: Number,
});

const daySchema = mongoose.Schema({
  day: Number,
  timelineId: Number,
  events: [eventSchema],
});

const Day = mongoose.model('Day', daySchema);
const Event = mongoose.model('Event', eventSchema);

const saveNewTimeline = (timelineId, numberOfDays) => {
  const timeline = [];
  for (let day = 1; day <= numberOfDays; day += 1) {
    const newDay = new Day({ day, timelineId });
    timeline.push(newDay);
  }

  return Promise.map(timeline, day => day.save());
}

saveNewTimeline(1234, 5)
.then(result => console.log(result))
.catch(err => console.error('error: ', err))
