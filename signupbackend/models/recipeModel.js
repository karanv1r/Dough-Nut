const mongoose = require("mongoose");

const recipeTemplate = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  comments: {
    type: [
      {
        comment: String,
        name: String,
      },
    ],
  },
});
module.exports = mongoose.model("recipeTable", recipeTemplate);
