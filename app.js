import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './api/auth-routes.js';
import decisionEngineRoutes from './api/decision-engine-routes.js';
import workflowEngineRoutes from './api/workflow-engine-routes.js';
import losRoutes from './api/los-routes.js';
import generalRoutes from './api/api.js';
import { appInitializer } from './initializer/app-initializer.js';
import bodyParser from 'body-parser';
import documentManagementRoutes from './api/document-management-routes.js';
import documentUploadRoutes from './api/document-upload-routes.js';
import communicationServiceRoutes from './api/communication-service-routes.js';
import bankService from './api/bank-service-invoker.js';
import system from './api/system.js';

const app = express();
const app2 = express();
dotenv.config();

/**
 * --------------- MIDDLEWARE -----------------------------------
 */
app2.use(bodyParser.raw({ type: 'application/octet-stream', limit: '100mb' }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//Enable All CORS Requests
app.use(cors());
app2.use(cors());

/**
 * ----------------- ROUTES -------------------------------------
 */

// app.use('saveApplicationData')
app.use('/auth', authRoutes);
app.use('/decision-engine', decisionEngineRoutes);
app.use('/los', losRoutes);
app.use('/workflow-engine', workflowEngineRoutes);
app.use('/document-management', documentManagementRoutes);
app.use('/communication-service', communicationServiceRoutes);
app.use('/bank-service', bankService);
app2.use('/document-upload', documentUploadRoutes);
app.use('/system', system);
app.get('/*', generalRoutes);

/**
 * ----------------- SERVER -------------------------------------
 */
const initializeServer = () => {
  const PORT = process.env.NORMAL_PORT || 8080;
  const PORT2 = process.env.UPLOAD_PORT || 4040;

  app.listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}`);
  });
  app2.listen(PORT2, () => {
    console.log(`Server has started on http://localhost:${PORT2}`);
  });
};

/**
 * ----------------- MODULE INITIALIZER -------------------------------------
 */
const initializeModules = async () => {
  await appInitializer();
};

(async () => {
  await initializeModules();
  initializeServer();
})().catch((err) => {
  console.error('Error occurred during initializing the modules');
});
