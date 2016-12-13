// src/utils/ApiService.js

// GET list of all dinosaurs from API
function getDinoList() {
  return fetch(`/api/dinosaurs`)
    .then(_verifyResponse)
    .catch(_handleError);
}

// GET a dinosaur's detail info from API by ID
function getDino(id) {
  return fetch(`/api/dinosaur/${id}`)
    .then(_verifyResponse)
    .catch(_handleError);
}

// Verify that the fetched response is JSON
function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  } else {
    _handleError({ message: 'Response was not JSON'});
  }
}

// Throw an error
function _handleError(error) {
  throw error;
}

// Export ApiService
const ApiService = { getDinoList, getDino };
export default ApiService;