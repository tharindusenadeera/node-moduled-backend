import {
  getSCVDetails,
  getClientDetails,
  getClientsDetails,
  getScvClientDetails,
  getScvRecoveryDetails,
  getPreviousBurrowingDetails,
  setLoanReportData,
  setCoreBankData,
  getGetCoreBankData,
  invokeCBSTrialCalculator,
  loadCoreBankSchemes
} from 'bank-service-invoker';


export const handleGetSCVDetails = async (req, res) => {
  return await getSCVDetails(req, res);
};

export const handleGetClientDetails = async (req, res) => {
  return await getClientDetails(req, res);
};

export const handleScvClientDetails = async (req, res) => {
  return await getScvClientDetails(req, res);
};

export const handleGetClientsDetails = async (req, res) => {
  return await getClientsDetails(req, res);
};

export const handleScvRecoveryDetails = async (req, res) => {
  return await getScvRecoveryDetails(req, res);
};

export const handlePreviousBurrowingDetails = async (req, res) => {
  return await getPreviousBurrowingDetails(req, res);
};

export const handleSetLoanReportData = async (req, res) => {
  const { setData } = req.body;

  return await setLoanReportData(setData);
};

export const handleSetCoreBankData = async (req, res) => {
  const { applicationId, key, setData } = req.body;

  return await setCoreBankData(applicationId, key, setData);
};

export const handleGetCoreBankData = async (req, res) => {
  const { applicationId, key } = req.body;

  return await getGetCoreBankData(applicationId, key);
};

export const handleInvokeCBSTrialCalculator = async (req, res) => {
  return await invokeCBSTrialCalculator(req);
};

export const forceUpdateCBSSchemes = async (req, res) => {
  const result = await loadCoreBankSchemes(req);
  return {
    status: 1,
    data: result ?? []
  }
};

export const getCBSSchemesHistoryFn = async (req, res) => {
  return await getCoreBankSchemeHistory(req);
};
