import express from 'express';

import routesHandler from './handler/api-handler.js';

import {
  signIn,
  changePassword,
  forgotPassword,
  resetForgotPassword,
  forgotPasswordOtpValidate,
  forgotPasswordLinkValidate,
  renewTokens,
  getUserList,
  logoutFnCall,
  userGroupList,
  privilegeList,
  privilegeByUserGroup,
  setPrivilegeByUserGroup,
  privilegeByUserGroupAndSection,
  getUserGroupByIdFnCall,
  addNewUserGroupFnCall,
  editUserGroupFnCall,
  getUsersByUserGroupFnCall,
  setUsersByUserGroupFnCall,
  registerUserFnCall,
  getUsersFnCall,
  assignUserBranchFnCall,
  updateUserDlaFnCall,
  userBranchesFnCall,
  lockUsersFnCall,
  updateUserCall,
  getUserDlaFnCall,
  getDistinctPrivilegeSubSectionsFn,
  getPrivilegesSectionsMainFn,
  getPrivilegesSectionsSubFn,
  updatePrivilegesFn,
  removePrivilegesFn,
  updatePrivilegeTypeDescFn
} from '../services/auth/auth.js';
import { getUserAllocatedGroups, updateUserAllocatedGroups, updateUserDetailsExtended, updateUserGroupConfig, resetUserAccountFn } from 'auth/api/api.js';

const router = express.Router();

router.post('/sign-in', routesHandler(signIn, false));
router.post('/change-password', routesHandler(changePassword));
router.post('/forgot-password', routesHandler(forgotPassword, false));
router.post('/forgot-password-otp-validate', routesHandler(forgotPasswordOtpValidate, false));
router.post('/forgot-password-link-validate', routesHandler(forgotPasswordLinkValidate, false));
router.post('/reset-forgot-password', routesHandler(resetForgotPassword, false));
router.post('/renew-tokens', routesHandler(renewTokens));
router.post('/user-list', routesHandler(getUserList));

router.post('/user', routesHandler(registerUserFnCall));
router.put('/user', routesHandler(updateUserCall));
router.put('/user-update', routesHandler(updateUserDetailsExtended));
router.post('/assign-branches', routesHandler(assignUserBranchFnCall));
router.post('/user-dla', routesHandler(updateUserDlaFnCall));
router.get('/user-dla', routesHandler(getUserDlaFnCall));
router.post('/lock-user', routesHandler(lockUsersFnCall));
router.post('/accounts/reset', routesHandler(resetUserAccountFn));
router.get('/users', routesHandler(getUsersFnCall));
router.get('/user-branches', routesHandler(userBranchesFnCall));

router.post('/log-out', routesHandler(logoutFnCall, true));

router.get('/user-group-list', routesHandler(userGroupList));
router.get('/privilege-list', routesHandler(privilegeList));
router.put('/privileges', routesHandler(updatePrivilegesFn));
router.delete('/privileges', routesHandler(removePrivilegesFn));
router.get('/privileges/sections', routesHandler(getDistinctPrivilegeSubSectionsFn));
router.post('/privileges/type', routesHandler(updatePrivilegeTypeDescFn));
router.get('/privileges/sections/main', routesHandler(getPrivilegesSectionsMainFn));
router.get('/privileges/sections/sub', routesHandler(getPrivilegesSectionsSubFn));
router.get('/privilege-by-user-group', routesHandler(privilegeByUserGroup));
router.patch('/privilege-by-user-group', routesHandler(setPrivilegeByUserGroup));
router.get('/privilege-by-user-group-section', routesHandler(privilegeByUserGroupAndSection));

router.get('/user-group-by-id', routesHandler(getUserGroupByIdFnCall));
router.post('/add-new-user-group', routesHandler(addNewUserGroupFnCall));
router.patch('/edit-user-group', routesHandler(editUserGroupFnCall));
router.get('/users-by-user-group', routesHandler(getUsersByUserGroupFnCall));
router.patch('/users-by-user-group', routesHandler(setUsersByUserGroupFnCall));
router.get('/users/:id/privileges', routesHandler(getUserAllocatedGroups));
router.put('/users/:id/privileges', routesHandler(updateUserAllocatedGroups));
router.put('/user-group-config', routesHandler(updateUserGroupConfig))

export default router;
