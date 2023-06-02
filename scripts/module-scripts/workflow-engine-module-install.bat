@ECHO OFF
@RD /S /Q "../../modules/workflow-engine"

git clone https://gitlab.com/l1654/rdb/workflowengine.git --branch %1 ../../modules/workflow-engine
cd ../../modules/workflow-engine
call npm install
cd ../../

call npm uninstall workflow-engine
call npm install modules/workflow-engine/

echo ---------------- Workflow engine module installed successfully ! ----------------
echo.