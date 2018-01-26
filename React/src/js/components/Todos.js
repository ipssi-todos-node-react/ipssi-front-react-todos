import React from "react";

import Todo from "./TodoItems/TodoItem";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        };
        TodoActions.init();
    }

    componentWillMount() {
        TodoStore.on("receive_todo", this.getTodos);
        // TodoStore.on("create_todo", this.addTodo);
    }

    componentWillUnmount() {
        TodoStore.removeListener("receive_todo", this.getTodos);
        // TodoStore.removeListener("create_todo", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll(),
        });
    }

    // addTodo(todo){
    //     ul.add(<Todo key={todo.id} {...todo}/>);
    //     console.log(todo);
    // }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}

