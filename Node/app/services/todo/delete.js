// Todo Model
const DAOTodo = require("../../daos/dao_todo");

//Delete the todo item
function deleteTodo(req, res) {
    DAOTodo.deleteTodo(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
};

function deleteAllTodos(req, res) {
    DAOTodo.deleteAllTodos()
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
}

module.exports = {
    deleteTodo: deleteTodo,
    deleteAllTodos: deleteAllTodos
}