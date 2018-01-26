// Todo Model
const DAOTodo = require("../../daos/dao_todo");
const check = require('../../utilities/check.js');

//Update the todo item
function updateTodo(req, res) {
    if (!check.checkTodoProperties(req.body))
        return res.sendStatus(400);
    DAOTodo.updateTodo(req.params.id, req.body)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
};

module.exports = {
    updateTodo: updateTodo
}