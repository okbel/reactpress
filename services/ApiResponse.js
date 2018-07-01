export const REQUEST_STATUS_PENDING = "PENDING";
export const REQUEST_STATUS_OK = "OK";
export const REQUEST_STATUS_ERROR = "ERROR";

export default function ApiResponse() {
  this.status = REQUEST_STATUS_PENDING;
  this.data = null;
  this.errorMessage = null;
}
