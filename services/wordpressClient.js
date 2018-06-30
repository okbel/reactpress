import axios from "axios";
import qs from "qs";
import config from "./publicConfig";

export async function getPosts(options = null) {
  let queryString = "";
  if (options) {
    queryString = "?" + qs.stringify(options);
  }
  const { data } = await axios.get(
    `${config.WORDPRESS_API_URL}/posts${queryString}`
  );
  return data;
}

export async function getPostBySlug(slug, options = null) {
  let queryString = "";
  if (options) {
    queryString = "&" + qs.stringify(options);
  }
  const { data } = await axios.get(
    `${config.WORDPRESS_API_URL}/posts?slug=${slug}${queryString}`
  );
  return data[0];
}
