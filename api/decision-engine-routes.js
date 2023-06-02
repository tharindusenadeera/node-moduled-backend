import express from 'express';
import routesHandler from './handler/api-handler.js';
import {
  fieldAsync,
  fieldListAsync,
  ruleSync,
  ruleAsync,
  ruleListSync,
  ruleListAsync,
  getProductFields,
  getRuleDataAllLang,
  loadArgsTypeList,
  loadRuleIdNameList,
  loadProducts,
  loadProductFieldsRuleIdMap,
  updateRuleData /** @listens ruleCRUD */,
  getFieldIdListByCatalogKey /**@listens ruleMap */,
  loadFields /**@listens ruleMap */,
  loadRules /**@listens ruleMap */,
  updateFieldRuleIdList /**@listens ruleMap */,
  updateWorkflowdRuleIdList /** @listens workflowRuleMap */,
  loadWorkflows /**@listens workflowRuleMap */,
  getWorkflowIdListByCatalogKey /**@listens workflowRuleMap */,
  tabValidationFnCall,
  applicationValidationFnCall,
  fraudValidationFnCall,
  underwritingPolicyFnCall,
  disbursementApiValidationFnCall
} from '../services/decision-engine/decisionEngine.js';

const router = express.Router();

router.post('/field/async', routesHandler(fieldAsync));
router.post('/field-list/async', routesHandler(fieldListAsync));

router.post('/field/async', routesHandler(fieldAsync));
router.post('/field-list/async', routesHandler(fieldListAsync));

router.post('/rule/sync', routesHandler(ruleSync));
router.post('/rule/async', routesHandler(ruleAsync));
router.post('/rule-list/sync', routesHandler(ruleListSync));
router.post('/rule-list/async', routesHandler(ruleListAsync));

router.post('/get/product-fields', routesHandler(getProductFields));
router.post('/get/rule-data-all-lang', routesHandler(getRuleDataAllLang));

router.post('/load/args-type-list', routesHandler(loadArgsTypeList)); /** @listens ruleCRUD */
router.post('/load/rule-id-name-list', routesHandler(loadRuleIdNameList)); /** @listens ruleCRUD */

router.post('/load/products', routesHandler(loadProducts));
router.post('/load/product-fields-rule-id-map', routesHandler(loadProductFieldsRuleIdMap));
router.post('/update/rule-data', routesHandler(updateRuleData)); /** @listens ruleCRUD */

router.post('/field-id-list/get-by-catalog-key', routesHandler(getFieldIdListByCatalogKey)); /**@listens ruleMap */
router.post('/rule-list/load-all-as-object', routesHandler(loadRules)); /** @listens ruleMap */
router.post('/field-list/load-all-as-object', routesHandler(loadFields)); /** @listens ruleMap */
router.post('/field-id-list/update-by-field-id', routesHandler(updateFieldRuleIdList)); /** @listens ruleMap */

router.post('/workflow-list/load-all-as-object', routesHandler(loadWorkflows)); /** @listens workflowRuleMap */
router.post(
  '/workflow-id-list/get-by-catalog-key',
  routesHandler(getWorkflowIdListByCatalogKey)
); /** @listens workflowRuleMap */
router.post(
  '/workflow-id-list/update-by-workflow-id',
  routesHandler(updateWorkflowdRuleIdList)
); /** @listens workflowRuleMap */

router.get('/tab-validation', routesHandler(tabValidationFnCall));

router.post('/get/product-fields', routesHandler(getProductFields));
router.post('/get/rule-data-all-lang', routesHandler(getRuleDataAllLang));

router.post('/load/args-type-list', routesHandler(loadArgsTypeList)); /** @listens ruleCRUD */
router.get('/load/rule-id-name-list', routesHandler(loadRuleIdNameList)); /** @listens ruleCRUD */

router.post('/load/products', routesHandler(loadProducts));
router.post('/load/product-fields-rule-id-map', routesHandler(loadProductFieldsRuleIdMap));
router.post('/update/rule-data', routesHandler(updateRuleData)); /** @listens ruleCRUD */

router.post('/field-id-list/get-by-catalog-key', routesHandler(getFieldIdListByCatalogKey)); /**@listens ruleMap */
router.post('/rule-list/load-all-as-object', routesHandler(loadRules)); /** @listens ruleMap */
router.post('/field-list/load-all-as-object', routesHandler(loadFields)); /** @listens ruleMap */
router.post('/field-id-list/update-by-field-id', routesHandler(updateFieldRuleIdList)); /** @listens ruleMap */

router.post('/workflow-list/load-all-as-object', routesHandler(loadWorkflows)); /** @listens workflowRuleMap */
router.post(
  '/workflow-id-list/get-by-catalog-key',
  routesHandler(getWorkflowIdListByCatalogKey)
); /** @listens workflowRuleMap */
router.post(
  '/workflow-id-list/update-by-workflow-id',
  routesHandler(updateWorkflowdRuleIdList)
); /** @listens workflowRuleMap */

router.get('/validate-app-form', routesHandler(applicationValidationFnCall));

router.post('/validate-fraud', routesHandler(fraudValidationFnCall));
router.post('/validate-underwriting-policy', routesHandler(underwritingPolicyFnCall));
router.post('/validate-disbursement-apis', routesHandler(disbursementApiValidationFnCall));

export default router;
