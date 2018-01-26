const Todo = require('../models/todo');
const check = require('../utilities/check');

class DAOTodo {

    // READ

    findTodo(id) {
        return new Promise((resolve, reject) => {
            Todo.findById(id, (err, result) => {
                if(err) {
                    console.log(`FIND ERROR ${err}`);
                    reject(err);
                }

                resolve({
                    id: result._id,
                    params: {
                        text: result.text,
                    }
                });
            });
        });
    }

    findAllTodos() {
        return new Promise((resolve, reject) => {
            Todo.find((err, results) => {
                if(err) {
                    console.log(`FIND ERROR ${err}`);
                    reject(err);
                }
                let todos = [];
                results.forEach(function(result){
                    let todo = {
                        id: result._id,
                        params: {
                            text: result.text,
                        }
                    };
                    todos.push(todo);
                });
                resolve(todos);
            });
        });
    }

    // CREATE

    insertTodo(params){
        return new Promise((resolve, reject) => {
            const todo = new Todo();
            todo.text = params.text;

            todo.save((err, result) => {
                if(err) {
                    console.log(`FIND ERROR ${err}`);
                    reject(err);
                }

                resolve({
                    id: result._id,
                    params: {
                        text: result.text,
                    }
                });
            });
        });
    }

    // UPDATE

    updateTodo(id, params){
        return new Promise((resolve, reject) => {
            Todo.findById(id, function(err, todo){
                if (err) reject(err);

                todo.text = params.text;

                todo.save((err, result) => {
                    if (err) reject(err);

                    resolve({
                        id: result._id,
                        params: {
                            text: result.text,
                        }
                    });
                });

            });
        });
    }

    // DELETE

    deleteTodo(id){
        return new Promise((resolve, reject) => {
            Todo.remove({ _id: id }, err => {
                if (err) reject(err);

                resolve({message: "Successfully deleted"});
            });
        });
    }

    deleteAllTodos(){
        return new Promise((resolve, reject) => {
            Todo.remove({}, err => {
                if (err) reject(err);

                resolve({message: "Successfully deleted"});
            });
        });
    }
}

module.exports = new DAOTodo();