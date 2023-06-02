import express from 'express';
import {
  handleGetSCVDetails,
  handleInvokeCBSTrialCalculator,
  handleGetClientDetails,
  handleScvClientDetails,
  handleGetClientsDetails,
  handleScvRecoveryDetails,
  handlePreviousBurrowingDetails,
  handleSetLoanReportData,
  handleSetCoreBankData,
  handleGetCoreBankData,
  forceUpdateCBSSchemes
} from '../services/bank-service/bank-service.js';

import routesHandler from './handler/api-handler.js';

const router = express.Router();

router.post('/getSCVDetails', routesHandler(handleGetSCVDetails));
router.post('/invoke/tc', routesHandler(handleInvokeCBSTrialCalculator));
router.get('/cbs/schemes/force', routesHandler(forceUpdateCBSSchemes));
router.post('/getClientDetails', routesHandler(handleGetClientDetails));
router.post('/getClientsDetails', routesHandler(handleGetClientsDetails));

router.post('/scv-client-details', routesHandler(handleScvClientDetails));
router.post('/scv-recovery-details', routesHandler(handleScvRecoveryDetails));
router.post('/previous-burrowing', routesHandler(handlePreviousBurrowingDetails));
router.post('/loan-report-data', routesHandler(handleSetLoanReportData));

router.patch('/core-bank-data', routesHandler(handleSetCoreBankData));
router.post('/core-bank-data', routesHandler(handleGetCoreBankData));

export default router;
