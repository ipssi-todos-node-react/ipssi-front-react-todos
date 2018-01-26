import React from "react";
import * as TodoActions from "../../actions/TodoActions";

export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({params: {text: event.target.value}});
    }

    edit(){
        TodoActions.updateTodo(this.state.id, this.state.params);
    }

    delete(){
        TodoActions.deleteTodo(this.props.id);
    }

    render() {
        return (
            <li>
                <div>
                    <input type="text" name="text" value={this.state.params.text} onChange={this.handleChange.bind(this)} />
                </div>
                <div>
                    <span onClick={this.edit.bind(this)}>Éditer</span> <span onClick={this.delete.bind(this)}>Supprimer</span>
                </div>
            </li>
        );
    }
}
