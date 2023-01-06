# TP_FERMIER
Tp d'IoT


1. Téléchargez le fichier zip des modules de sensors et extraire les fichiers dans un dossier

2. Installez InfluxDB https://dl.influxdata.com/influxdb/releases/influxdb2-2.5.1-windows-amd64.zip

3. Installez https://grafana.com/grafana/download?platform=windows

4. Installez NodeJS https://nodejs.org/en

5. Créez un dossier pour le middleware

6. Depuis ce dossier, ouvrez un cmd et lancez le code suivant pour créer un package.json
 ```npm init```

7. Appuyez sur entrée jusqu'a la fin pour prendre les valeurs par défaut

8. Installez Express dans le dossier que vous avez créé ``npm install express --save``

9. Créez un fichier app.js dans ce même dossier et copier le contenu du fichier app.js du github

10. Ajoutez ``type" : "module"`` dans le package.json en dessous de main

11. Installez TypeScript via la commande ``npm i -g typescript && npm i --save-dev @types/node``

12. Configurez TypeScript par defaut via la commande ``tsc --init``

13. Installez les dépendances pour écrire dans influxDB ``npm install --save @influxdata/influxdb-client``

14. Installez les dépendances pour accedez au API d'InfluxDB ``npm install --save @influxdata/influxdb-client-apis``

15. Installer le dépendances dotenv ``npm install dotenv --save``

16. Copier le fichier .env dans le dossier créer à l'étape 4

17. Allez sur le http://localhost:8086/ d'influxDB et connectez vous

18. Copiez http://localhost:8086/ et coller le en face de INFLUX_URL dans le fichier .env

19. Copiez l'ID de votre organisation dans la barre d'adresse derrière le ``/orgs/`` et collez le en face de INFLUX_ORG dans le fichier .env

20. Créez un nouveau bucket et copier son ID dans le .env en face de INFLUX_BUCKET

21. Créez un nouveau APIToken -> Costum et copier son ID dans le .env en face de INFLUX_TOKEN

22. Lancez votre middleware avec la commande ``node app.js``

23. Lancez les sensors avec une nouvelle invit de commande dans le dossier sensors\tp-iot-main ``npm i puis npm run sensors``

24. Retourner sur InfluxDB et ouvrez la page data explorer

25. Selectionnez votre bucket et vérifiez que les measurements humidity et temperature sont bien présents

26. Ouvrez le http://localhost:3000/

27. Identifiez vous avez le username <admin> et password <admin>

28. Cliquez sur ``Add your first data source``

29. Selectionnez InfluxDB

30. Choissisez le nom que vous voulez

31. Query language = Flux

32. URL = http://localhost:8086/

33. Désactiver le ``basic auth``

34. Retournez dans le fichier .env et copier les différentes information necessaire pour le setting 

35. Cliquez sur _save & test_

36. Cliquez sur _New Dashboard_

37. Cliquez sur _Add a new panel_

38. Choississez la data source sur la source que vous venez de créer

39. En bas de la page cliquer sur _Sample Query_ et choisir _simple query_

40. Remplacez  _db/rp_ par le nom de votre bucket

41. Remplacez _v.timeRangeStart , stop:v.timeRangeStop_ par _-1d_ ce qui vous permettra d'avoir un retour sur un jour de votre serre

42. Remplacer _exemple-measurement_ par _humidity_

43. Remplacer _exemple-filed_ par _humidity_

44. CTRL + S

45. Changez le titre du diagramme par _Humidité_ à droite de la page

46. Désactiver la legende

47. Choississez la _line intrepretation_ de votre choix

48. Modifier le _show treshholds_ en _As filled regions and lines tresholds_

49. Modifiez _Unit_ et choississez _Misc_ puis _Humidity(%H)_

50. Cliquez sur _Save_ et sauvegarder sous le nom _Constante de la serre et sauvegarder_

51. Cliquez sur _add panel_ puis _add a new panel_ et recommencez l'étape 38 à 41

52. Remplacer _exemple-measurement_ par _temperature_

53. Remplacer _exemple-filed_ par _Temperature_

54. CTRL + S

55. Changez le titre du diagramme par _Température_ à droite de la page

56. Modifiez _Unit_ en _temperature(°C)_

57. Modifier la valeur du treshold par _25_

58. Sauvegardez

59. Cliquez sur _Apply_

60. Vous pouvez editez votre graphique en cliquant le nom du nom du graphique puis sur _edit_

61. Vous pouvez changer la durée du digramme en haut a droite (Last 6hours par defaut), nous recommendons _last 5 min_.

62. Vous pouvez également paramétrer des alerte en editant votre diagramme dans la rubrique _alerte_ sous le diagramme
