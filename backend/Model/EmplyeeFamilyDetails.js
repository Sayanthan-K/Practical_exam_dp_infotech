const mongoose = require("mongoose");

const Employeefamily_schema = new mongoose.Schema(
  {
    EmplyeeID: {
      type: String,
      required: true,
    },

    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    relationship: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employeefamily", Employeefamily_schema);
