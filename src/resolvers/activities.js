const axios = require('axios');
const { getData, getUrl, metersToFeet, metersToMiles, addOrderSort } = require('../utils');

const headers = { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN }` };

module.exports = {
  activities: (_, { before = "", after="", page="", per_page="", activityType="" }) => {
    const beforeParam = before ? `&before=${before}` : "";
    const afterParam = after ? `&after=${after}` : "";
    const pageParam = page ? `&page=${page}` : "";
    const perPageParam = per_page ? `&per_page=${per_page}` : "";

    const url = getUrl(`athlete/activities?${beforeParam}${afterParam}${pageParam}${perPageParam}`);
    return axios.get(url, { headers }).then((response) => {
      const data = getData(response);
      const newData = data
        .filter((d) => {
          if (activityType !== "") {
            return d.type === activityType;
          }
          return d;
        })
        .map((d) => {
          const activity = Object.assign(d);
          activity.distance = metersToMiles(activity.distance);
          activity.total_elevation_gain = metersToFeet(activity.total_elevation_gain);
          return activity;
        });
      return newData;
    });
  },
};
