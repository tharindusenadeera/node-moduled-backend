import { generateJwtToken, validateJwtToken } from "auth/utils/jwt-token.js";
// import { getJwtConstants } from "document-management/config/jwt-contants.js";
import { getJwtConstants } from "document-management/config/jwt-contants.js";

//generate access token
export const generateDocumentToken = (payLoad) => {
  const accessTokenTimeLimit = getJwtConstants().accessTokenTimeLimit;
  return generateJwtToken({payLoad}, accessTokenTimeLimit);
};

//validate token
export const validateDocumentToken = (token) => {
  return validateJwtToken(token);
};
