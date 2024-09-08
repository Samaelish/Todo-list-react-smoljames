const TodoInput = props => {
  const { handleAddTodos, todoValue, setTodoValue } = props
  return (
    <header>
      <input
        value={todoValue}
        onChange={e => {
          setTodoValue(e.target.value)
        }}
        placeholder='Введите задачу...'
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue)
          setTodoValue('')
        }}
      >
        Добавить
      </button>
    </header>
  )
}
export default TodoInput
