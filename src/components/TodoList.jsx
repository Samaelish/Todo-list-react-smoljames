import { useState, useEffect } from 'react'
import TodoCard from './TodoCard'
import TodoInput from './TodoInput'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />

      <ul className='main'>
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
              key={todoIndex}
              index={todoIndex}
            >
              <p>{todo}</p>
            </TodoCard>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
