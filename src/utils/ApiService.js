function getDinos() {
  return fetch(`/api/dinosaurs`).then(_verifyResponse).catch(_handleError);
}

function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  } else {
    return _handleError({ message: 'Response was not JSON'});
  }
}

function _handleError(error) {
  throw error;
}

const ApiService = { getDinos };
export default ApiService;