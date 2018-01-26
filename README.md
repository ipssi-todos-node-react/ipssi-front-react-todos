# ipssi-todos

Développement d’une todolist en Node.js et React

### Prerequis
Avoir Docker d’installé sur la machine

## Mise en route de la base de donnée mongo via un container Docker 

```
$ docker run -d -p 27017:27017 --name mongo_container mongo
```

## Mise en route du backend Node.Js

```
$ git clone https://github.com/ipssi-todos/ipssi-todos
$ cd ipssi-todos/Node
$ npm install
$ npm run prod
```

## Mise en route du frontend React
Ouvrir un autre onglet du terminal
```
$ cd ipssi-todos/React
$ npm install
$ npm run dev
```
Ouvrir votre navigateur et aller à l’adresse : http://localhost:8080

## Annexe
Vous pouvez afficher les donnés (en format json) de la base avec l’adresse : localhost:8080/api/v1/todos
