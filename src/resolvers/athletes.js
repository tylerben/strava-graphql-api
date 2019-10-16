const axios = require('axios');
const { getData, getUrl, metersToFeet, metersToMiles } = require('../utils');

const headers = { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` };

module.exports = {
  athlete: (_, { id }) => {
    const url = `${getUrl('athlete')}`;

    return axios.get(url, { headers }).then(getData);
  },
  athleteStats: (_, { id }) => {
    const url = `${getUrl('athletes')}/${id}/stats`;
    return axios.get(url, { headers }).then((response) => {
      const data = getData(response);
      const newData = Object.assign(data);
      newData.biggest_climb_elevation_gain = metersToFeet(newData.biggest_climb_elevation_gain);
      newData.ytd_run_totals.elevation_gain = metersToFeet(newData.ytd_run_totals.elevation_gain);
      newData.ytd_run_totals.distance = metersToMiles(newData.ytd_run_totals.distance);
      return newData;
    });
  },
};
