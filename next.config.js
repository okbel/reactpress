const withTypescript = require("@zeit/next-typescript");
// const withStyledIcons = require("next-plugin-styled-icons");
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(withCSS());