# Informazioni 
 
per collegare un repo a GitHub (supponiamo che la cartella da portare su github si chiami jobFolder):

accertati di aver creato il branch main.

1) git remote add <cartella> <link>

dove 
<cartella> e' il nome della cartella che si vuole portare . Quesi sempre si usa "origin" ma il nome lo decido io
<link> e' il link che ci da GitHub quando si crea un nuovo repo in app

quindi diventa:
git remote add jobFolder https://github.com/bennyHobbySpace/codeWork.git

2) sicuramente poi si deve dare un link a cui collegarsi con:
 
git remote set-url <cartella> <link ma con utenza github>

quindi diventa:

git remote set-url codeFolder https://bennyHobbySpace@github.com/bennyHobbySpace/codeWork.git

3) fare la prima push per portare i contenuti dalla cartella a GitHub:

git push <cartella> <branch>

che diventa:

git push codeFolder main

fatto!


