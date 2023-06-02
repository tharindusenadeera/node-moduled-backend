import {
  getCAUUsers,
  getCAUUsersByBranch,
  getCAUUsersByBranchManagers,
  getReportFilterMasterData,
} from "los-service";

export const getCAUUsersFnCall = async (req) => {
  return await getCAUUsers(req);
};

export const getCAUUsersByBranchFnCall = async (req) => {
  return await getCAUUsersByBranch(req);
};

export const getCAUUsersByBranchManagersFnCall = async (req) => {
  return await getCAUUsersByBranchManagers(req);
};

export const getReportFilterMasterDataFnCall = async (req) => {
  return await getReportFilterMasterData(req);
};
