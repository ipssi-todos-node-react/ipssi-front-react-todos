import React from "react";
import * as TodoActions from "../../actions/TodoActions";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let params = {
            text: this.state.text
        };
        TodoActions.createTodo(params);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Create new Todo item :
                </label>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange.bind(this)} />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
