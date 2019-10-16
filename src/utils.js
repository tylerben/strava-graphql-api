const baseUrl = 'https://www.strava.com/api/v3';
const getUrl = endpoint => `${baseUrl}/${endpoint}`;
const getData = ({ data }) => data;
const addOrderSort = ({ baseScope, order, sort }) => {
  let newUrl = baseScope;

  if (order) {
    newUrl = `${newUrl}${sort ? '?' : '&'}order=${order.toLowerCase()}`;
  }

  if (sort) {
    newUrl = `${newUrl}${order ? '&' : '?'}sort=${sort}`;
  }

  return newUrl;
};

const metersToFeet = val => val * 3.28084;
const metersToMiles = val => val * 0.000621371;

module.exports = {
  addOrderSort,
  baseUrl,
  getUrl,
  getData,
  metersToFeet,
  metersToMiles,
};
