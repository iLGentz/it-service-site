@echo off

cd "C:\Users\riccardo.gentile\Desktop\mio\Sito"

set /p msg="Enter commit [n - message]: "

npm run build && git add . && git commit -m "fix n_%msg%" && git push origin main && npm run deploy && start https://ilgentz.github.io/it-service-site/
