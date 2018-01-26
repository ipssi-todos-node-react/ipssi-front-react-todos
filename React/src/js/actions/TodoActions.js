import dispatcher from "../dispatcher";
import axios from 'axios';

export function init() {
    axios.get('http://localhost:8081/api/v1/todos')
        .then((datas) => {
            dispatcher.dispatch({type: "RECEIVE_TODOS", todos: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}

export function createTodo(params) {
  // Axios
    console.log('create');
    console.log(params);

    axios.post('http://localhost:8081/api/v1/todos', params)
        .then((datas) => {
            dispatcher.dispatch({type: "CREATE_TODO", todo: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});

}

export function updateTodo(id, params) {
  // Axios

    axios.put('http://localhost:8081/api/v1/todo/' + id, params)
        .then((datas) => {
            dispatcher.dispatch({type: "UPDATE_TODO", todo: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}

export function deleteTodo(id) {
  // Axios

    axios.delete('http://localhost:8081/api/v1/todo/' + id)
        .then((datas) => {
            dispatcher.dispatch({type: "DELETE_TODO", id_todo: id});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}

// export function deleteAllTodos() {
//   // Axios
//
//   // reloadTodos
//   dispatcher.dispatch({
//     type: "DELETE_ALL_TODO",
//   });
// }
