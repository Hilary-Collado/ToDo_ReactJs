import Todo from './Todo'

const Todos = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Todos</h2>
            <ul className='list-group'>
                {/* para recorrer los todos */}
                {todos.map((todo) => (
                    // <li key={todo.id}>{todo.title}</li>
                    <Todo key={todo.id} 
                    todo={todo}
                    deleteTodo={deleteTodo} 
                    updateTodo={updateTodo}/>
                ))}
                {
                    todos.length === 0 && (<li className='list-group-item text-center'>No ha ingresado nada</li>)
                }
            </ul>
        </div>
    )
}

export default Todos;