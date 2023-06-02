#bash
echo ------------ Installed started ---------------

pwd 

rm -rf modules
mkdir modules
cd modules

git clone https://gitlab.com/l1654/rdb/authmodule.git --branch $1 auth
cd auth
npm install --only=prod
cd ..
echo ---------------- Auth module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/decisionengine.git --branch $1 decision-engine
cd decision-engine
npm install --only=prod
cd ..
echo ---------------- Decision engine module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/workflowengine.git --branch $1 workflow-engine
cd workflow-engine
npm install --only=prod
cd ..
echo ---------------- Workflow engine module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/utilitymodule.git --branch $1 utility
cd utility
npm install --only=prod
cd ..
echo ---------------- Utility module installed successfully ! ------------------

git clone https://gitlab.com/l1654/rdb/bankserviceinvoker.git --branch $1 bank-service-invoker
cd bank-service-invoker
npm install --only=prod
cd ..
echo ---------------- Bank Service Invoker module installed successfully ! ------------------

git clone https://gitlab.com/l1654/rdb/losservice.git --branch $1 los-service
cd los-service
npm install --only=prod
cd ..
echo ---------------- LOS Service module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/communicationservice.git --branch $1 communication-service
cd communication-service
npm install --only=prod
cd ..
echo ---------------- Communication Service module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/dms.git --branch $1 document-management
cd document-management
npm install --only=prod
cd ..
echo ---------------- Document Management module installed successfully ! ----------------

git clone https://gitlab.com/l1654/rdb/thirdpartyservice.git --branch $1 third-party-service
cd third-party-service
npm install --only=prod
cd ..
echo ---------------- Third Party Service module installed successfully ! ----------------

cd ..
npm install --only=prod

echo ------------ Modules Installed completed successfully ! ---------------
