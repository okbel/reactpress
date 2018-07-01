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
  const defaultOptions = {
    per_page: 10,
    page: 1
  };
  let queryString = "";
  const newOptions = {
    ...defaultOptions,
    ...options
  };
  queryString = qs.stringify(newOptions);
  let url = `${config.REACTPRESS_WORDPRESS_API_URL}/posts?${queryString}`;
  try {
    const { data } = await axios.get(url);
    response.data = data;
    response.status = REQUEST_STATUS_OK;
  } catch (e) {
    response.status = REQUEST_STATUS_ERROR;
    response.errorMessage = e.message;
  }
  return response;
};

export async function getPostBySlug(slug, options = null) {
  const response = new ApiResponse();
  let queryString = "";
  if (options) {
    queryString = "&" + qs.stringify(options);
  }
  try {
    const { data } = await axios.get(
      `${config.REACTPRESS_WORDPRESS_API_URL}/posts?slug=${slug}${queryString}`
    );
    if (data.length > 0) {
      response.data = data[0];
    }
    response.status = REQUEST_STATUS_OK;
  } catch (e) {
    response.status = REQUEST_STATUS_ERROR;
    response.errorMessage = e.message;
  }
  return response;
}
