@ECHO OFF
@RD /S /Q "../../modules/third-party-service"

git clone https://gitlab.com/l1654/rdb/thirdpartyservice.git --branch %1 ../../modules/third-party-service
cd ../../modules/third-party-service
call npm install
cd ../../

call npm uninstall third-party-service
call npm install modules/third-party-service/

echo ---------------- Third party module installed successfully ! ----------------
echo.