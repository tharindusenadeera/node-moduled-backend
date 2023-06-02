@ECHO OFF
@RD /S /Q "../../modules/auth"
git clone https://gitlab.com/l1654/rdb/authmodule.git --branch %1 ../../modules/auth
cd ../../modules/auth

call npm install
cd ../../

call npm uninstall auth
call npm install modules/auth/

echo ---------------- Auth module installed successfully ! ----------------