import { ITodo } from "../interfaces/interfaces"

const TODOS = 'todos'

class LocalStorageService {
    getTodos(): ITodo[] {
        const todos = localStorage.getItem(TODOS)
        return todos ? JSON.parse(todos) : []
    }

    setTodos(todos: ITodo[]) {
        localStorage.setItem(TODOS, JSON.stringify(todos));
    }
}

export default new LocalStorageService();