import dispatcher from "../dispatcher";
import axios from 'axios';
import config from '../../../config/default';

export function init() {
    axios.get(`${config.api.host}:${config.api.port}/${config.api.path}/${config.api.version}/todos`)
        .then((datas) => {
            dispatcher.dispatch({type: "RECEIVE_TODOS", todos: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}

export function createTodo(params) {
  // Axios

    axios.post(`${config.api.host}:${config.api.port}/${config.api.path}/${config.api.version}/todos`, params)
        .then((datas) => {
            dispatcher.dispatch({type: "CREATE_TODO", todo: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});

}

export function updateTodo(id, params) {
  // Axios

    axios.put(`${config.api.host}:${config.api.port}/${config.api.path}/${config.api.version}/todo/${id}`, params)
        .then((datas) => {
            dispatcher.dispatch({type: "UPDATE_TODO", todo: datas.data});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}

export function deleteTodo(id) {
  // Axios

    axios.delete(`${config.api.host}:${config.api.port}/${config.api.path}/${config.api.version}/todo/${id}`)
        .then((datas) => {
            dispatcher.dispatch({type: "DELETE_TODO", id_todo: id});
        })
        .catch((err) => {alert(`An error occured : ${err}`)});
}
