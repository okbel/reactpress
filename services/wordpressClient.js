import axios from "axios";
import qs from "qs";
import config from "./publicConfig";
import ApiResponse, {
  REQUEST_STATUS_ERROR,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_OK
} from "./ApiResponse";

export const getPosts = async options => {
  const response = new ApiResponse();
  let queryString = "";
  const defaultOptions = {
    per_page: 10,
    page: 1,
    // add a "embedded" key with fully loaded authors, terms etc
    _embed: true
  };
  const newOptions = {
    ...defaultOptions,
    ...options
  };
  queryString = qs.stringify(newOptions);
  const url = `${config.REACTPRESS_WORDPRESS_API_URL}/posts?${queryString}`;
  try {
    const { data } = await axios.get(url);
    response.data = data;
    response.status = REQUEST_STATUS_OK;
  } catch (e) {
    response.status = REQUEST_STATUS_ERROR;
    response.errorMessage = `${url} : ${e.message}`;
  }
  return response;
};

export async function getPostBySlug(slug, options = {}) {
  const response = new ApiResponse();
  let queryString = "";
  const defaultOptions = {
    // add a "embedded" key with fully loaded authors, terms etc
    _embed: true
  };
  const newOptions = {
    ...defaultOptions,
    ...options
  };
  queryString = "&" + qs.stringify(newOptions);
  try {
    const url = `${
      config.REACTPRESS_WORDPRESS_API_URL
    }/posts?slug=${slug}${queryString}`;
    const { data } = await axios.get(url);
    if (data.length > 0) {
      response.data = data[0];
    }
    response.status = REQUEST_STATUS_OK;
  } catch (e) {
    response.status = REQUEST_STATUS_ERROR;
    response.errorMessage = `${url} : ${e.message}`;
  }
  return response;
}
