import {
  sendMasterData,
  sendReportMasterData,
  viewPartialSavedData,
  loadPartialSavedData,
  loadAppFromJson,
  saveAppFormJson,
  loadAppFromSections,
  loadAppFromProductSections,
  // updateAppFormJson,
  getLanguageList as getLanguageListFn,
  getLoginLanguageList as getLoginLanguageListFn,
  getMasterDataList as getMasterDataListFn,
  getMasterMetaDataList as getMasterMetaDataListFn,
  editMasterDataList as editMasterDataListFn,
  addMasterDataList as addMasterDataListFn,
  applicantRequestDataSave,
  applicationRequestDataUpdate,
  nicSearchResults,
  loadPendingApplication,
  saveAppFormDataJson,
  getInterestRateFactorsList,
  addInterestRateMappingList,
  updateInterestRateMappingList,
  getInterestRateMappedDataList,
  addNewAppForm,
  app_form_submit,
  app_form_submit_borrower_update,
  getAppForms,
  deleteAppForm,
  updateAppForm,
  getAppFormById,
  getAppFormByParticipant,
  getOtherPrtFormPrdData,
  getApplicationData,
  sendAllLeads,
  sendApplications,
  sendAllApplications,
  createApplicationFundReleaseData as createApplicationFundReleaseDataFn,
  createApplicationCreditAuditData as createApplicationCreditAuditDataFn,
  getApplicationFundReleaseData as getApplicationFundReleaseDataFn,
  getApplicationCreditAuditData as getApplicationCreditAuditDataFn,
  createFollowUpChecklistItem as createFollowUpChecklistItemFn,
  getFollowUpChecklist as getFollowUpChecklistFn,
  getActivityHistory as getActivityHistoryFn,
  followUpChecklistItemStatusChange as followUpChecklistItemStatusChangeFn,
  createTaskChecklistItem as createTaskChecklistItemFn,
  getTaskChecklist as getTaskChecklistFn,
  taskChecklistItemStatusChange as taskChecklistItemStatusChangeFn,
  createDocumentChecklistItem as createDocumentChecklistItemFn,
  getDocumentChecklist as getDocumentChecklistFn,
  documentChecklistItemStatusChange as documentChecklistItemStatusChangeFn,
  getProductDocumentChecklist as getProductDocumentChecklistFn,
  createPredisbursementChecklistItem as createPredisbursementChecklistItemFn,
  getPredisbursementChecklist as getPredisbursementChecklistFn,
  getDataVerifiedChecklist as getDataVerifiedChecklistFn,
  predisbursementChecklistItemStatusChange as predisbursementChecklistItemStatusChangeFn,
  unpublishPredisbursementChecklistItemServiceFn,
  dataVerificationChecklistItemStatusChange as dataVerificationChecklistItemStatusChangeFn,
  getProductPredisbursementChecklist as getProductPredisbursementChecklistFn,
  getProductPredisbursementCategories as getProductPredisbursementCategoriesFn,
  getProdcuctDataVerficationCheckList as getProdcuctDataVerficationCheckListFn,
  productTypePredisbursementCategoryAndSelectionsServiceFN,
  getApplicationHistoryDataHandle,
  addTaskData,
  updateTaskData,
  getTaskListData,
  addNoteData,
  getNoteListData,
  addReferData,
  updateReferData,
  getReferListData,
  getApplicationCribRecords as getApplicationCribRecordsFn,
  getApplicationCribRecordImage as getApplicationCribRecordImageFn,
  getApplicationRiskRecordImage as getApplicationRiskRecordImageFn,
  getApplicationLegalRecordImage as getApplicationLegalRecordImageFn,
  getTabRederingStages,
  getApplicationTabs,
  getApplicationTabsById,
  getTabRederingStagesById,
  tabValidation,
  trailCalOtherChargesList,
  saveTrailCalOtherChargesList,
  updateOtherChargesList,
  financialInstitutionsList,
  sendApplicationReferrals,
  sendApplicationTasks,
  getTrailCalResult,
  getOtherChargesByApplicationResult,
  initiatedApplicationsByOwn,
  initiatedApplicationsByOwnBranch,
  applicationsAssignedToGroup,
  applicationsChangeAssignee,
  addConditionData,
  getConditionListData,
  addRiskData,
  getRiskListData,
  addLegalData,
  getLegalListData,
  getRepaymentMethodsList,
  dashBoardService,
  updateCondition,
  getOfferLetterDataFn,
  getLetterDocumentDataFn,
  createLetterDocumentDataFn,
  appraisalSectionAdd,
  appraisalSectionGet,
  getAPIDetails,
  saveActivityData,
  ACTIVITY_TYPES,
  saveUIDataHandle,
  decisionEngineValidation,
  workflowStageStatusUpdate,
  getDistinctTabList as distinctTabList,
  updateCurrentAssignee as updateCurrentAssigneeFn,
  calculateInterestRate,
  getGroupOwners as getGroupOwnersFn,
  createCauHeadAssign as createCauHeadAssignFn,
  getCauOfficerActionTaken as getCauOfficerActionTakenFn,
  getReferalCauOfficerGroup as getReferalCauOfficerGroupFn,
  getReferalCauManagerOwnerId as getReferalCauManagerOwnerIdFn,
  manageReferralProcessFn,
  getGroupList as getGroupListFn,
  getApplicationSectionDocument as getApplicationSectionDocumentFn,
  updateApplicationSectionDocumentMap,
  getUserOwnedGroupids as getUserOwnedGroupidsFn,
  getInsurancePolicyList as getInsurancePolicyListFn,
  getInsurancePolicyDocFile as getInsurancePolicyDocFileFn,
  updateApplicationControlTabFn,
  getCoreBankSchemeHistory
} from 'los-service';

export { manageReferralProcessUpdateFn as updateReferralProcess } from 'los-service';

/**
 * --------------- BUSINESS LOGIC FOR LOS SERVICE -----------------------------------
 */

export const sendMasterDataFnCall = async (req) => await sendMasterData(req);

export const sendMasterDataReportsFnCall = async (req) => await sendReportMasterData(req);

export const viewPartialSavedDataFnCall = async (req) => await viewPartialSavedData(req);

export const loadPartialSavedDataFnCall = async (req) => await loadPartialSavedData(req);

export const loadAppFromJsonFnCall = async (req) => await loadAppFromJson(req);

export const loadAppFromSectionsFnCall = async (req) => await loadAppFromSections(req);

export const saveAppFormJsonFnCall = async (req) => await saveAppFormJson(req);

export const loadAppFromProductSectionsFnCall = async (req) => await loadAppFromProductSections(req);

export const updateAppFormJsonFnCall = async (req) => await updateAppFormJson(req);

export const nicSearchFunctionCall = async (req) => await nicSearchResults(req);

export const loadPendingApplicationFunctionCall = async (req) => await loadPendingApplication(req);

export const saveAppFormDataJsonFunctionCall = async (req) => await saveAppFormDataJson(req);

export const getLoginLanguageList = async (req) => {
  return getLoginLanguageListFn();
};

export const getLanguageList = async (req) => {
  return getLanguageListFn();
};

export const getMasterDataList = async (req) => {
  const { typeKey } = req.params;
  return getMasterDataListFn(typeKey);
};

export const getMasterMetaDataList = async (req) => {
  return getMasterMetaDataListFn();
};

export const editMasterDataList = async (req) => {
  const { typeId } = req.params;
  const { typeKey, data } = req.body;

  return editMasterDataListFn(typeId, typeKey, data);
};

export const addMasterDataList = async (req) => {
  const { typeId } = req.params;
  const { typeKey, data } = req.body;

  return addMasterDataListFn(typeId, typeKey, data);
};

export const applicantRequestDataSaveFnCall = async (req) => {
  const data = await applicantRequestDataSave(req);

  saveActivityData({
    applicationId: data.data ?? req?.body?.oldNic ?? req?.body?.newNic,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Lead applicant basic details added',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return data;
};

export const applicationRequestDataUpdateFnCall = async (req) => {
  const data = await applicationRequestDataUpdate(req);

  saveActivityData({
    applicationId: data.data ?? req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Lead applicant credit details added',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return data;
};

// Interest rate model API call
export const getInterestRateFactors = async (req) => {
  return await getInterestRateFactorsList(req);
};

export const addInterestRateMapping = async (req) => {
  return await addInterestRateMappingList(req);
};

export const updateInterestRateMapping = async (req) => {
  return await updateInterestRateMappingList(req);
};

export const getInterestRateMappedData = async (req) => {
  return await getInterestRateMappedDataList(req);
};

export const addNewApplicationForm = async (req) => {
  return await addNewAppForm(req);
};

export const submitApplication = async (req) => {
  return await app_form_submit(req);
};

export const submitApplicationBorrowerUpdate = async (req) => {
  return await app_form_submit_borrower_update(req);
};

export const getApplicationForms = async (req) => {
  return await getAppForms(req);
};

export const deleteApplicationForm = async (req) => {
  return await deleteAppForm(req);
};

export const updateApplicationForm = async (req) => {
  return await updateAppForm(req);
};

export const getApplicationFormById = async (req) => {
  return await getAppFormById(req);
};

export const getApplicationFormByParticipant = async (req) => {
  return await getAppFormByParticipant(req);
};

export const loadOtherPrtApplicationFormPrdData = async (req) => {
  return await getOtherPrtFormPrdData(req);
};

export const getApplicationFormAndLeadData = async (req) => {
  return await getApplicationData(req);
};

export const sendAllLeadsFnCall = async (req) => {
  return await sendAllLeads(req);
};

export const sendApplicationsFnCall = async (req) => {
  return await sendApplications(req);
};
export const sendAllApplicationsFnCall = async (req) => {
  return await sendAllApplications(req);
};

export const workflowStageUpdate = async (req) => {
  return await workflowStageStatusUpdate(req);
};

export const createApplicationFundReleaseData = async (req) => {
  const { applicationId, status, comment, approvedBy } = req.body;

  saveActivityData({
    applicationId: applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Fund release approval update',
    responsibleBy: approvedBy,
    url: req?.url,
  });

  return await createApplicationFundReleaseDataFn(applicationId, status, comment, approvedBy);
};

export const createApplicationCreditAuditData = async (req) => {
  const { applicationId, comment, authorizedBy } = req.body;

  return await createApplicationCreditAuditDataFn(applicationId, comment, authorizedBy);
};

export const getApplicationFundReleaseData = async (req) => {
  const { applicationId } = req.params;

  return await getApplicationFundReleaseDataFn(applicationId);
};

export const getApplicationCreditAuditData = async (req) => {
  const { applicationId } = req.params;

  return await getApplicationCreditAuditDataFn(applicationId);
};

export const getApplicationHistoryData = async (req) => {
  return await getApplicationHistoryDataHandle(req);
};

export const addTask = async (req) => {
  await saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Added new task',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await addTaskData(req);
};

export const updateTask = async (req) => {
  return await updateTaskData(req);
};

export const getTaskList = async (req) => {
  return await getTaskListData(req);
};

export const addNote = async (req) => {
  return await addNoteData(req);
};

export const getNoteList = async (req) => {
  return await getNoteListData(req);
};

export const addCondition = async (req) => {
  await saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Added new condition',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await addConditionData(req);
};

export const getConditionList = async (req) => {
  return await getConditionListData(req);
};
export const addRisk = async (req) => {
  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Sent for opinion',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await addRiskData(req);
};

export const getRiskList = async (req) => {
  return await getRiskListData(req);
};
export const addLegal = async (req) => {
  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Sent for opinion',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await addLegalData(req);
};

export const getLegalList = async (req) => {
  return await getLegalListData(req);
};

export const updateConditionFnCall = async (req) => {
  return await updateCondition(req);
};

//---- checklist - start ----//
export const createFollowUpChecklistItem = async (req) => {
  const { applicationId, item, status, createdBy } = req.body;

  await saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Added New FollowUp Check List',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await createFollowUpChecklistItemFn(applicationId, item, status, createdBy);
};

export const getFollowUpChecklist = async (req) => {
  const { applicationId } = req.params;

  return await getFollowUpChecklistFn(applicationId);
};

export const followUpChecklistItemStatusChange = async (req) => {
  const { id, applicationId, status } = req.body;

  return await followUpChecklistItemStatusChangeFn(id, applicationId, status);
};

export const createTaskChecklistItem = async (req) => {
  const { title, description, createdBy, createdDate, applicationId, completedBy, completedDate, status } = req.body;

  return await createTaskChecklistItemFn(
    title,
    description,
    createdBy,
    createdDate,
    applicationId,
    completedBy,
    completedDate,
    status
  );
};

export const getTaskChecklist = async (req) => {
  const { applicationId } = req.params;

  return await getTaskChecklistFn(applicationId);
};

export const taskChecklistItemStatusChange = async (req) => {
  const { id, applicationId, status } = req.body;

  return await taskChecklistItemStatusChangeFn(id, applicationId, status);
};

export const createDocumentChecklistItem = async (req) => {
  const { title, description, createdBy, createdDate, applicationId, completedBy, completedDate, status } = req.body;

  return await createDocumentChecklistItemFn(
    title,
    description,
    createdBy,
    createdDate,
    applicationId,
    completedBy,
    completedDate,
    status
  );
};

export const getDocumentChecklist = async (req) => {
  const { applicationId } = req.params;

  return await getDocumentChecklistFn(applicationId);
};

export const documentChecklistItemStatusChange = async (req) => {
  const { id, applicationId, status, item, completedBy } = req.body;

  saveActivityData({
    applicationId: applicationId,
    key: ACTIVITY_TYPES.CHECKLIST,
    message: `Document checklist \"${item.TITLE}\" actioned`,
    responsibleBy: completedBy,
    url: req?.url,
  });

  return await documentChecklistItemStatusChangeFn(id, applicationId, status, item, completedBy);
};

export const getProductDocumentChecklist = async (req) => {
  const { productId, sectorId, schemeId } = req.params;

  return await getProductDocumentChecklistFn(productId, sectorId, schemeId);
};

export const createPredisbursementChecklistItem = async (req) => {
  const {
    title,
    description,
    createdBy,
    createdDate,
    applicationId,
    completedBy,
    completedDate,
    status,
    mappingId,
    predisbursementList,
  } = req.body;

  return await createPredisbursementChecklistItemFn(
    title,
    description,
    createdBy,
    createdDate,
    applicationId,
    completedBy,
    completedDate,
    status,
    mappingId,
    predisbursementList
  );
};

export const getPredisbursementChecklist = async (req) => {
  const { applicationId } = req.params;
  // console.log("=== applicationId ===", applicationId);
  return await getPredisbursementChecklistFn(applicationId);
};

export const getDataVerifiedChecklist = async (req) => {
  const { applicationId } = req.params;
  return await getDataVerifiedChecklistFn(applicationId);
};

export const unpublishPredisbursementChecklistItemService = async (req) => {
  return await unpublishPredisbursementChecklistItemServiceFn(req.body);
};

export const predisbursementChecklistItemStatusChange = async (req) => {
  const { applicationId, status, item, completedBy } = req.body;

  saveActivityData({
    applicationId: applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: `Pre Disbursement \"${item.DESCRIPTION}\" actioned`,
    responsibleBy: completedBy,
    url: req?.url,
  });

  return await predisbursementChecklistItemStatusChangeFn(applicationId, status, item, completedBy);
};

export const dataVerificationChecklistItemStatusChange = async (req) => {
  const { id, applicationId, status, item, completedBy } = req.body;

  saveActivityData({
    applicationId: applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: `Data Verification \"${item.DESCRIPTION}\" actioned`,
    responsibleBy: completedBy || req?.userData?.id,
    url: req?.url,
  });

  return await dataVerificationChecklistItemStatusChangeFn(
    id,
    applicationId,
    status,
    item,
    completedBy || req?.userData?.id
  );
};

export const getProductPredisbursementChecklist = async (req) => {
  const { productId, sectorId, schemeId } = req.params;

  return await getProductPredisbursementChecklistFn(productId, sectorId, schemeId);
};

export const getProductPredisbursementCategories = async (req) => {
  return await getProductPredisbursementCategoriesFn(req);
};

export const productTypePredisbursementCategoryAndSelections = async (req) => {
  return await productTypePredisbursementCategoryAndSelectionsServiceFN(req);
};

export const getProdcuctDataVerficationCheckList = async (req) => {
  const { productId, sectorId, schemeId } = req.params;

  return await getProdcuctDataVerficationCheckListFn(productId, sectorId, schemeId);
};

//---- checklist - end ----//
export const addRefer = async (req) => {
  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Refferal added',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await addReferData(req);
};

export const updateRefer = async (req) => {
  const response = await updateReferData(req);

  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: response.data.log ?? 'Refferal Actioned',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return response;
};

export const getReferList = async (req) => {
  return await getReferListData(req);
};

export const getApplicationCribRecords = async (req) => {
  const { applicationId } = req.params;

  return await getApplicationCribRecordsFn(applicationId);
};

export const cribDocumentUploadFnCall = async (req, res) => {
  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'CRID details updated',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  const result = await cribDocumentUploadService(req, res);
  return result;
};

export const getApplicationCribRecordImage = async (req) => {
  const { docId } = req.params;

  return await getApplicationCribRecordImageFn(docId);
};

export const getTabRenderingStagesFnCall = async (req) => {
  return await getTabRederingStages(req);
};

export const getTabRenderingStagesByIdFnCall = async (req) => {
  const { workflowId } = req.params;
  return await getTabRederingStagesById(workflowId);
};

export const getApplicationTabsFnCall = async (req) => {
  return await getApplicationTabs(req);
};

export const getApplicationTabsByIdFnCall = async (req) => {
  const { applicationId } = req.params;
  return await getApplicationTabsById(applicationId);
};

export const tabValidationsFnCall = async (req) => {
  return await tabValidation(req);
};

export const trailCalOtherChargesListFnCall = async (req) => {
  const { languageId } = req.params;
  return await trailCalOtherChargesList(languageId);
};

export const saveTrailCalOtherChargesListFnCall = async (req) => {
  const { applicationId, trailParams, trailOutput, otherFees, meta } = req.body;
  return await saveTrailCalOtherChargesList(applicationId, trailParams, trailOutput, otherFees, meta);
};

export const updateOtherChargesListFnCall = async (req) => {
  const { applicationId, otherFees } = req.body;
  return await updateOtherChargesList(applicationId, otherFees);
};

export const getTrailCalResultFnCall = async (req) => {
  const { applicationId } = req.params;
  return await getTrailCalResult(applicationId);
};

export const getOtherChargesByApplicationFnCall = async (req) => {
  const { applicationId } = req.params;
  return await getOtherChargesByApplicationResult(applicationId);
};

export const getFinancialInstitutions = async (req) => {
  const { languageId } = req.params;
  return await financialInstitutionsList(languageId);
};

export const sendApplicationReferralsFnCall = async (req) => {
  return await sendApplicationReferrals(req);
};

export const sendApplicationTasksFnCall = async (req) => {
  return await sendApplicationTasks(req);
};

export const initiatedApplicationsByOwnFnCall = async (req) => {
  return await initiatedApplicationsByOwn(req);
};

export const initiatedApplicationsByOwnBranchFnCall = async (req) => {
  return await initiatedApplicationsByOwnBranch(req);
};

export const applicationsAssignedToGroupFnCall = async (req) => {
  return await applicationsAssignedToGroup(req);
};

export const applicationsChangeAssigneeFnCall = async (req) => {
  return await applicationsChangeAssignee(req);
};

export const getRepaymentMethods = async (req) => {
  const { languageId } = req.params;
  return await getRepaymentMethodsList(languageId);
};

export const dashBoardServiceFnCall = async (req) => {
  return await dashBoardService(req);
};

export const getOfferLetterData = async (req) => {
  const { applicationId } = req.params;
  return await getOfferLetterDataFn(applicationId);
};

export const getLetterDocumentData = async (req) => {
  const { applicationId } = req.params;
  return await getLetterDocumentDataFn(applicationId);
};

export const createLetterDocumentData = async (req) => {
  return await createLetterDocumentDataFn(req);
};

export const addAppraisalSectionFnCall = async (req) => {
  saveActivityData({
    applicationId: req?.body?.applicationId,
    key: ACTIVITY_TYPES.DEFAULT,
    message: 'Appraisal details updated',
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });

  return await appraisalSectionAdd(req);
};

export const getAppraisalSectionFnCall = async (req) => {
  return await appraisalSectionGet(req);
};

export const handleGetAPIData = async (req, res) => {
  return await getAPIDetails(req, res);
};

export const getActivityHistory = async (req) => {
  const { applicationId } = req.params;

  return await getActivityHistoryFn(applicationId);
};

export const getApplicationRiskRecordImage = async (req) => {
  const { docId } = req.params;

  return await getApplicationRiskRecordImageFn(docId);
};

export const saveUIJobData = async (req) => {
  return await saveUIDataHandle(req);
};

export const getApplicationLegalRecordImage = async (req) => {
  const { docId } = req.params;

  return await getApplicationLegalRecordImageFn(docId);
};

export const decisionEngineValidationFnCall = async (req) => {
  return await decisionEngineValidation(req);
};

export const getDistinctTabList = async (req) => {
  return await distinctTabList(req);
};

export const creteActivityLog = async (req) => {
  const result = await saveActivityData({
    applicationId: req?.body?.applicationId ?? data.data ?? req?.body?.oldNic ?? req?.body?.newNic,
    key: ACTIVITY_TYPES.DEFAULT,
    message: req?.body?.message,
    responsibleBy: req?.userData?.id,
    url: req?.url,
  });
  return result;
};

export const updateCurrentAssignee = async (req) => {
  return await updateCurrentAssigneeFn(req);
};

export const calculateInterestRateFnCall = async (req) => {
  return await calculateInterestRate(req);
};
export const getGroupOwners = async (req) => {
  return await getGroupOwnersFn(req);
};

export const createCauHeadAssign = async (req) => {
  return await createCauHeadAssignFn(req);
};

export const getCauOfficerActionTaken = async (req) => {
  return await getCauOfficerActionTakenFn(req);
};

export const getReferalCauOfficerGroup = async (req) => {
  return await getReferalCauOfficerGroupFn(req);
};

export const getReferalCauManagerOwnerId = async (req) => {
  return await getReferalCauManagerOwnerIdFn(req);
};

export const manageReferralProcess = async (req) => {
  return await manageReferralProcessFn(req);
};

export const getGroupList = async (req) => {
  return await getGroupListFn(req);
};

export const getApplicationSectionDocument = async (req) => {
  return await getApplicationSectionDocumentFn(req);
};

export const updateApplicationSectionDocumentMapFnCall = async (req) => {
  return await updateApplicationSectionDocumentMap(req);
};

export const getUserOwnedGroupids = async (req) => {
  return await getUserOwnedGroupidsFn(req);
};

export const getInsurancePolicyList = async (req) => {
  return await getInsurancePolicyListFn(req);
};

export const getInsurancePolicyDocFile = async (req) => {
  const { docId } = req.params;

  return await getInsurancePolicyDocFileFn(docId);
};

export const updateApplicationControlTab = async (req) => {
  return await updateApplicationControlTabFn(req);
};

export const getCoreBankSchemeHistoryFn = async (req) => {
  return await getCoreBankSchemeHistory(req);
};



