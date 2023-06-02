export const existProgramHandler = (logger, message) => {
  logger.logError(`PROCESS EXIT: ${message}`);
  process.exit(1);
};
