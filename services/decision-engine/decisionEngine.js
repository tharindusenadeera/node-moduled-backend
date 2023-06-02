import RuleService, { applicationFormValidation, tabValidation, validateFraud, validateUnderwritingPolicy, validateDisbursementAPIs } from 'decision-engine';

/* ----------------- by field -----------------*/

export const fieldAsync = async (reqParams) => {
  const { catalogKey, languageId, customerObj } = reqParams.body;
  return RuleService.validateFieldAsync(catalogKey, languageId, customerObj);
};

export const fieldListAsync = async (reqParams) => {
  const { catalogKey, languageId, customerObj } = reqParams.body;
  return RuleService.validateFieldListAsync(catalogKey, languageId, customerObj);
};

/* ----------------- by rule -----------------*/

export const ruleSync = async (reqParams) => {
  const { ruleId, languageId, customerObj } = reqParams.body;
  return RuleService.validateRuleSync(ruleId, languageId, customerObj);
};

export const ruleAsync = async (reqParams) => {
  const { ruleId, languageId, customerObj } = reqParams.body;
  return RuleService.validateRuleAsync(ruleId, languageId, customerObj);
};

export const ruleListSync = async (reqParams) => {
  const { ruleIdList, languageId, customerObj } = reqParams.body;
  return RuleService.validateRuleListSync(ruleIdList, languageId, customerObj);
};

export const ruleListAsync = async (reqParams) => {
  const { ruleIdList, languageId, customerObj } = reqParams.body;
  return RuleService.validateRuleListAsync(ruleIdList, languageId, customerObj);
};

export const getProductFields = async (reqParams) => {
  const { productId, languageId } = reqParams.body;
  return RuleService.getProductFields(languageId, productId);
};

export const getRuleDataAllLang = async (reqParams) => {
  const { ruleId } = reqParams.body;
  return RuleService.getRuleDataAllLang(ruleId);
};

/** @listens ruleMap */
export const loadRules = async (reqParams) => {
  const { languageId } = reqParams.body;
  return RuleService.loadRules(languageId);
};

/** @listens ruleMap */
export const updateFieldRuleIdList = async (reqParams) => {
  const { catalogKey, fieldId, ruleIdActiveList } = reqParams.body;
  return RuleService.updateFieldRuleIdList(catalogKey, fieldId, ruleIdActiveList);
};
/** @listens workflowRuleMap */
export const updateWorkflowdRuleIdList = async (reqParams) => {
  const { catalogKey, workflowId, workflowIdActiveList } = reqParams.body;
  return RuleService.updateWorkflowdRuleIdList(catalogKey, workflowId, workflowIdActiveList);
};

/** @listens ruleCRUD */
export const loadArgsTypeList = async (reqParams) => {
  const { languageId } = reqParams.body;
  return RuleService.loadArgsTypeList(languageId);
};

/** @listens ruleCrud */
export const loadRuleIdNameList = async (reqParams) => {
  const { languageId } = reqParams.params;
  return RuleService.loadRuleIdNameList(languageId);
};

export const loadProducts = async (reqParams) => {
  const { languageId } = reqParams.body;
  return RuleService.loadProducts(languageId);
};

/** @listens ruleMap */
export const loadFields = async (reqParams) => {
  const { languageId } = reqParams.body;
  return RuleService.loadFields(languageId);
};
export const loadProductFieldsRuleIdMap = async (reqParams) => {
  const { productId } = reqParams.body;
  return RuleService.loadProductFieldsRuleIdMap(productId);
};

/**@listens ruleCrud */
export const updateRuleData = async (reqParams) => {
  const { rule } = reqParams.body;
  return RuleService.updateRuleData(rule);
};

/** @listens ruleMap */
/** @descrition  */
export const getFieldIdListByCatalogKey = async (reqParams) => {
  const { catalogKey } = reqParams.body;
  return RuleService.getFieldIdListByCatalogKey(catalogKey);
};

/** @listens workflowRuleMap */
/** @descrition  */
export const getWorkflowIdListByCatalogKey = async (reqParams) => {
  const { catalogKey } = reqParams.body;
  return RuleService.getWorkflowIdListByCatalogKey(catalogKey);
};

/** @listens workflowRuleMap */
export const loadWorkflows = async (reqParams) => {
  const { languageId } = reqParams.body;
  return RuleService.loadWorkflows(languageId);
};

// Tab validation
export const tabValidationFnCall = async (req) => {
  return await tabValidation(req);
};

//----------------- application form validation ----------

export const applicationValidationFnCall = async (req) => {
  return await applicationFormValidation(req);
};

//----------------- workflow validation ----------

export const fraudValidationFnCall = async (req) => {
  return await validateFraud(req);
};

export const underwritingPolicyFnCall = async (req) => {
  return await validateUnderwritingPolicy(req);
};

export const disbursementApiValidationFnCall = async (req) => {
  return await validateDisbursementAPIs(req.body);
};
