import express from 'express';
import {
  createDocumentTypesFnCall,
  createProductDocumentMappingFnCall,
  getDocumentTypesFnCall,
  getProductDocumentMappingFnCall,
  getProductDocumentsMappingFnCall,
  documentDetailsFnCall,
  getDocumentTypeFnCall,
  editDocumentTypeFnCall,
  deleteDocumentTypeFnCall,
  requestExternalDocumentsFnCall,
  validateExternalDocumentsUrlFnCall,
  documentListFnCall,
  documentListByProductFnCall,
  documentListByApplicationTypeFnCall,
  getApplicationDocumentListFnCall,
  getApplicationDocumentDetailsFnCall,
  getApplicationDocumentDetailHistoryFnCall,
  applicationDocumentStatusChangeFnCall,
  getApplicationDocumentList,
} from '../services/document-management/document-management.js';
import routesHandler from './handler/api-handler.js';

const router = express.Router();

router.get('/documentDetails', routesHandler(documentDetailsFnCall));

router.get('/documentTypes', routesHandler(getDocumentTypesFnCall));
router.get('/documentType', routesHandler(getDocumentTypeFnCall));
router.post('/documentTypes', routesHandler(createDocumentTypesFnCall));
router.put('/documentTypes', routesHandler(editDocumentTypeFnCall));
router.patch('/deleteDocumentType', routesHandler(deleteDocumentTypeFnCall));

router.get('/productDocumentMapping', routesHandler(getProductDocumentMappingFnCall));
router.get('/productDocumentMappings', routesHandler(getProductDocumentsMappingFnCall));
router.post('/productDocumentMapping', routesHandler(createProductDocumentMappingFnCall));

router.get('/document-list', routesHandler(documentListFnCall));
router.post('/document-list-by-product', routesHandler(documentListByProductFnCall));
router.get('/document-list-by-application-type', routesHandler(documentListByApplicationTypeFnCall));

//external document req
router.post('/request-external-documents', routesHandler(requestExternalDocumentsFnCall));
router.post('/validate-external-url', routesHandler(validateExternalDocumentsUrlFnCall));

router.post('/get-application-document-list', routesHandler(getApplicationDocumentListFnCall));
router.post('/get-application-document-details', routesHandler(getApplicationDocumentDetailsFnCall));
router.post('/get-application-document-detail-history', routesHandler(getApplicationDocumentDetailHistoryFnCall));
router.patch('/application-document-status-change', routesHandler(applicationDocumentStatusChangeFnCall));

router.get('/application-document-data', routesHandler(getApplicationDocumentList));

export default router;
