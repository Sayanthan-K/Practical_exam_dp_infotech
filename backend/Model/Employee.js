const mongoose = require("mongoose");

const Employee_schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    initials: {
      type: String,
      required: true,
      trim: true,
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

    Address1: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    Address2: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    DOB: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employees", Employee_schema);
