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

export async function getPostsByTagId(tagId, options = {}) {
  const response = new ApiResponse();
  const newOptions = {
    ...options,
    tags: tagId
  };
  return await getPosts({ tags: tagId });
}

export async function getPostsByTagSlug(tagSlug, options = {}) {
  const response = new ApiResponse();
  response.data = {
    tag: null,
    posts: null
  };
  // first get the full tag object
  const tagResponse = await getTagBySlug(tagSlug);
  if (tagResponse === REQUEST_STATUS_ERROR) {
    return { tagResponse };
  }
  if (tagResponse.data === null) {
    return tagResponse;
  }
  response.data.tag = tagResponse.data;
  // now get all posts related to that tag
  const newOptions = {
    ...options,
    tags: tagResponse.data.id
  };
  const postsResponse = await getPosts(newOptions);
  if (postsResponse === "ERROR") {
    return postsResponse;
  }
  response.status = REQUEST_STATUS_OK;
  response.data.posts = postsResponse.data;
  return response;
}

export async function getPostsByCategorySlug(tagSlug, options = {}) {
  const response = new ApiResponse();
  response.data = {
    category: null,
    posts: null
  };
  // first get the full tag object
  const categoryResponse = await getCategoryBySlug(tagSlug);
  if (categoryResponse === REQUEST_STATUS_ERROR) {
    return { categoryResponse };
  }
  if (categoryResponse.data === null) {
    return categoryResponse;
  }
  response.data.category = categoryResponse.data;
  // now get all posts related to that tag
  const newOptions = {
    ...options,
    categories: categoryResponse.data.id
  };
  const postsResponse = await getPosts(newOptions);
  if (postsResponse === "ERROR") {
    return postsResponse;
  }
  response.status = REQUEST_STATUS_OK;
  response.data.posts = postsResponse.data;
  return response;
}

export async function getTagBySlug(slug, options = {}) {
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
    }/tags?slug=${slug}${queryString}`;
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

export async function getCategoryBySlug(slug, options = {}) {
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
    }/categories?slug=${slug}${queryString}`;
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

export async function getPageBySlug(slug, options = {}) {
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
    }/pages?slug=${slug}${queryString}`;
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
