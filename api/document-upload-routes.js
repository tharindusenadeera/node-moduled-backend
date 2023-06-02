import express from 'express';
import {
  fileUploadThroughChunkFnCall,
  fileUploadThroughDropzoneFnCall,
  getDocumentsFnCall,
  externalFileUploadFnCall,
  productDocumentUploadFnCall,
  collateralDocumentUploadFnCall,
  cribDocumentUploadFnCall,
  riskDocumentUploadFnCall,
  legalDocumentUploadFnCall,
  cauHeadFileUploadFnCall,
  insurancePolicyDocUploadFnCall,
} from '../services/document-management/document-management.js';

import routesHandler from './handler/api-handler.js';

const router = express.Router();

router.post('/uploadchunk', routesHandler(fileUploadThroughChunkFnCall, true, true));
router.post('/uploaddropzone', routesHandler(fileUploadThroughDropzoneFnCall, true, true));
router.get('/getImages', routesHandler(getDocumentsFnCall, true, true));

router.post('/product-document-upload', routesHandler(productDocumentUploadFnCall, true, true));
router.post('/collateral-document-upload', routesHandler(collateralDocumentUploadFnCall, true, true));
router.post('/external-file-upload', routesHandler(externalFileUploadFnCall, false, true));

router.post('/crib-document-upload', routesHandler(cribDocumentUploadFnCall, true, true));
router.post('/risk-document-upload', routesHandler(riskDocumentUploadFnCall, true, true));
router.post('/legal-document-upload', routesHandler(legalDocumentUploadFnCall, true, true));
router.post('/cau-head-file-upload', routesHandler(cauHeadFileUploadFnCall, true, true));
router.post('/insurance-policy-document-upload', routesHandler(insurancePolicyDocUploadFnCall, true, true));

export default router;
