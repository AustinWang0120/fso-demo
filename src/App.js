import { useState, useEffect } from "react"
import todoService from "./services/todos"
import Todo from "./components/Todo"

const App = () => {
    const [todos, setTodos] = useState([])
    const [newTodoContent, setNewTodoContent] = useState("")
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        todoService.getAll().then((initialTodos) => setTodos(initialTodos))
    }, [])

    const addTodo = (event) => {
        event.preventDefault()
        const newTodoObject = {
            content: newTodoContent,
            date: new Date().toISOString(),
            completed: false,
            id: todos.length + 1,
        }
        todoService.create(newTodoObject).then((returnedTodo) => {
            setTodos(todos.concat(returnedTodo))
            setNewTodoContent("")
        })
    }

    const handleNewTodoChange = (event) => setNewTodoContent(event.target.value)

    const handleShowClick = () => setShowAll(!showAll)

    const handleToggle = (id) => () => {
        const theTodo = todos.find((todo) => todo.id === id)
        const changedTodo = { ...theTodo, completed: !theTodo.completed }

        todoService.update(id, changedTodo).then((returnedTodo) => {
            setTodos(
                todos.map((todo) => (todo.id === id ? returnedTodo : todo))
            )
        })
    }

    const handleUpdate = (id, newTodo) => {
        todoService
            .update(id, newTodo)
            .then((returnedTodo) =>
                setTodos(
                    todos.map((todo) => (todo.id === id ? returnedTodo : todo))
                )
            )
    }

    const handleRemove = (id) => () => {
        todoService
            .remove(id)
            .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
    }

    const todosToShow = showAll
        ? todos
        : todos.filter((todo) => !todo.completed)

    return (
        <div className="container">
            <h1>Todo List</h1>

            <form className="form" onSubmit={addTodo}>
                <input
                    className="form__input"
                    value={newTodoContent}
                    onChange={handleNewTodoChange}
                />
                <button className="form__submit" type="submit">
                    Add
                </button>
                <button
                    className="form__button"
                    type="button"
                    onClick={handleShowClick}
                >
                    Show {showAll ? "uncompleted" : "all"}
                </button>
            </form>

            <ul className="list">
                {todosToShow.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdate}
                    />
                ))}
            </ul>
        </div>
    )
}

export default App
