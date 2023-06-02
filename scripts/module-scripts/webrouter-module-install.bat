@ECHO OFF
cd ../../
call npm install

:: Below is done for development set up only
:: Beacuse, for dev environment you need to refer for cloned modules rather git resposity
:: So here again removed modules and agin added from file paths

call npm uninstall los-service
call npm uninstall auth
call npm uninstall decision-engine
call npm uninstall utility

call npm install modules/los-service/
call npm install modules/auth/
call npm install modules/decision-engine/
call npm install modules/utility/

echo ---------------- Web router installed sucessfully ----------------
echo.