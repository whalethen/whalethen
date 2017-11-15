const request = require('express');
const config = require('../config/config.js');

const placesApi = (location, query) => {
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/
  json?location=-33.8670522,151.1957362
  &radius=50&keyword=${query}&key=${apiKey}`;
  // pass string location into coordinates func
  // add lat and long coordinatesto url string in place of location
  // request with formated url
  // return promise
};

const coordinates = (location) => {
  // TODO: need binary has for url
  // takes location
  // passes into googleapis url
  // returns json obj with coordinates and other stuff
};
