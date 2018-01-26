import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

function findTodo(todo) {
    return todo.id == this.id;
}
function findNotTodo(todo) {
    return todo.id != this.id;
}

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        break;
      }
      case "CREATE_TODO": {
        this.todos.push(action.todo);
        break;
      }
      case "UPDATE_TODO": {
        this.todos[this.todos.findIndex(findTodo, {id: action.todo.id})] = action.todo;
        alert('The todo item has been saved');
        break;
      }
      case "DELETE_TODO": {
        this.todos = this.todos.filter(findNotTodo, {id: action.id_todo});
        break;
      }
    }
    this.emit("receive_todo");
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
