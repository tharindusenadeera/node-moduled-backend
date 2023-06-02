import * as WorkflowEngine from 'workflow-engine';

/** MASTER DATA */

export const masterDataHandler = async (req) => {
  return WorkflowEngine.getMasterData(req);
};
export const initialDataHandler = async (req) => {
  return WorkflowEngine.getInitialData(req);
};
export const actionHandler = async (req) => {
  return WorkflowEngine.getActionsData(req);
};
export const workflowChangeHandler = async (req) => {
  return WorkflowEngine.workflowChangeHandler(req);
};

/** WORKFLOW META DATA */

export const workflowsList = async (req) => {
  return WorkflowEngine.getWorkflowsList(req);
};
export const addWorkflowMeta = async (req) => {
  return WorkflowEngine.addWorkflowMeta(req);
};
export const editWorkflowMeta = async (req) => {
  return WorkflowEngine.editWorkflowMeta(req);
};
export const deleteWorkflowMeta = async (req) => {
  return WorkflowEngine.deleteWorkflowMeta(req);
};

/** REVERT HISTORY */

export const getApplicationRevertHistory = async (req) => {
  return WorkflowEngine.getApplicationRevertHistory(req);
};
export const addApplicationRevertHistory = async (req) => {
  return WorkflowEngine.addApplicationRevertHistory(req);
};
export const deleteApplicationRevertHistory = async (req) => {
  return WorkflowEngine.deleteApplicationRevertHistory(req);
};

/** WORKFLOW DATA */

export const getWorkflow = async (req) => {
  return WorkflowEngine.getWorkflow(req);
};
export const addWorkflow = async (req) => {
  return WorkflowEngine.addWorkflow(req);
};
export const editWorkflow = async (req) => {
  return WorkflowEngine.editWorkflow(req);
};
export const deleteWorkflow = async (req) => {
  return WorkflowEngine.deleteWorkflow(req);
};

/** WORKFLOW MAPPING */

export const getMappedWorkflows = async (req) => {
  return WorkflowEngine.getMappedWorkflows(req);
};
export const editMappedWorkflows = async (req) => {
  return WorkflowEngine.editMappedWorkflows(req);
};
export const addProductMappedWorkflows = async (req) => {
  return WorkflowEngine.addProductMappedWorkflows(req);
};
export const editProductMappedWorkflows = async (req) => {
  return WorkflowEngine.editProductMappedWorkflows(req);
};
export const updateWorkflowStageFnCall = async (req) => {
  return WorkflowEngine.updateWorkflowStages(req);
};
export const getWorkflowStageFnCall = async (req) => {
  return WorkflowEngine.getWorkflowStages(req);
};
export const addWorkflowManageAddStageFnCall = async (req) => {
  return WorkflowEngine.addWorkflowManageAddStage(req);
};
export const getWorkflowManageStageFnCall = async (req) => {
  return WorkflowEngine.getWorkflowManageStage(req);
};