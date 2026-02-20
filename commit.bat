cd "C:\Users\riccardo.gentile\Desktop\mio\Sito"

set /p msg="Enter commit [n - message]: "
set /p origin="Enter origin branch: "

git add .

git commit -m "fix n %msg%"

rem git push

rem npm run deploy
