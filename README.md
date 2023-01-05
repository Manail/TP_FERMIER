# TP_FERMIER
Tp d'IoT


1. Téléchargez le fichier zip des modules de sensors et extraire les fichiers dans un dossier
2. Installez InfluxDB https://dl.influxdata.com/influxdb/releases/influxdb2-2.5.1-windows-amd64.zip
3. Installez https://grafana.com/grafana/download?platform=windows
4. Installez NodeJS https://nodejs.org/en
5. Créez un dossier pour le middleware
6. Depuis ce dossier, ouvrez un cmd et lancez npm init pour créer un package.json
7. Appuyez sur entrée jusqu'a la fin pour prendre les valeurs par défaut
8. Installez Express dans le dossier que vous avez créé npm install express --save
9. Créez un fichier appjs dans ce même dossier et copier le contenu du fichier app.js du github
10. Ajoutez "type" : "module", dans le package.json en dessous de main
11. Installez TypeScript via la commande npm i -g typescript && npm i --save-dev @types/node
12. Configurez TypeScript par defaut via la commande tsc --init
13. Installez les dépendances pour écrire dans influxDB npm install --save @influxdata/influxdb-client
14. Installez les dépendances pour accedez au API d'InfluxDB npm install --save @influxdata/influxdb-client-apis
15. Installer le dépendances dotenv npm install dotenv --save
16. Copier le fichier .env dans le dossier créer à l'étape 4
17. Allez sur le http://localhost:8086 d'influxDB et connectez vous
17. Copiez http://localhost:8086 et coller le en face de INFLUX_URL dans le fichier .env
18. Copiez l'ID de votre organisation dans la barre d'adresse derrière le /orgs/ et collez le en face de INFLUX_ORG dans le fichier .env
19. Créez un nouveau bucket et copier son ID dans le .env en face de INFLUX_BUCKET
20. Créez un nouveau APIToken et copier son ID dans le .env en face de INFLUX_TOKEN

21. Lancez votre middleware avec la commande node app.js
22. Modifiez le fichier humitidy.js et tempetature.js du dossier sensors en changeant le ENDPOINT par, respectivement, 'http://localhost:8000/api/humidity' et 'http://localhost:8000/api/temperature'
