export const REQUEST_STATUS_PENDING = "PENDING";
export const REQUEST_STATUS_OK = "OK";
export const REQUEST_STATUS_ERROR = "ERROR";

/**
 *Helper to normalize api Responses. example of response :
 * {
 *   status: "OK",
 *   errorMessage: null,
 *   data: ['John', 'Paul', 'Ringo', 'George']
 * }
 */
export default function ApiResponse() {
  this.status = REQUEST_STATUS_PENDING;
  this.data = null;
  this.errorMessage = null;
}
