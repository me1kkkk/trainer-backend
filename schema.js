const mongoose = require("mongoose");

const Schema = mongoose.Schema([
  {
    vocabulary: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
]);

// export model vocabulary with Schema
module.exports = mongoose.model("vocabulary", Schema);
