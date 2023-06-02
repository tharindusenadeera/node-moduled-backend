@ECHO OFF
@RD /S /Q "../../modules/communication-service"

git clone https://gitlab.com/l1654/rdb/communicationservice.git --branch %1 ../../modules/communication-service
cd ../../modules/communication-service
call npm install
cd ../../

call npm uninstall communication-service
call npm install modules/communication-service/

echo ---------------- Communication Service module installed successfully ! ----------------
echo.