const request = require('request-promise');
const _ = require('lodash');
require('dotenv').config();

const formatCoordinates = ({ results }) => {
  const coorsObj = results[0].geometry.location;
  return `${coorsObj.lat},${coorsObj.lng}`;
};

const getCoordinates = (location) => {
  const options = {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: { address: location },
    params: { key: process.env.MAP_API },
    json: true,
  };
  return request(options);
};

const formatPlaces = ({ results }) => {
  return _.map(results, (place) => {
    return {
      name: place.name,
      rating: place.rating,
      address: place.vicinity,
    };
  });
};

const placesApi = (location, query, distance = 32000) => {
  const options = {
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    method: 'GET',
    qs: {
      location,
      radius: distance,
      keyword: query,
      key: process.env.MAP_API,
    },
    json: true,
  };

  return getCoordinates(location)
    .then(results => formatCoordinates(results))
    .then((formatedCoors) => { options.qs.location = formatedCoors; })
    .then(() => request(options))
    .then(response => formatPlaces(response))
    .catch(err => console.error(err));

  // ?location=-33.8670522,151.1957362
  // &radius=50&keyword=${query}&key=${apiKey}`
  // pass string location into coordinates func
  // add lat and long coordinatesto url string in place of location
  // request with formated url
  // return promise
};


// EXPORTS
module.exports.placesApi = placesApi;
module.exports.getCoordinates = getCoordinates;

// getCoordinates('Mountain View')
// .then(result => formatCoordinates(result))
// .then(form => console.log(form))
// .catch(err => console.error(err))

// placesApi('mountain view', 'hiking')
//   .then(result => console.log('success: ', result))
//   .catch(err => console.error('fail: ', err));
