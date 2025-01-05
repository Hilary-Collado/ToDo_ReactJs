import { useState, useEffect} from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Todos from './Components/Todos'


// const initialStateTodos = [
//   {
//     id: 1,
//     title: "ToDo #1",
//     descripcion: "ToDo #1",
//     state: true,
//     priority: true
//   },
//   {
//     id: 2,
//     title: "ToDo #2",
//     descripcion: "ToDo #2",
//     state: false,
//     priority: false
//   },
//   {
//     id: 3,
//     title: "ToDo #3",
//     descripcion: "ToDo #3",
//     state: false,
//     priority: true
//   }
// ]

const initialStateTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

function App() {

  const [todos, setTodos] = useState(initialStateTodos)
  const { title } = todos

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) // guarda en el local storage
    // console.log("useEffect") // se ejecuta cada vez que se renderiza el componente
  }, [ todos ]) // se ejecuta solo cuando cambia el estado de todos

  const addTodo = todo => {
    setTodos([...todos, todo])
    // ...todos => agrega una copia de todos los ToDos anteriores 
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0
      if (a.priority) return -1
      if (!a.priority) return 1
    })
  }

  return (
    <div className="container mb-2">
      <h1 className='my-5'>TO DO</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default App
