const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  coverImage: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
