const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const reactpressConfig = require("./plugins/withReactpressConfig");
/**
 * Config file for next.js
 */
module.exports = withPlugins([css, reactpressConfig]);
