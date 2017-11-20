const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./placesApi.js');
const db = require('../database/');

const app = express();

app.use(express.static(`${__dirname}/../client/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('/', (request, response) => response.json('GET,POST,PUT,GET'));

app.get('/timeline/:timelineId', (request, response) => {
  // get route with based on timeline id endpoint. Should
  // allow for the access to the id tag via req.params as
  // shown in the current response
  db.getTimelineById(request.params.timelineId)
    .then(timeline => response.json(timeline))
    .catch(err => console.error('error: ', err));
});

app.post('/entry', ({ body }, response) => {
  console.log(body)
  // for adding an extry to a day model
  db.addNewEvent(body.event, body.timelineId, body.day)
  .tap(() => console.log(body))
    .then(() => response.status(200))
    .catch(() => response.status(409))
  // response.send(body.event)
});

app.put('/entry', (request, response) => {
  // for editing a day entry in day model
  response.send('for editing a day entry in day model');
});

app.delete('/entry/:id', (request, response) => {
  // for removing an entry from the day model
  response.send('for removing an entry from the day model');
});

app.get('/search', (request, response) => {
  const { category, location } = request.query;
  // for triggering a search to the search api
  api.placesApi(location, category)
    .then(result => response.json(result))
    .catch(err => console.error(err));
});


const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
