@ECHO OFF
@RD /S /Q "../../modules/decision-engine"

git clone https://gitlab.com/l1654/rdb/decisionengine.git --branch %1 ../../modules/decision-engine
cd ../../modules/decision-engine
call npm install
cd ../../

call npm uninstall decision-engine
call npm install modules/decision-engine/

echo ---------------- Decision engine module installed successfully ! ----------------
echo.