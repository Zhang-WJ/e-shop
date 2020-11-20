const path = require("path");

const common_config = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js"
  }
};

module.exports = common_config;
