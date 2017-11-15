const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static('../client/'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.send('hello server is running');
});


const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
