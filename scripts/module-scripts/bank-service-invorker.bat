@ECHO OFF
@RD /S /Q "../../modules/bank-service-invoker"

git clone https://gitlab.com/l1654/rdb/bankserviceinvoker.git --branch %1 ../../modules/bank-service-invoker
cd ../../modules/bank-service-invoker
call npm install
cd ../../

call npm uninstall bank-service-invoker
call npm install modules/bank-service-invoker/

echo ---------------- Bank service invoker module installed successfully ! ----------------
echo.