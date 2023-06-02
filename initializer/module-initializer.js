export const moduleInitializer = async (coreModules, specificModules, utilityModule) => {
  /**
   * Execution order
   * 1). Primary Modules -> preInitializers
   * 2). Primary Modules -> postInitializers
   * 3). Secondary Modules -> pretInitializers
   * 4). Secondary Modules -> postInitializers
   */

  if (coreModules && coreModules.length > 0) {
    /**
     * wait until all primary modules pre initialization finished in all modules for post initialize
     **/
    await preInitialize(coreModules);
    await postInitialize(coreModules);
  }

  if (specificModules && specificModules.length > 0) {
    /**
     * wait until all pre initialize finished in all modules for postInitialize
     * passing utility module as DI, to acquire general/shared data
     **/
    await preInitialize(specificModules, utilityModule);
    await postInitialize(specificModules);
  }
};

const preInitialize = async (modules, utilityModule) => {
  const preInitializePromiseArray = modules.map(async (module) => {
    await module.moduleRef.preInitializeModule(utilityModule);
  });
  await Promise.all(preInitializePromiseArray);
};

const postInitialize = async (modules) => {
  const postInitializePromiseArray = modules.map(async (module) => {
    await module.moduleRef.postInitializeModule();
  });
  await Promise.all(postInitializePromiseArray);
};
