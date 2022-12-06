const { AuthenticationError } = require('apollo-server-express');
const { Mutation } = require('../../../../26-Stu_Resolver-Context/Solved/server/schemas/resolvers');
const { Matchup, Tech } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        matchups: async () => {
            return Matchup.find()
        },
        techs: async () => {
            return Tech.find()
        },
        matchup: async (parent, { id }) => {
            return Matchup.findOne({ _id: id })
        }
    },

    Mutation: {
        createMatchup: async (parent, { tech1, tech2, tech1_votes, tech2_votes }) => {
            const matchup = await Matchup.create({ tech1, tech2, tech1_votes, tech2_votes });
            return matchup;
        },
        createVote: async (parent, { id, techNum }) => {
            const vote = await Matchup.findOneAndUpdate(
                { _id: id },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            )

            return vote;
        }
    }
}