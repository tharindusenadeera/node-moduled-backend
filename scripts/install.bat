@ECHO OFF
@RD /S /Q "..\modules"
echo ------------ Installed started ---------------

git clone https://gitlab.com/l1654/rdb/authmodule.git --branch %1 ../modules/auth
cd ../modules/auth
call npm install
cd ../../scripts

echo ---------------- Auth module installed successfully ! ----------------
echo.

git clone https://gitlab.com/l1654/rdb/decisionengine.git --branch %1 ../modules/decision-engine
cd ../modules/decision-engine
call npm install
cd ../../scripts

echo ---------------- Decision engine module installed successfully ! ----------------
echo.

git clone https://gitlab.com/l1654/rdb/workflowengine.git --branch %1 ../modules/workflow-engine
cd ../modules/workflow-engine
call npm install
cd ../../scripts

echo ---------------- Workflow engine module installed successfully ! ----------------
echo.

git clone https://gitlab.com/l1654/rdb/losservice.git --branch %1 ../modules/los-service
cd ../modules/los-service
call npm install
cd ../../scripts

echo ---------------- LOS Service module installed successfully ! ----------------
echo.

git clone https://gitlab.com/l1654/rdb/utilitymodule.git --branch %1 ../modules/utility
cd ../modules/utility
call npm install
cd ../../scripts

echo ---------------- Utility module installed successfully ! ------------------
echo.

git clone https://gitlab.com/l1654/rdb/bankserviceinvoker.git --branch %1 ../modules/bank-service-invoker
cd ../modules/bank-service-invoker
call npm install
cd ../../scripts

echo ---------------- Bank Service Invorker module installed successfully ! ------------------
echo.

git clone https://gitlab.com/l1654/rdb/communicationservice.git --branch %1 ../modules/communication-service
cd ../modules/communication-service
call npm install
cd ../../scripts

echo ---------------- Communication service module installed successfully ! ------------------
echo.

git clone https://gitlab.com/l1654/rdb/dms.git --branch %1 ../modules/document-management
cd ../modules/document-management
call npm install
cd ../../scripts
echo ---------------- Document Management module installed successfully ! ------------------
echo.

git clone https://gitlab.com/l1654/rdb/bankserviceinvoker.git --branch %1 ../modules/bank-service-invoker
cd ../modules/bank-service-invoker
call npm install
cd ../../scripts
echo ---------------- Bank Service Invoker module installed successfully ! ------------------
echo.

:: ---------------------------------
:: new module add x
::
:: it clone https://gitlab.com/l1654/rdb/x.git --branch %1 ../modules/x
::cd ../modules/x
::call npm install
::cd ../../scripts
::echo ---------------- x module installed successfully ! ------------------
::echo.
:: ---------------------------------

git clone https://gitlab.com/l1654/rdb/thirdpartyservice.git --branch %1 ../modules/third-party-service
cd ../modules/third-party-service
call npm install
echo ---------------- Third Party Service module installed successfully ! ------------------
echo.

cd ../../
call npm install
:: Below is done for development set up only
:: Beacuse, for dev environment you need to refer for cloned modules rather git resposity
:: So here again removed modules and agin added from file paths

call npm uninstall los-service
call npm uninstall auth
call npm uninstall decision-engine
call npm uninstall workflow-engine
call npm uninstall utility
call npm uninstall communication-service
call npm uninstall document-management
call npm uninstall third-party-service
call npm uninstall bank-service-invoker

call npm install modules/los-service/
call npm install modules/auth/
call npm install modules/decision-engine/
call npm install modules/workflow-engine/
call npm install modules/utility/
call npm install modules/communication-service/
call npm install modules/document-management/
call npm install modules/third-party-service/
call npm install modules/bank-service-invoker/

echo ------------ Installed completed successfully ! ---------------