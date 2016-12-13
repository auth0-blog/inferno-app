// src/utils/ApiService.js

/**
 * GET list of all dinosaurs from API
 * 
 * @returns {promise}
 */
function getDinoList() {
  return fetch(`/api/dinosaurs`)
    .then(_verifyResponse)
    .catch(_handleError);
}

/**
 * GET a dinosaur's detail info from API by ID
 * 
 * @param {number} id
 * @returns {promise}
 */
function getDino(id) {
  return fetch(`/api/dinosaur/${id}`)
    .then(_verifyResponse)
    .catch(_handleError);
}

/**
 * Verify response is JSON
 * 
 * @param {any} res
 * @returns {any} JSON or throw error
 * @private
 */
function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  } else {
    _handleError({ message: 'Response was not JSON'});
  }
}

/**
 * Throw error
 * 
 * @param {object} error
 */
function _handleError(error) {
  throw error;
}

// Export ApiService
const ApiService = { getDinoList, getDino };
export default ApiService;