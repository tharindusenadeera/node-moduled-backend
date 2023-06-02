import {
  addNewEmailTemplateService,
  editEmailTemplateService,
  getEmailTemplateListService,
  getEmailTemplateByIdService,
  getEmailTemplateDefByIdLanguageService,
  getEmailDefLanguagesByIdService,
  addNewEmailDefinitionService,
  editEmailDefinitionService,
  getTemplateFieldListService,
  addNewSmsTemplateService,
  editSmsTemplateService,
  getSmsTemplateListService,
  getSmsTemplateByIdService,
  getSmsDefLanguagesByIdService,
  getSmsTemplateDefByIdLanguageService,
  addNewSmsDefinitionService,
  editSmsDefinitionService,
} from 'communication-service';

export const editEmailTemplateFnCall = async (req) => {
  const { templateId, isActive, templateData } = req.body;
  return editEmailTemplateService(templateId, isActive, templateData);
};

export const addNewEmailTemplateFnCall = async (req) => {
  const { isActive, templateData } = req.body;
  return addNewEmailTemplateService(isActive, templateData);
};

export const getEmailTemplateListFnCall = async (req) => {
  const { languageId } = req.params;
  return getEmailTemplateListService(languageId);
};

export const getEmailTemplateByIdFnCall = async (req) => {
  const { templateId } = req.params;
  return getEmailTemplateByIdService(templateId);
};

export const getEmailTemplateDefByIdLanguageFnCall = async (req) => {
  const { templateId, languageId } = req.params;
  return getEmailTemplateDefByIdLanguageService(templateId, languageId);
};

export const getEmailDefLanguagesByIdFnCall = async (req) => {
  const { templateId } = req.params;
  return getEmailDefLanguagesByIdService(templateId);
};

export const addNewEmailDefinitionFnCall = async (req) => {
  const { templateId, languageId } = req.body;
  return addNewEmailDefinitionService(templateId, languageId);
};

export const editEmailDefinitionFnCall = async (req) => {
  const { templateId, languageId, meta, htmlBody, subject } = req.body;
  return editEmailDefinitionService(templateId, languageId, meta, htmlBody, subject);
};

export const getTemplateFieldListFnCall = async (req) => {
  const { languageId } = req.params;
  return getTemplateFieldListService(languageId);
};

// Sms
export const addNewSmsTemplateFnCall = async (req) => {
  const { isActive, templateData } = req.body;
  return addNewSmsTemplateService(isActive, templateData);
};

export const editSmsTemplateFnCall = async (req) => {
  const { templateId, isActive, templateData } = req.body;
  return editSmsTemplateService(templateId, isActive, templateData);
};

export const getSmsTemplateListFnCall = async (req) => {
  const { languageId } = req.params;
  return getSmsTemplateListService(languageId);
};

export const getSmsTemplateByIdFnCall = async (req) => {
  const { templateId } = req.params;
  return getSmsTemplateByIdService(templateId);
};

export const getSmsDefLanguagesByIdFnCall = async (req) => {
  const { templateId } = req.params;
  return getSmsDefLanguagesByIdService(templateId);
};

export const getSmsTemplateDefByIdLanguageFnCall = async (req) => {
  const { templateId, languageId } = req.params;
  return getSmsTemplateDefByIdLanguageService(templateId, languageId);
};

export const addNewSmsDefinitionFnCall = async (req) => {
  const { templateId, languageId } = req.body;
  return addNewSmsDefinitionService(templateId, languageId);
};

export const editSmsDefinitionFnCall = async (req) => {
  const { templateId, languageId, definition } = req.body;
  return editSmsDefinitionService(templateId, languageId, definition);
};
