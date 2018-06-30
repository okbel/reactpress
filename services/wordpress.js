import axios from "axios";
import qs from "qs";
import getConfig from "next/config";
const config = getConfig();
const WORDPRESS_API_URL = config.publicRuntimeConfig.WORDPRESS_API_URL;

export async function getPosts(options = null) {
  let queryString = "";
  if (options) {
    queryString = "?" + qs.stringify(options);
  }
  const { data } = await axios.get(`${WORDPRESS_API_URL}/posts${queryString}`);
  return data;
}
