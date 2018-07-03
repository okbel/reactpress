// @see https://github.com/WP-API/node-wpapi
import WPAPI from "wpapi";
import config from "./publicConfig";
export default new WPAPI({
  endpoint: config.wordpressUrl + "/wp-json"
});
