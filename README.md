# projet-ipssi-todos

Développement d’une todolist en Node.js et React

### Prerequis
Docker
Node.Js

## Mise en route de la base de donnée mongo via un container Docker 
Dans le terminal
```
$ docker run -d -p 27017:27017 --name mongo_container mongo
```

## Mise en route du backend Node.Js
Dans un autre onglet du terminal
```
$ git clone https://github.com/ipssi-todos/ipssi-todos
$ cd ipssi-todos/Node
$ npm install
$ npm run start
```

## Mise en route du frontend React
Dans un autre onglet du terminal
```
$ cd ipssi-todos/React
$ npm install
$ npm run dev
```
Ouvrir votre navigateur et aller à l’adresse : http://localhost:8080

## Tests
Dans un autre onglet du terminal
```
$ cd ipssi-todos/Node
$ npm run test
```

## Annexe
Vous pouvez afficher les donnés (en format json) de la base avec l’adresse : http://localhost:8081/api/v1/todos

## Equipe

* **Ghislain Dugat** - *Lead dev*
* **Renaud Jumbou** - *React*
* **Nicholas Liynage** - *Node*
* **Vincent Paris** - *Tests unitaires*

