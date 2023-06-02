@ECHO OFF
@RD /S /Q "../../modules/los-service"

git clone https://gitlab.com/l1654/rdb/losservice.git --branch %1 ../../modules/los-service
cd ../../modules/los-service
call npm install
cd ../../

call npm uninstall los-service
call npm install modules/los-service/

echo ---------------- LOS Service module installed successfully ! ----------------
echo.