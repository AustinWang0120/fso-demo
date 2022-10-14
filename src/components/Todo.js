import { useState } from "react"

const Todo = ({ todo, handleToggle, handleRemove, handleUpdate }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [newContent, setNewContent] = useState(todo.content)

    const handleContentChange = (event) => setNewContent(event.target.value)

    const handleSave = () => {
        handleUpdate(todo.id, { ...todo, content: newContent })
        setIsEdit(!isEdit)
    }

    const handleCancel = () => setIsEdit(!isEdit)

    if (isEdit) {
        return (
            <div className={"list__element"}>
                <input value={newContent} onChange={handleContentChange} />
                <button onClick={handleSave}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        )
    }

    return (
        <div className={"list__element"}>
            <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed ? true : false}
                onChange={() => {}}
                onClick={handleToggle(todo.id)}
            />
            <label
                className={`${todo.completed ? "list__label--completed" : ""}`}
                htmlFor={todo.id}
            >
                {todo.content}
            </label>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <button onClick={handleRemove(todo.id)}>Delete</button>
        </div>
    )
}

export default Todo
