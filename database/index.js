const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongo = require('mongodb');

Promise.promisifyAll(mongoose);
Promise.promisifyAll(mongo);

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
  address: String,
  rating: String,
  votes: { type: Number, default: 0 },
});

const daySchema = mongoose.Schema({
  day: Number,
  timelineId: Number,
  timelineName: String,
  events: [eventSchema],
});

const Day = mongoose.model('Day', daySchema);
const Event = mongoose.model('Event', eventSchema);

const addNewTimeline = (timelineId, numberOfDays, timelineName) => {
  const timeline = [];
  for (let day = 1; day <= numberOfDays; day += 1) {
    const newDay = new Day({ day, timelineId, timelineName });
    timeline.push(newDay);
  }
  return Promise.map(timeline, day => day.save());
};

const getTimelineById = timelineId => Day.findAsync({ timelineId });
const getTimelineByName = timelineName => Day.findAsync({ timelineName });

const addEventToDay = (event, timelineId, day, timelineName) => {
  return Day.findOneAsync({ timelineId, day, timelineName })
    .tap(model => model.events.push(event))
    .then(model => model.save());
};

const addNewEvent = (event, timelineId, day) => {
  const newEvent = new Event(event);
  return newEvent.saveAsync()
    .then(result => addEventToDay(result, timelineId, day));
};

module.exports.getTimelineById = getTimelineById;
module.exports.getTimelineByName = getTimelineByName;
module.exports.addNewTimeline = addNewTimeline;
module.exports.addNewEvent = addNewEvent;
module.exports.addEventToDay = addEventToDay;
