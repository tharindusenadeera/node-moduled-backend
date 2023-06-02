
import { promises as fs } from 'fs';
import { Logger } from 'utility';
import appRoot from "app-root-path";

export const readLogs = async (req) => {
  // let filePath = `webrouter/logger/logs/2023-04-27-16.log`;
  // let contentType = mime.lookup(filePath);
  const fileName = `${appRoot}\\logger\\logs\\2023-04-27-16.log`;
  console.log(fileName);

  const fileData = await fs.readFile(filePath);
  Logger.logError(`Internal Error: SYSTEM LOG: `);
  return {
    status: 1,
    data: {}
  }
};

export const removeLogs = async (req) => {
  return {
    status: 1,
    data: {}
  }
};