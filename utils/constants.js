export default {
  httpStatus: {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  responseCodes: {
    success: { msg: 'Success', code: 1 },
    actionFailed: { msg: 'Failed', code: -1 },
    notFound: { msg: 'Requested API Not Found', code: -2 },
    serverError: { msg: 'Internal Server Error', code: -3 },
  },
};
