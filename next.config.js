const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const reactpressConfig = require("./plugins/withReactpressConfig");
/**
 * Config file for next.js
 */
const config = withPlugins([css, reactpressConfig]);
module.exports = config;
