const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/social-network-api"
);

mongoose.set("debug", true);

module.exports = mongoose.connection;