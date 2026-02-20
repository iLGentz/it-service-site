cd "C:\Users\riccardo.gentile\Desktop\mio\Sito"

set /p msg="Enter commit [n - message]: "

git add .

git commit -m "fix n_%msg%"

git push origin main

npm run deploy
