import express from 'express';

import routesHandler from './handler/api-handler.js';

import {
  addNewEmailTemplateFnCall,
  editEmailTemplateFnCall,
  getEmailTemplateListFnCall,
  getEmailTemplateByIdFnCall,
  getEmailTemplateDefByIdLanguageFnCall,
  getEmailDefLanguagesByIdFnCall,
  addNewEmailDefinitionFnCall,
  editEmailDefinitionFnCall,
  getTemplateFieldListFnCall,
  addNewSmsTemplateFnCall,
  editSmsTemplateFnCall,
  getSmsTemplateListFnCall,
  getSmsTemplateByIdFnCall,
  getSmsDefLanguagesByIdFnCall,
  getSmsTemplateDefByIdLanguageFnCall,
  addNewSmsDefinitionFnCall,
  editSmsDefinitionFnCall,
} from '../services/communication-service/communication-service.js';

const router = express.Router();

// Email Ends
router.post('/add-new-email-template', routesHandler(addNewEmailTemplateFnCall));
router.patch('/edit-email-template', routesHandler(editEmailTemplateFnCall));
router.get('/email-template-list', routesHandler(getEmailTemplateListFnCall));
router.get('/email-template-by-id', routesHandler(getEmailTemplateByIdFnCall));
router.get('/available-email-definition-lan-by-template-id', routesHandler(getEmailDefLanguagesByIdFnCall));
router.get('/email-definition-by-template-id-language', routesHandler(getEmailTemplateDefByIdLanguageFnCall));
router.post('/add-new-email-definition', routesHandler(addNewEmailDefinitionFnCall));
router.patch('/edit-email-definition', routesHandler(editEmailDefinitionFnCall));
router.get('/template-field-list', routesHandler(getTemplateFieldListFnCall));

router.post('/add-new-sms-template', routesHandler(addNewSmsTemplateFnCall));
router.patch('/edit-sms-template', routesHandler(editSmsTemplateFnCall));
router.get('/sms-template-list', routesHandler(getSmsTemplateListFnCall));
router.get('/sms-template-by-id', routesHandler(getSmsTemplateByIdFnCall));
router.get('/available-sms-definition-lan-by-template-id', routesHandler(getSmsDefLanguagesByIdFnCall));
router.get('/sms-definition-by-template-id-language', routesHandler(getSmsTemplateDefByIdLanguageFnCall));
router.post('/add-new-sms-definition', routesHandler(addNewSmsDefinitionFnCall));
router.patch('/edit-sms-definition', routesHandler(editSmsDefinitionFnCall));

export default router;
