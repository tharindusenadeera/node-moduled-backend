@ECHO OFF
@RD /S /Q "../../modules/utility"

git clone https://gitlab.com/l1654/rdb/utilitymodule.git --branch %1 ../../modules/utility
cd ../../modules/utility
call npm install
cd ../../

call npm uninstall utility
call npm install modules/utility/

echo ---------------- Utility module installed successfully ! ------------------
echo.