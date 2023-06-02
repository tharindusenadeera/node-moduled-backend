import express from 'express';
import {
  masterDataHandler,
  initialDataHandler,
  actionHandler,
  workflowChangeHandler,
  workflowsList,
  addWorkflowMeta,
  editWorkflowMeta,
  deleteWorkflowMeta,
  getWorkflow,
  addWorkflow,
  editWorkflow,
  deleteWorkflow,
  getMappedWorkflows,
  editProductMappedWorkflows,
  addProductMappedWorkflows,
  updateWorkflowStageFnCall,
  getApplicationRevertHistory,
  addApplicationRevertHistory,
  deleteApplicationRevertHistory,
  getWorkflowStageFnCall,
  addWorkflowManageAddStageFnCall,
  getWorkflowManageStageFnCall
} from '../services/workflow-engine/workflowEngine.js';
import routesHandler from './handler/api-handler.js';

const router = express.Router();

/** MASTER DATA */
router.get('/master-data', routesHandler(masterDataHandler));
router.get('/initial-data', routesHandler(initialDataHandler));
router.get('/actions', routesHandler(actionHandler));
router.post('/workflow-change', routesHandler(workflowChangeHandler));

/** META DATA OF WORKFLOW  */
router.get('/workflow-list', routesHandler(workflowsList));
router.post('/add-workflow-meta', routesHandler(addWorkflowMeta));
router.put('/edit-workflow-meta', routesHandler(editWorkflowMeta));
router.delete('/delete-workflow-meta', routesHandler(deleteWorkflowMeta));

/** REVERT HISTORY */
router.get('/revert-history', routesHandler(getApplicationRevertHistory));
router.post('/add-revert-history', routesHandler(addApplicationRevertHistory));
router.put('/delete-revert-history', routesHandler(deleteApplicationRevertHistory));

/** WORKFLOW DATA */
router.get('/workflow', routesHandler(getWorkflow));
router.post('/add-workflow', routesHandler(addWorkflow));
router.put('/edit-workflow', routesHandler(editWorkflow));
router.delete('/delete-workflow', routesHandler(deleteWorkflow));

/** WORKFLOW MAPPING */
router.get('/mapped-workflows', routesHandler(getMappedWorkflows));
router.post('/add-workflow-product-mapping', routesHandler(addProductMappedWorkflows));
router.put('/update-workflow-product-mapping', routesHandler(editProductMappedWorkflows));

/** WORKFLOW STAGE */
router.get('/workflow-stage', routesHandler(getWorkflowStageFnCall));
router.post('/update-workflow-stage', routesHandler(updateWorkflowStageFnCall));

router.get('/stages/manage', routesHandler(getWorkflowManageStageFnCall));
router.post('/stages/manage', routesHandler(addWorkflowManageAddStageFnCall));

export default router;
