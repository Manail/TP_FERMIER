# TP_FERMIER
Tp d'IoT


1. Téléchargez le fichier zip des modules de sensors et extraire les fichiers dans un dossier
2. Installez InfluxDB https://dl.influxdata.com/influxdb/releases/influxdb2-2.5.1-windows-amd64.zip
3. Installez https://grafana.com/grafana/download?platform=windows
4. Créez un dossier pour le middleware
5. Depuis ce dossier, ouvrez un cmd et lancer $ npm init pour créer un package.json
6. Appuyez sur entrée jusqu'a la fin pour prendre les valeurs par défaut
7. Installez Express dans le dossier que vous avez créé $ npm install express --save
8. Copier le fichier app.js dans ce même dossier
9. Ajoutez "type" : "module", dans le package.json en dessous de main
10. Installez TypeScript via la commande npm i -g typescript && npm i --save-dev @types/node
11. Configurez TypeScript par defaut via la commande tsc --init
12. Installez les dépendances pour écrire dans influxDB npm install --save @influxdata/influxdb-client
13. Installez les dépendances pour accedez au API d'InfluxDB npm install --save @influxdata/influxdb-client-apis
14. Copier le fichier .env dans le dossier créer à l'étape 4
15. Allez sur le localhost d'influxDB et connectez vous
16. Copiez l'ID de votre organisation dans la barre d'adresse derrière le /orgs/
17. Créez un nouveau bucket et copier son ID dans le .env en face de INFLUX_BUCKET
18. 
