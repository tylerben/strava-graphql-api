const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    athlete: Athlete
    athleteStats(id: Int!): AthleteStats
    activities (before: Int, after: Int, page: Int, per_page: Int, activityType: String): [Activity],
    allRuns(before: Int, after: Int, page: Int, per_page: Int): [Activity]
  }

  type Athlete {
    id: Int
    username: String
    firstname: String
    lastname: String
    city: String
    state: String
    country: String
    sex: String
    profile: String
  }

  type AthleteStats {
    biggest_climb_elevation_gain: Float
    ytd_run_totals: YtdRunTotals
  }

  type YtdRunTotals {
    count: Int
    distance: Float
    elevation_gain: Float
  }

  type Activity {
    name: String,
    distance: Float,
    total_elevation_gain: Float,
    type: String,
    workout_type: String
    start_date: String
  }

  type Run {
    name: String,
    distance: String,
    total_elevation_gain: Float,
    type: String,
    workout_type: String
    start_date: String
  }

`;

module.exports = typeDefs;
