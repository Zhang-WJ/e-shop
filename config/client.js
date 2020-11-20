const webpack = require("webpack");
const common = require("./common");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const clientConfig = config => {
  config.output = common.output;
  config.entry = "./src/entry-client";
  config.optimization = {
    splitChunks: {
      name: "mainfest",
      minChunks: Infinity
    }
  };
  config.plugins = [
    // Generates the client manifest file
    new VueSSRClientPlugin()
  ];
};

module.exports = clientConfig;
