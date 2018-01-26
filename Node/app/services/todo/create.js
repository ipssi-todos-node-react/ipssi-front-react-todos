const DAOTodo = require("../../daos/dao_todo");
const check = require('../../utilities/check.js');

/* IMPORTS */

function createTodo(req, res) {
    if (!check.checkTodoProperties(req.body))
        return res.sendStatus(400);
    DAOTodo.insertTodo(req.body)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
}

module.exports = {
    createTodo: createTodo
};
