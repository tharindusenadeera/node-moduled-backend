@ECHO OFF
@RD /S /Q "../../modules/document-management"

git clone https://gitlab.com/l1654/rdb/dms.git --branch %1 ../../modules/document-management
cd ../../modules/document-management
call npm install
cd ../../

call npm uninstall document-management
call npm install modules/document-management/

echo ---------------- Document Management module installed successfully ! ----------------
echo.