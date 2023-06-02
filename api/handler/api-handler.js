import { sessionValidateService } from 'auth';
import { Logger } from 'utility';

import utils from '../../utils/util.js';

const getRequestParameters = (req) => {
  const params = req.query;
  const headers = req.headers;
  const body = req.body;
  const cookies = req.cookies;
  const url = req.originalUrl;
  const path = req.path;
  const type = params && params.type;

  return { params, headers, body, cookies, url, path, type };
};

const createResponse = (res, resObj, status) => {
  return res.status(status).json(resObj);
};

const handleSuccessApiCalls = async (handlerFunction, reqParams, res, statusCodes, httpStatusCodes) => {
  const results = await handlerFunction(reqParams);

  if (results && results.status) {
    return createResponse(res, { status: results.status, data: results.data }, httpStatusCodes.SUCCESS);
  } else {
    return createResponse(
      res,
      {
        status: statusCodes.actionFailed.code,
        error: statusCodes.actionFailed.msg,
      },
      httpStatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export default (handlerFunction, isAuthRoute = true, isDocument = false) => {
  const statusCodes = utils.constants.responseCodes;
  const httpStatusCodes = utils.constants.httpStatus;

  return async (req, res) => {
    try {
      let reqParams = getRequestParameters(req);
      const sessionResult = isAuthRoute ? sessionValidateService(reqParams.headers?.authorization) : null;

      const currentPath = req?.route?.path;

      if (!isAuthRoute || (sessionResult && sessionResult.status)) {
        if (
          !isAuthRoute &&
          (currentPath === '/sign-in' ||
            currentPath === '/login-language-list' ||
            currentPath === '/language-list' ||
            currentPath === '/masterdata')
        ) {
        } else {
          if (sessionResult && sessionResult.status) {
          } else {
            return createResponse(
              res,
              {
                status: statusCodes.actionFailed.code,
                error: statusCodes.actionFailed.msg,
              },
              httpStatusCodes.FORBIDDEN
            );
          }
        }

        //success func call handle
        if (isDocument) {
          // req = { ...req, ...{ userData: sessionResult?.result } };

          return await handleSuccessApiCalls(handlerFunction, req, res, statusCodes, httpStatusCodes);
        } else {
          if (sessionResult?.result) {
            reqParams = { ...reqParams, ...{ userData: sessionResult?.result } };
          }

          return await handleSuccessApiCalls(handlerFunction, reqParams, res, statusCodes, httpStatusCodes);
        }
      } else {
        //access denied func call handle
        return createResponse(res, sessionResult?.result, httpStatusCodes.FORBIDDEN);
      }
    } catch (error) {
      Logger.logError(`Internal Error: API HANDLER: ${error.message}`);
      return createResponse(
        res,
        {
          status: statusCodes.serverError.code,
          error: statusCodes.serverError.msg,
        },
        httpStatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };
};
