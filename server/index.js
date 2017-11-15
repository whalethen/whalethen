const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static(`${__dirname}/../client/`));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.options('/', (request, response) => response.json('GET,POST,PUT,GET'));

app.get('/timeline/:timelineId', (request, response) => {
  response.send(request.params);
});

app.post('/entry', (request, response) => {
  // for adding an extry to a day model
  response.send('for adding an extry to a day model');
});

app.post('/entry/delete', (request, response) => {
  // for removing an entry from the day model
  response.send('for removing an entry from the day model');
});

app.put('/entry', (request, response) => {
  // for editing a day entry in day model
  response.send('for editing a day entry in day model');
});

app.get('/search', (request, response) => {
  // for triggering a search to the search api
  response.send('for triggering a search to the search api');
});


const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
