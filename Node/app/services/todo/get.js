// Todo Model
const DAOTodo = require("../../daos/dao_todo");

/* Get functions */

function getTodo(req, res) {
    DAOTodo.findTodo(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
}

function getAllTodos(req, res) {
    DAOTodo.findAllTodos()
        .then(todos => res.json(todos))
        .catch(err => res.send(err));
}

module.exports = {
    getTodo: getTodo,
    getAllTodos: getAllTodos
};
