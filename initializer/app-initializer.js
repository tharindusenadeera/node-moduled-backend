import * as LOSService from 'los-service';
import * as Auth from 'auth';
import * as DecisionEngine from 'decision-engine';
import * as WorkflowEngine from 'workflow-engine';
import * as Utility from 'utility';
import * as CommunicationService from 'communication-service';
import * as DocumentManagement from 'document-management';
import * as BankServiceInvoker from 'bank-service-invoker';
import { moduleInitializer } from './module-initializer.js';

export const appInitializer = async () => {
  const sharedConfigs = Utility.SharedConfigs.modules;

  const coreModules = [{ moduleKey: sharedConfigs.utility, moduleRef: Utility }];

  const specificModules = [
    { moduleKey: sharedConfigs.los, moduleRef: LOSService },
    { moduleKey: sharedConfigs.auth, moduleRef: Auth },
    { moduleKey: sharedConfigs.decisionEngine, moduleRef: DecisionEngine },
    { moduleKey: sharedConfigs.workflowEngine, moduleRef: WorkflowEngine },
    {
      moduleKey: sharedConfigs.communicationService,
      moduleRef: CommunicationService,
    },
    {
      moduleKey: sharedConfigs.documentManagement,
      moduleRef: DocumentManagement,
    },
    {
      moduleKey: sharedConfigs.bankServiceInvoker,
      moduleRef: BankServiceInvoker,
    },
  ];

  /**
   * Setting the dependent modules reference in utility module
   * So that, modules can access other dependent modules, through utility
   */
  specificModules.forEach((module) => {
    Utility.Modules.setModule(module.moduleKey, module.moduleRef);
  });

  /**
   * Passing primary modules first, secondary module second and utility module as third
   * utility module is shared across all modules
   */
  await moduleInitializer(coreModules, specificModules, Utility)
    .then(() => {
      console.log('modules initialized successfully');
    })
    .catch((e) => {
      console.log(e);
    });
};
