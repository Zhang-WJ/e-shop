const clientConfig = require("./config/client");

module.exports = {
  configureWebpack: config => {
    config.entry = `./src/entry-client.js`;
  }
};
