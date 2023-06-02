@ECHO OFF
IF /i %1 =="auth" goto auth
IF /i %1 =="utility" goto utility
IF /i %1 =="decision-engine" goto de
IF /i %1 =="workflow-engine" goto wf
IF /i %1 =="los-service" goto los
IF /i %1 =="webrouter" goto webrouter
IF /i %1 =="document-management" goto dm
IF /i %1 =="third-party-service" goto tps
IF /i %1 =="bank-service-invorker" goto bsi
IF /i %1 =="communication" goto cm

echo %1 Module Not found !
goto commonexit

:auth
call auth-module-install.bat %2
goto commonexit

:utility
call utility-module-install.bat %2
goto commonexit

:los
call auth-module-install.bat %2
goto commonexit

:de
call decision-engine-module-install.bat %2
goto commonexit

:wf
call workflow-engine-module-install.bat %2
goto commonexit

:webrouter
call webrouter-module-install.bat %2
goto commonexit

:dm
call document-management-module-install.bat %2
goto commonexit

:cm
call communication-module-install.bat %2
goto commonexit

:tps
call third-party-services-module-install.bat %2
goto commonexit

:bsi
call bank-service-invorker.bat %2
goto commonexit

:commonexit
pause
