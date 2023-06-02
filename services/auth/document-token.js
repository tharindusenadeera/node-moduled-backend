import { generateJwtToken, validateJwtToken } from 'auth/utils/jwt-token.js';
import { getJwtConstants } from 'auth/config/jwt-constants.js';

//generate access token
export const generateDocumentToken = async (payLoad) => {
  console.log('=== payload ====', payLoad);
  const accessTokenTimeLimit = getJwtConstants().accessTokenTimeLimit;
  return generateJwtToken(payLoad, accessTokenTimeLimit);
};
