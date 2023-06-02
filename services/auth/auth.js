import {
  signIn as signInFn,
  changePassword as changePasswordFn,
  forgotPassword as forgotPasswordFn,
  resetForgotPassword as resetForgotPasswordFn,
  forgotPasswordOtpValidate as forgotPasswordOtpValidateFn,
  forgotPasswordLinkValidate as forgotPasswordLinkValidateFn,
  renewTokens as renewTokensFn,
  getUserListFn,
  logout,
  getUserGroupList,
  getPrivilegeList,
  getPrivilegeByUserGroup,
  setPrivilegeByUserGroupFun,
  getPrivilegeByUserGroupAndSection,
  getUserGroupByIdService,
  addNewUserGroupService,
  editUserGroupService,
  getUsersByUserGroup,
  setUsersByUserGroup,
  registerUser,
  getUsers,
  assignUserBranches,
  updateUserDla,
  getUserDla,
  getUserBranches,
  lockUser,
  updateUser,
  updateUserPrivileges,
  getDistinctPrivilegeSubSections,
  getPrivilegesSectionsMain,
  getPrivilegesSectionsSub,
  updatePrivileges,
  removePrivileges,
  updatePrivilegeTypeDesc
} from 'auth';

export const signIn = async (req) => {
  const { username, password, language } = req.body;

  return signInFn(username, password, language);
};

export const changePassword = async (req) => {
  const { password, newPassword } = req.body;

  return changePasswordFn(req.userData.id, password, newPassword);
};

export const forgotPassword = async (req) => {
  const { email } = req.body;

  return forgotPasswordFn(email);
};

export const resetForgotPassword = async (req) => {
  const { token, password } = req.body;

  return resetForgotPasswordFn(token, password);
};

export const forgotPasswordOtpValidate = async (req) => {
  const { email, otp } = req.body;

  return forgotPasswordOtpValidateFn(email, otp);
};

export const forgotPasswordLinkValidate = async (req) => {
  const { token } = req.body;

  return forgotPasswordLinkValidateFn(token);
};

export const renewTokens = async (req) => {
  const authenticateHeader = req.headers?.authorization;

  return renewTokensFn(authenticateHeader);
};

export const getUserList = async (req) => {
  return getUserListFn();
};

export const logoutFnCall = async (req) => {
  const { userId } = req.body;
  return logout(userId);
};

export const userGroupList = async (req) => {
  const { languageId } = req.params;
  return getUserGroupList(languageId);
};

export const privilegeList = async (req) => {
  const { languageId } = req.params;
  return getPrivilegeList(languageId);
};

export const privilegeByUserGroup = async (req) => {
  const { groupId } = req.params;
  return getPrivilegeByUserGroup(groupId);
};

export const setPrivilegeByUserGroup = async (req) => {
  const { groupId, editedKeys } = req.body;
  let res = await setPrivilegeByUserGroupFun(groupId, editedKeys);
  let cacheUpdate = updateUserPrivileges();
  return res;
};

export const privilegeByUserGroupAndSection = async (req) => {
  const { groupId } = req.params;
  return getPrivilegeByUserGroupAndSection(groupId);
};

export const getUserGroupByIdFnCall = async (req) => {
  const { groupId } = req.params;
  return getUserGroupByIdService(groupId);
};

export const addNewUserGroupFnCall = async (req) => {
  const { isActive, groupData } = req.body;
  return addNewUserGroupService(isActive, groupData);
};

export const editUserGroupFnCall = async (req) => {
  const { groupId, isActive, groupData } = req.body;
  return editUserGroupService(groupId, isActive, groupData);
};

export const getUsersByUserGroupFnCall = async (req) => {
  const { groupId } = req.params;
  return getUsersByUserGroup(groupId);
};

export const setUsersByUserGroupFnCall = async (req) => {
  const { groupId, editedKeys } = req.body;
  let res = await setUsersByUserGroup(groupId, editedKeys);
  return res;
};

export const registerUserFnCall = async (req) => {
  return registerUser(req);
};

export const updateUserCall = async (req) => {
  return updateUser(req);
};

export const getUsersFnCall = async (req) => {
  return getUsers(req);
};

export const assignUserBranchFnCall = async (req) => {
  return assignUserBranches(req);
};

export const updateUserDlaFnCall = async (req) => {
  return updateUserDla(req);
};

export const getUserDlaFnCall = async (req) => {
  return getUserDla(req);
};

export const userBranchesFnCall = async (req) => {
  return getUserBranches(req);
};

export const lockUsersFnCall = async (req) => {
  return lockUser(req);
};

export const getDistinctPrivilegeSubSectionsFn = async (req) => {
  return getDistinctPrivilegeSubSections(req);
};

export const getPrivilegesSectionsMainFn = async (req) => {
  return getPrivilegesSectionsMain(req);
};

export const getPrivilegesSectionsSubFn = async (req) => {
  return getPrivilegesSectionsSub(req);
};

export const updatePrivilegesFn = async (req) => {
  return updatePrivileges(req);
};

export const removePrivilegesFn = async (req) => {
  return removePrivileges(req);
};

export const updatePrivilegeTypeDescFn = async (req) => {
  return updatePrivilegeTypeDesc(req);
};

export const resetUserAccountFn = async (req) => {
  return resetUserAccount(req);
};
