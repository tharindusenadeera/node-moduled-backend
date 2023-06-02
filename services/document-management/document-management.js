import {
  fileUploadThroughChunk,
  fileUploadThroughDropzone,
  getDocuments,
  getDocumentTypes,
  getDocumentType,
  getProductDocumentMapping,
  createDocumentTypes,
  createProductDocumentMapping,
  getDocumentDetails,
  editDocumentType,
  deleteDocumentType,
  getProductDocumentMappings,
  requestExternalDocuments,
  validateExternalDocuments,
  externalFileUploadService,
  productDocumentUploadService,
  collateralDocumentUploadService,
  documentListService,
  documentListByProductService,
  documentListByApplicationTypeService,
  getApplicationDocumentDetailsService,
  getApplicationDocumentDetailHistoryService,
  applicationDocumentStatusChangeService,
  getApplicationDocumentListService,
  cribDocumentUploadService,
  getApplicationDocumentDataService,
  riskDocumentUploadService,
  legalDocumentUploadService,
  cauHeadFileUploadService,
  insurancePolicyDocUploadService,
} from 'document-management';

import { validateDocumentToken } from './document-token.js';

export const fileUploadThroughChunkFnCall = async (req) => fileUploadThroughChunk(req);

export const fileUploadThroughDropzoneFnCall = async (req) => fileUploadThroughDropzone(req);

export const getDocumentsFnCall = async (req) => {
  let tokenResponse = validateDocumentToken(req.headers.token);
  return getDocuments(tokenResponse, req.headers);
};

export const documentDetailsFnCall = async (req) => {
  return await getDocumentDetails(req);
};

export const getDocumentTypesFnCall = async (req) => getDocumentTypes(req);

export const getDocumentTypeFnCall = async (req) => getDocumentType(req);

export const createDocumentTypesFnCall = async (req) => {
  return await createDocumentTypes(req);
};

export const editDocumentTypeFnCall = async (req) => {
  return await editDocumentType(req);
};

export const deleteDocumentTypeFnCall = async (req) => {
  return await deleteDocumentType(req);
};

export const getProductDocumentMappingFnCall = async (req) => getProductDocumentMapping(req);

export const getProductDocumentsMappingFnCall = async (req) => getProductDocumentMappings(req);

export const createProductDocumentMappingFnCall = async (req) => createProductDocumentMapping(req);

export const documentListFnCall = async () => {
  return documentListService();
};

export const documentListByProductFnCall = async (req) => {
  const { productId, applicantType } = req.body;

  return documentListByProductService(productId, applicantType);
};

export const documentListByApplicationTypeFnCall = async (req) => {
  const { applicationId, documentTypeId, participantId, keyString } = req.params;

  return documentListByApplicationTypeService(applicationId, documentTypeId, participantId, keyString);
};

export const getApplicationDocumentListFnCall = async (req) => {
  const { applicationId } = req.body;

  return getApplicationDocumentListService(applicationId);
};

export const getApplicationDocumentDetailsFnCall = async (req) => {
  const { applicationId, documentId, participantId } = req.body;

  return getApplicationDocumentDetailsService(applicationId, documentId, participantId);
};

export const getApplicationDocumentDetailHistoryFnCall = async (req) => {
  const { applicationId, documentId, participantId, isPrimary } = req.body;

  return getApplicationDocumentDetailHistoryService(applicationId, documentId, participantId, isPrimary);
};

export const applicationDocumentStatusChangeFnCall = async (req) => {
  const { applicationId, documentId, applicantType, participantId, isPrimary, status, verifiedBy } = req.body;

  return applicationDocumentStatusChangeService(
    applicationId,
    documentId,
    applicantType,
    participantId,
    isPrimary,
    status,
    verifiedBy
  );
};

export const requestExternalDocumentsFnCall = async (req) => {
  const { requestedBy, name, userId, productId, applicationId, userType } = req.body;

  return requestExternalDocuments(requestedBy, name, userId, productId, applicationId, userType);
};

export const validateExternalDocumentsUrlFnCall = async (req) => {
  const { initialToken } = req.body;
  return validateExternalDocuments(initialToken);
};

export const productDocumentUploadFnCall = async (req, res) => {
  const result = await productDocumentUploadService(req, res);
  return result;
};

export const collateralDocumentUploadFnCall = async (req, res) => {
  const result = await collateralDocumentUploadService(req, res);
  return result;
};

export const externalFileUploadFnCall = async (req, res) => {
  const result = await externalFileUploadService(req, res);
  return result;
};

export const cribDocumentUploadFnCall = async (req, res) => {
  const result = await cribDocumentUploadService(req, res);
  return result;
};

export const getApplicationDocumentList = async (req) => {
  const { applicationId } = req.params;
  return getApplicationDocumentDataService(applicationId);
};

export const riskDocumentUploadFnCall = async (req, res) => {
  const result = await riskDocumentUploadService(req, res);
  return result;
};

export const legalDocumentUploadFnCall = async (req, res) => {
  const result = await legalDocumentUploadService(req, res);
  return result;
};

export const cauHeadFileUploadFnCall = async (req, res) => {
  const result = await cauHeadFileUploadService(req, res);
  return result;
};

export const insurancePolicyDocUploadFnCall = async (req, res) => {
  const result = await insurancePolicyDocUploadService(req, res);
  return result;
};
