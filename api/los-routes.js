import express from 'express';
import { getAppFormService } from 'los-service/services/get-application-forms/get-application-forms.js';
import {
  getLoginLanguageList,
  getLanguageList,
  sendMasterDataFnCall,
  sendMasterDataReportsFnCall,
  viewPartialSavedDataFnCall,
  loadPartialSavedDataFnCall,
  loadAppFromJsonFnCall,
  loadAppFromSectionsFnCall,
  loadAppFromProductSectionsFnCall,
  updateAppFormJsonFnCall,
  saveAppFormJsonFnCall,
  getMasterDataList,
  getMasterMetaDataList,
  editMasterDataList,
  addMasterDataList,
  applicantRequestDataSaveFnCall,
  applicationRequestDataUpdateFnCall,
  nicSearchFunctionCall,
  loadPendingApplicationFunctionCall,
  saveAppFormDataJsonFunctionCall,
  getInterestRateFactors,
  addInterestRateMapping,
  updateInterestRateMapping,
  getInterestRateMappedData,
  addNewApplicationForm,
  submitApplication,
  submitApplicationBorrowerUpdate,
  deleteApplicationForm,
  updateApplicationForm,
  getApplicationFormById,
  getApplicationFormByParticipant,
  loadOtherPrtApplicationFormPrdData,
  getApplicationFormAndLeadData,
  sendAllLeadsFnCall,
  sendApplicationsFnCall,
  sendAllApplicationsFnCall,
  createApplicationFundReleaseData,
  createApplicationCreditAuditData,
  getApplicationFundReleaseData,
  getApplicationCreditAuditData,
  getApplicationHistoryData,
  addTask,
  updateTask,
  getTaskList,
  addNote,
  getNoteList,
  addCondition,
  getConditionList,
  addRisk,
  getRiskList,
  addLegal,
  getLegalList,
  addRefer,
  updateRefer,
  getReferList,
  createFollowUpChecklistItem,
  getFollowUpChecklist,
  followUpChecklistItemStatusChange,
  createTaskChecklistItem,
  getTaskChecklist,
  taskChecklistItemStatusChange,
  createDocumentChecklistItem,
  getDocumentChecklist,
  documentChecklistItemStatusChange,
  getProductDocumentChecklist,
  createPredisbursementChecklistItem,
  getPredisbursementChecklist,
  getDataVerifiedChecklist,
  predisbursementChecklistItemStatusChange,
  unpublishPredisbursementChecklistItemService,
  dataVerificationChecklistItemStatusChange,
  getProductPredisbursementChecklist,
  getProductPredisbursementCategories,
  productTypePredisbursementCategoryAndSelections,
  getProdcuctDataVerficationCheckList,
  getApplicationCribRecords,
  getApplicationCribRecordImage,
  getTabRenderingStagesFnCall,
  getApplicationTabsFnCall,
  getApplicationTabsByIdFnCall,
  getTabRenderingStagesByIdFnCall,
  tabValidationsFnCall,
  trailCalOtherChargesListFnCall,
  saveTrailCalOtherChargesListFnCall,
  updateOtherChargesListFnCall,
  getFinancialInstitutions,
  sendApplicationReferralsFnCall,
  sendApplicationTasksFnCall,
  getTrailCalResultFnCall,
  getOtherChargesByApplicationFnCall,
  initiatedApplicationsByOwnFnCall,
  initiatedApplicationsByOwnBranchFnCall,
  applicationsAssignedToGroupFnCall,
  applicationsChangeAssigneeFnCall,
  getRepaymentMethods,
  dashBoardServiceFnCall,
  updateConditionFnCall,
  getOfferLetterData,
  getLetterDocumentData,
  createLetterDocumentData,
  addAppraisalSectionFnCall,
  getAppraisalSectionFnCall,
  handleGetAPIData,
  getActivityHistory,
  getApplicationRiskRecordImage,
  getInsurancePolicyDocFile,
  saveUIJobData,
  getApplicationLegalRecordImage,
  decisionEngineValidationFnCall,
  creteActivityLog,
  getDistinctTabList,
  workflowStageUpdate,
  updateCurrentAssignee,
  calculateInterestRateFnCall,
  getGroupOwners,
  createCauHeadAssign,
  getCauOfficerActionTaken,
  getReferalCauOfficerGroup,
  getReferalCauManagerOwnerId,
  manageReferralProcess,
  updateReferralProcess,
  getGroupList,
  getApplicationSectionDocument,
  updateApplicationSectionDocumentMapFnCall,
  getUserOwnedGroupids,
  getInsurancePolicyList,
  updateApplicationControlTab,
  getCoreBankSchemeHistoryFn
} from '../services/los/los-service.js';

// import { getApplicationMetaFnCall } from '../services/los/application-service.js';

import {
  addSchemeFnCall,
  deleteSchemeFnCall,
  editSchemeFnCall,
  getSchemeFnCall,
  getSchemesFnCall,
  addSectorFnCall,
  deleteSectorFnCall,
  editSectorFnCall,
  getSectorFnCall,
  getSectorsFnCall,
  addTypeFnCall,
  deleteTypeFnCall,
  editTypeFnCall,
  getTypeFnCall,
  getTypesFnCall,
  productSectorSchemeMappingFnCall,
  productTypeSectorMappingFnCall,
  editTypeSectorMappingFnCall,
  getProductmappingFnCall,
  getProductDataFnCall,
  getChangedProductMappingsFnCall,
  getProductTypeSectorMappingsFnCall,
  getProductDataIntFnCall,
  getProductSchemeSectorMappingsFnCall,
  saveChangedDataFnCall,
  createCatalogKeyFnCall,
  getOriginalProductMappingsFnCall,
  getSchemesByProductFnCall,
  changeApplicationProductDetails,
  updateProductDetails,
  applicationProductCode,
  applicationProductCodeInfo,
} from '../services/los/product-service.js';

import {
  getCAUUsersFnCall,
  getCAUUsersByBranchFnCall,
  getCAUUsersByBranchManagersFnCall,
  getReportFilterMasterDataFnCall,
} from '../services/cau/cau-service.js';

import routesHandler from './handler/api-handler.js';

const router = express.Router();

router.get('/login-language-list', routesHandler(getLoginLanguageList, false));
router.get('/language-list', routesHandler(getLanguageList, false));
router.get('/app-form', routesHandler(loadAppFromJsonFnCall));

router.post('/loadpartialsaved', routesHandler(loadPartialSavedDataFnCall));
router.post('/save-app-form-json', routesHandler(saveAppFormJsonFnCall));
router.post('/set-app-form-json', routesHandler(updateAppFormJsonFnCall));
router.post('/app-form-prd-section', routesHandler(loadAppFromProductSectionsFnCall));
router.post('/applicant-request-personal', routesHandler(applicantRequestDataSaveFnCall));
router.post('/master-data', routesHandler(addMasterDataList));
router.get('/tabs/stages', routesHandler(getDistinctTabList));
router.post('/appFormData', routesHandler(saveAppFormDataJsonFunctionCall));
router.post('/submitApplication', routesHandler(submitApplication));
router.post('/submitApplicationBorrowerUpdate', routesHandler(submitApplicationBorrowerUpdate));

router.get('/masterdata', routesHandler(sendMasterDataFnCall, false));
router.get('/masterdata/reports', routesHandler(sendMasterDataReportsFnCall));
router.get('/partialsaved', routesHandler(viewPartialSavedDataFnCall));
router.get('/app-form-sections', routesHandler(loadAppFromSectionsFnCall));
router.get('/master-data', routesHandler(getMasterDataList));
router.get('/master-meta-data', routesHandler(getMasterMetaDataList));
router.put('/master-data', routesHandler(editMasterDataList));
router.get('/searchByNic', routesHandler(nicSearchFunctionCall));
router.get('/pendingApplication', routesHandler(loadPendingApplicationFunctionCall));

router.put('/applicant-request-credit', routesHandler(applicationRequestDataUpdateFnCall));

//Scheme routes
router.get('/get-scheme', routesHandler(getSchemeFnCall));
router.get('/get-schemes', routesHandler(getSchemesFnCall));
router.post('/add-scheme', routesHandler(addSchemeFnCall));
router.put('/edit-scheme', routesHandler(editSchemeFnCall));
router.post('/delete-scheme', routesHandler(deleteSchemeFnCall));

//Sector routes
router.get('/get-sector', routesHandler(getSectorFnCall));
router.get('/get-sectors', routesHandler(getSectorsFnCall));
router.post('/add-sector', routesHandler(addSectorFnCall));
router.put('/edit-sector', routesHandler(editSectorFnCall));
router.post('/delete-sector', routesHandler(deleteSectorFnCall));

//Type routes
router.get('/get-type', routesHandler(getTypeFnCall));
router.get('/get-types', routesHandler(getTypesFnCall));
router.post('/add-type', routesHandler(addTypeFnCall));
router.put('/edit-type', routesHandler(editTypeFnCall));
router.post('/delete-type', routesHandler(deleteTypeFnCall));

//Mapping routes
router.get('/type-sector-mappings', routesHandler(getProductTypeSectorMappingsFnCall));
router.post('/sector-scheme-mapping', routesHandler(productSectorSchemeMappingFnCall));
router.put('/sector-scheme-mapping', routesHandler(productSectorSchemeMappingFnCall));
router.post('/type-sector-mapping', routesHandler(editTypeSectorMappingFnCall));
router.put('/type-sector-mapping', routesHandler(editTypeSectorMappingFnCall));
router.get('/get-product-mapping', routesHandler(getProductmappingFnCall));
router.get('/sector-scheme-mappings', routesHandler(getProductSchemeSectorMappingsFnCall));
router.post('/type-sector-mapping', routesHandler(productTypeSectorMappingFnCall));

//All product data
router.get('/get-product-data', routesHandler(getProductDataFnCall));

router.get('/get-changed-mappings', routesHandler(getChangedProductMappingsFnCall));
router.post('/save-changed-data', routesHandler(saveChangedDataFnCall));
router.get('/get-changed-mappings', routesHandler(getChangedProductMappingsFnCall));

router.get('/get-original-mappings', routesHandler(getOriginalProductMappingsFnCall));

router.post('/save-changed-data', routesHandler(saveChangedDataFnCall));

router.get('/get-product-data-int', routesHandler(getProductDataIntFnCall));

router.get('/create-catalog', routesHandler(createCatalogKeyFnCall));
//Interest rate API's
router.get('/interest-rate-factors', routesHandler(getInterestRateFactors));
router.post('/add-interest-rate-mapping', routesHandler(addInterestRateMapping));
router.put('/edit-interest-rate-mapping', routesHandler(updateInterestRateMapping));
router.get('/get-interest-rate-mapped-data', routesHandler(getInterestRateMappedData));

//==================== APP FORM BUILDER ROUTES ===============

router.post('/new-application-form', routesHandler(addNewApplicationForm));

router.get('/app-form-list', routesHandler(getAppFormService));

router.post('/delete-app-form', routesHandler(deleteApplicationForm));

router.put('/update-app-form', routesHandler(updateApplicationForm));

router.get('/applicationForm', routesHandler(getApplicationFormById));

router.get('/participant-application-form', routesHandler(getApplicationFormByParticipant));

router.get('/other-participant-app-form-prd-data', routesHandler(loadOtherPrtApplicationFormPrdData));

// Credit file
router.get('/get-application-data', routesHandler(getApplicationFormAndLeadData));

//===================== GET LEADS / APPLICATIONS / REFERRALS / TASKS - START=============

router.get('/leads', routesHandler(sendAllLeadsFnCall));

router.get('/applications', routesHandler(sendApplicationsFnCall));

router.post('/applications/products/details', routesHandler(changeApplicationProductDetails));

router.put('/products/meta', routesHandler(updateProductDetails));

router.get('/applications/products/details', routesHandler(applicationProductCode));

router.post('/applications/products/info', routesHandler(applicationProductCodeInfo));

router.get('/application-referrals', routesHandler(sendApplicationReferralsFnCall));

router.get('/application-tasks', routesHandler(sendApplicationTasksFnCall));

router.get('/applications-by-own', routesHandler(initiatedApplicationsByOwnFnCall));

router.get('/applications-by-branch', routesHandler(initiatedApplicationsByOwnBranchFnCall));

router.get('/applications-to-branch', routesHandler(applicationsAssignedToGroupFnCall));

router.get('/applications-change-assignee', routesHandler(applicationsChangeAssigneeFnCall));

router.get('/filtered-applications', routesHandler(sendAllApplicationsFnCall));

router.patch('/update-current-assignee', routesHandler(updateCurrentAssignee));

//===================== GET LEADS / APPLICATIONS / REFERRALS / TASKS - END=============

router.get('/application-crib-records', routesHandler(getApplicationCribRecords));
router.get('/application-crib-record-image', routesHandler(getApplicationCribRecordImage));

router.post('/add-refer', routesHandler(addRefer));
router.post('/update-refer', routesHandler(updateRefer));
router.get('/get-refer-list', routesHandler(getReferList));

router.post('/add-note', routesHandler(addNote));
router.get('/get-note-list', routesHandler(getNoteList));
router.post('/add-condition', routesHandler(addCondition));
router.get('/get-condition-list', routesHandler(getConditionList));
router.post('/add-risk', routesHandler(addRisk));
router.get('/get-risk-list', routesHandler(getRiskList));
router.post('/add-legal', routesHandler(addLegal));
router.get('/get-legal-list', routesHandler(getLegalList));
router.post('/update-condition', routesHandler(updateConditionFnCall));
router.get('/get-insurance-policy-list', routesHandler(getInsurancePolicyList));

router.get('/get-history-data', routesHandler(getApplicationHistoryData));
router.post('/add-task', routesHandler(addTask));
router.post('/update-task', routesHandler(updateTask));
router.get('/get-task-list', routesHandler(getTaskList));

router.post('/fund-release-data', routesHandler(createApplicationFundReleaseData));
router.post('/credit-audit-data', routesHandler(createApplicationCreditAuditData));
router.get('/fund-release-data', routesHandler(getApplicationFundReleaseData));
router.get('/credit-audit-data', routesHandler(getApplicationCreditAuditData));
// router.get('/trail-cal-other-charges-list', routesHandler(trailCalOtherChargesListFnCall));
// router.post('/save-trail-cal-other-charges-list', routesHandler(saveTrailCalOtherChargesListFnCall));
router.get('/trail-cal-result', routesHandler(getTrailCalResultFnCall));

//---- checklist - list ----//
router.post('/followup-checklist', routesHandler(createFollowUpChecklistItem));
router.get('/followup-checklist', routesHandler(getFollowUpChecklist));
router.patch('/followup-checklist-status-change', routesHandler(followUpChecklistItemStatusChange));

router.post('/task-checklist', routesHandler(createTaskChecklistItem));
router.get('/task-checklist', routesHandler(getTaskChecklist));
router.patch('/task-checklist-status-change', routesHandler(taskChecklistItemStatusChange));

router.post('/document-checklist', routesHandler(createDocumentChecklistItem));
router.get('/document-checklist', routesHandler(getDocumentChecklist));
router.put('/document-checklist-status-change', routesHandler(documentChecklistItemStatusChange));
router.get('/product-document-checklist', routesHandler(getProductDocumentChecklist));

router.post('/predisbursement-checklist', routesHandler(createPredisbursementChecklistItem));
router.get('/predisbursement-checklist', routesHandler(getPredisbursementChecklist));
router.put('/predisbursement-checklist-status-change', routesHandler(predisbursementChecklistItemStatusChange));
router.post('/predisbursement-checklist-remove', routesHandler(unpublishPredisbursementChecklistItemService));
router.get('/product-predisbursement-checklist', routesHandler(getProductPredisbursementChecklist));
router.get('/product-predisbursement-categories', routesHandler(getProductPredisbursementCategories));
router.get('/product-predisbursement-categories-saved', routesHandler(productTypePredisbursementCategoryAndSelections));

router.get('/product-data-verification-checklist', routesHandler(getProdcuctDataVerficationCheckList));
router.put('/data-verification-checklist-status-change', routesHandler(dataVerificationChecklistItemStatusChange));
router.get('/data-verification-checklist', routesHandler(getDataVerifiedChecklist));

//---- checklist - end ----//
router.get('/get-tab-rendering-stages', routesHandler(getTabRenderingStagesFnCall));
router.get('/get-tab-rendering-stage', routesHandler(getTabRenderingStagesByIdFnCall));
router.get('/get-all-application-tabs', routesHandler(getApplicationTabsFnCall));
router.get('/get-application-tabs', routesHandler(getApplicationTabsByIdFnCall));
router.post('/tab-validation-wf-process', routesHandler(tabValidationsFnCall));

router.get('/trail-cal-other-charges-list', routesHandler(trailCalOtherChargesListFnCall));
router.post('/update-other-charges-list', routesHandler(updateOtherChargesListFnCall));
router.get('/other-charges-by-application', routesHandler(getOtherChargesByApplicationFnCall));
router.post('/save-trail-cal-other-charges-list', routesHandler(saveTrailCalOtherChargesListFnCall));

router.get('/financial-institutions', routesHandler(getFinancialInstitutions));
router.get('/repayment-methods', routesHandler(getRepaymentMethods));
router.get('/application-count', routesHandler(dashBoardServiceFnCall));
router.get('/financial-institutions', routesHandler(getFinancialInstitutions));
router.get('/repayment-methods', routesHandler(getRepaymentMethods));

router.get('/offer-letter-data', routesHandler(getOfferLetterData));
router.post('/add-appraisal-section', routesHandler(addAppraisalSectionFnCall));
router.get('/get-appraisal-section', routesHandler(getAppraisalSectionFnCall));

router.get('/activity-history', routesHandler(getActivityHistory));
router.get('/getApiStatus', routesHandler(handleGetAPIData));
// router.post('/retryDisbursementAPI', routesHandler(handleRetryAPIData));

router.get('/application-risk-record-image', routesHandler(getApplicationRiskRecordImage));
router.get('/insurance-policy-doc-file', routesHandler(getInsurancePolicyDocFile));
router.post('/uiJobDataSave', routesHandler(saveUIJobData));
router.get('/application-legal-record-image', routesHandler(getApplicationLegalRecordImage));

router.get('/schemes-by-Product', routesHandler(getSchemesByProductFnCall));
router.post('/validate-on-workflow-next', routesHandler(decisionEngineValidationFnCall));

router.post('/applications-history', routesHandler(creteActivityLog));

router.post('/applications-history', routesHandler(creteActivityLog));

router.get('/letter-document-data', routesHandler(getLetterDocumentData));
router.post('/letter-document-save-data', routesHandler(createLetterDocumentData));

router.post('/workflow/stage/status', routesHandler(workflowStageUpdate));

router.get('/calculate-interest-rate', routesHandler(calculateInterestRateFnCall));
router.get('/get-group-owners', routesHandler(getGroupOwners));
router.get('/get-cau-officer-action-taken', routesHandler(getCauOfficerActionTaken));
router.post('/create-cau-head-assign', routesHandler(createCauHeadAssign));

router.get('/get-referal-cau-officer-group', routesHandler(getReferalCauOfficerGroup));
router.get('/get-referal-cau-manager-owner-id', routesHandler(getReferalCauManagerOwnerId));

router.get('/referrals/processes/manage', routesHandler(manageReferralProcess));
router.post('/referrals/processes/manage', routesHandler(updateReferralProcess));

router.get('/get-group-list', routesHandler(getGroupList));

router.get('/get-application-section-document', routesHandler(getApplicationSectionDocument));
router.put('/update-application-section-document', routesHandler(updateApplicationSectionDocumentMapFnCall));

router.get('/cau/users', routesHandler(getCAUUsersFnCall));
router.get('/cau/users/branch', routesHandler(getCAUUsersByBranchFnCall));
router.get('/workflows/next/assignees', routesHandler(getCAUUsersByBranchManagersFnCall));

router.get('/get-user-owned-groupids', routesHandler(getUserOwnedGroupids));

// router.get('/applications/controltab/meta', routesHandler(getApplicationMetaFnCall));

router.get('/report/filter/master-data', routesHandler(getReportFilterMasterDataFnCall))
router.put('/applications/control/tabs', routesHandler(updateApplicationControlTab))
router.get('/cbs/schemes/history', routesHandler(getCoreBankSchemeHistoryFn))

export default router;
