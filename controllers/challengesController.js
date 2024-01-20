const challenges = require("../models/challenges");

exports.getChallenges = (_, res) => {
  res.json(challenges);
};
