const Form = ({ newTodoContent, handleNewTodoChange, addTodo }) => {
    return (
        <div>
            <h3>Add a new</h3>
            <form className="form" onSubmit={addTodo}>
                <input
                    className="form__input"
                    value={newTodoContent}
                    onChange={handleNewTodoChange}
                />
                <button className="form__submit" type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form
