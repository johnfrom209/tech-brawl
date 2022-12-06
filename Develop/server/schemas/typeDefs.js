const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Matchup {
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}

type Tech {
    name: String
}

type Query {
    matchups: [Matchup]!
    matchup(matchupId: ID!): Matchup
    techs: [Tech]!
}

type Mutation {
    createMatchup(tech1: String!, tech2: String!, tech1_votes: Int, tech2_votes: Int): Matchup
    createVote(id: ID!, techNum: Int!): Matchup
}

`