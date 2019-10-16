const { athlete, athleteStats } = require('./athletes');
const { activities } = require('./activities');

const resolvers = {
  Query: {
    athlete,
    athleteStats,
    activities,
  },
};

module.exports = resolvers;
