# Suivi de la température

On vous demande de créer une application qui vous permet de faire le suivi de la température. Vous allez devoir:
- obtenir une liste de températures depuis l'API Yahoo Weather,
- permettre à l'usager de saisir de nouvelles températures,
- Afficher la médiane, la moyenne et les deux extrêmes de températures depuis la liste de températures obtenues et saisies.

Voyez l'API Yahoo comme une source de donnée "back-end". En d'autres mots, la liste de saisie de températures et celle obtenue chez Yahoo sont la même liste (voir détail sur API Yahoo plus bas).

Passez entre 2 à 4h sur cet exercice.

Vous trouverez un fichier jpg de la maquette que vous devez respecter avec le logo en format svg à utiliser.

## User stories

- En tant qu'utilisateur, je veux voir une liste de température en degrés Celsius (source: API Yahoo).
- En tant qu'utilisateur, je veux pouvoir ajouter une température à cette liste (non persistant au rafraichissement de la page).
- En tant qu'utilisateur, je veux voir s'afficher la médiane de température à chaque fois que la liste des températures change.
- En tant qu'utilisateur, je veux voir s'afficher la moyenne de température à chaque fois que la liste des températures change.
- En tant qu'utilisateur, je veux voir s'afficher les deux extrêmes de température à chaque fois que la liste des températures change.

## Règles/contraintes

- Utiliser Javascript et la librairie jQuery uniquement.
- BONUS: Créer votre CSS en utilisant SASS

## Info technique pour l'API de Yahoo

L'URL pour obtenir les précisions météo est la suivante. Vous allez devoir faire usage de la méthode JSONP.

http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)&format=json&callback=JSON_CALLBACK

## Ce que vous devez démontrer:

Dans votre code, vous serez jugé sur:

- Modularisation du code JavaScript
- La réusabilité, portabilité, et modularité du CSS (qui démontre idéalement une abstraction orientée-objet)
- Un oeil pour le détail visuel

## Comment soumettre le travail

Use fois votre travail complété, créer un repo dans Github et nous envoyer les accès pour pouvoir y accéder et le télécharger.

N'oubliez pas d'inclure les instructions d'installation.

## Question

1. Si vous aviez eu plus de temps, comment auriez-vous amélioré la solution?
2. Si vous aviez le choix, quel serait votre environnement de développement idéal? (IDE, stack, technologie, etc.)
