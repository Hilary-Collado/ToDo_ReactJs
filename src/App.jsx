import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Todos from './Components/Todos'


const initialStateTodos = [
  {
    id: 1,
    title: "ToDo #1",
    descripcion: "ToDo #1",
    state: true,
    priority: true
  },
  {
    id: 2,
    title: "ToDo #2",
    descripcion: "ToDo #2",
    state: false,
    priority: false
  },
  {
    id: 3,
    title: "ToDo #3",
    descripcion: "ToDo #3",
    state: false,
    priority: true
  }
]

function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  const addTodo = todo =>{
    setTodos([...todos, todo])
    // ...todos => agrega una copia de todos los ToDos anteriores 
  }
  return (
    <div className="container mb-2">
      <h1 className='my-5'>Formularios</h1>
      <Formulario addTodo={addTodo}/>
      <Todos  todos={todos}/>
    </div>
  )
}

export default App
